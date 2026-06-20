import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import fs from 'fs/promises';
import path from 'path';

const DB_NAME = 'kifayatly-shop';
const COLLECTION_NAME = 'projects';

// GET all projects
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION_NAME);

    // Fetch projects from MongoDB
    let projects = await collection.find({}).toArray();

    // Auto-Migration Logic: If MongoDB is empty, try to import from local JSON
    if (projects.length === 0) {
      try {
        const dataFilePath = path.join(process.cwd(), 'data', 'projects.json');
        const fileContent = await fs.readFile(dataFilePath, 'utf-8');
        const localProjects = JSON.parse(fileContent);
        
        if (localProjects && localProjects.length > 0) {
          console.log(`Migrating ${localProjects.length} projects to MongoDB...`);
          // MongoDB insertMany mutates the original objects by adding _id, which is fine
          await collection.insertMany(localProjects);
          projects = await collection.find({}).toArray();
        }
      } catch (err) {
        // No local file to migrate, safe to ignore
      }
    }

    // Map `_id` to `id` for frontend compatibility just in case
    const formattedProjects = projects.map(p => ({
      ...p,
      _id: p._id.toString()
    }));

    return NextResponse.json(formattedProjects);
  } catch (error) {
    console.error('Error fetching projects from MongoDB', error);
    return NextResponse.json([], { status: 500 });
  }
}

// POST a new project
export async function POST(request: Request) {
  try {
    const newProject = await request.json();
    
    // Add unique string ID if not present (useful for URLs)
    if (!newProject.id) {
      newProject.id = newProject.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Date.now();
    }

    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION_NAME);

    await collection.insertOne(newProject);

    return NextResponse.json({ success: true, project: newProject });
  } catch (error) {
    console.error('Error saving project to MongoDB', error);
    return NextResponse.json({ error: 'Failed to save project' }, { status: 500 });
  }
}

// DELETE a project
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) return NextResponse.json({ error: 'Missing id parameter' }, { status: 400 });

    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION_NAME);

    // Delete by the custom 'id' string field we generate
    const result = await collection.deleteOne({ id: id });

    if (result.deletedCount === 0) {
        return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting project from MongoDB', error);
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 });
  }
}
