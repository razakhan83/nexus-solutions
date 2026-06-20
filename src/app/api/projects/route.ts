import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'projects.json');

// GET all projects
export async function GET() {
  try {
    const fileContent = await fs.readFile(dataFilePath, 'utf-8');
    const projects = JSON.parse(fileContent);
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error reading projects.json', error);
    return NextResponse.json([]);
  }
}

// POST a new project
export async function POST(request: Request) {
  try {
    const newProject = await request.json();
    
    // Ensure data directory exists
    const dataDir = path.join(process.cwd(), 'data');
    await fs.mkdir(dataDir, { recursive: true });

    let projects = [];
    try {
      const fileContent = await fs.readFile(dataFilePath, 'utf-8');
      projects = JSON.parse(fileContent);
    } catch (err) {
      // File doesn't exist yet, that's fine
    }

    // Add unique ID
    newProject.id = newProject.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Date.now();

    projects.push(newProject);
    await fs.writeFile(dataFilePath, JSON.stringify(projects, null, 2), 'utf-8');

    return NextResponse.json({ success: true, project: newProject });
  } catch (error) {
    console.error('Error saving project', error);
    return NextResponse.json({ error: 'Failed to save project' }, { status: 500 });
  }
}

// DELETE a project
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) return NextResponse.json({ error: 'Missing id parameter' }, { status: 400 });

    const fileContent = await fs.readFile(dataFilePath, 'utf-8');
    let projects = JSON.parse(fileContent);
    
    const initialLength = projects.length;
    projects = projects.filter((p: any) => p.id !== id);

    if (projects.length === initialLength) {
        return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    await fs.writeFile(dataFilePath, JSON.stringify(projects, null, 2), 'utf-8');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting project', error);
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 });
  }
}
