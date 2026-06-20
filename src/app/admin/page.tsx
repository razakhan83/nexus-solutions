"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Trash2, Plus, Loader2 } from "lucide-react";

interface Project {
  id: string;
  name: string;
  tag: string;
  challenge: string;
  delivered: string[];
  stat: string;
  statLabel: string;
  image: string;
  link: string;
}

export default function AdminPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");
  const [challenge, setChallenge] = useState("");
  const [delivered, setDelivered] = useState("");
  const [stat, setStat] = useState("");
  const [statLabel, setStatLabel] = useState("");
  const [image, setImage] = useState("/undraw_control-panel_s0j2.svg");
  const [link, setLink] = useState("https://example.com");

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/projects");
      const data = await res.json();
      setProjects(data);
    } catch (error) {
      console.error("Failed to fetch projects", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    
    try {
      const res = await fetch(`/api/projects?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setProjects(projects.filter((p) => p.id !== id));
      }
    } catch (error) {
      console.error("Failed to delete project", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newProject = {
      name,
      tag,
      challenge,
      delivered: delivered.split(",").map((i) => i.trim()), // Convert comma separated string to array
      stat,
      statLabel,
      image,
      link,
    };

    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProject),
      });

      if (res.ok) {
        const data = await res.json();
        setProjects([...projects, data.project]);
        // Reset form
        setName("");
        setTag("");
        setChallenge("");
        setDelivered("");
        setStat("");
        setStatLabel("");
      }
    } catch (error) {
      console.error("Failed to add project", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950">
      <Header />
      
      <div className="pt-32 pb-24 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 mb-2">Portfolio Admin</h1>
          <p className="text-zinc-600">Manage the Case Studies shown on your homepage.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: List Current Projects */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-zinc-900">Current Projects</h2>
            
            {isLoading ? (
              <div className="flex items-center justify-center p-12 bg-white rounded-xl border border-zinc-200">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : projects.length === 0 ? (
              <div className="p-12 text-center bg-white rounded-xl border border-zinc-200 text-zinc-500">
                No projects found. Add one below.
              </div>
            ) : (
              <div className="space-y-4">
                {projects.map((project) => (
                  <Card key={project.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <div className="mb-4 sm:mb-0">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="px-2 py-1 text-xs font-mono font-medium bg-primary/5 text-primary rounded border border-primary/20">
                          {project.tag}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-zinc-900">{project.name}</h3>
                      <p className="text-sm text-zinc-500 mt-1 line-clamp-1 max-w-md">{project.challenge}</p>
                    </div>
                    <Button 
                      variant="destructive" 
                      onClick={() => handleDelete(project.id)}
                      className="bg-red-50 text-red-600 hover:bg-red-600 hover:text-white border border-red-100"
                    >
                      <Trash2 className="h-4 w-4 mr-2" /> Delete
                    </Button>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Add New Form */}
          <div>
            <Card className="sticky top-32">
              <CardHeader className="bg-zinc-50/50 border-b border-zinc-100 pb-4">
                <CardTitle>Add New Project</CardTitle>
                <CardDescription>Fill out the details to add a new case study to the homepage.</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label>Project Name</Label>
                    <Input required value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Acme Corp Rebrand" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Category Tag</Label>
                    <Input required value={tag} onChange={(e) => setTag(e.target.value)} placeholder="e.g. E-Commerce" />
                  </div>

                  <div className="space-y-2">
                    <Label>Business Challenge</Label>
                    <Textarea required value={challenge} onChange={(e) => setChallenge(e.target.value)} placeholder="Describe the client's problem..." className="resize-none" />
                  </div>

                  <div className="space-y-2">
                    <Label>Features Delivered (comma separated)</Label>
                    <Input required value={delivered} onChange={(e) => setDelivered(e.target.value)} placeholder="e.g. Next.js App, Stripe API" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Stat Number</Label>
                      <Input required value={stat} onChange={(e) => setStat(e.target.value)} placeholder="e.g. +140%" />
                    </div>
                    <div className="space-y-2">
                      <Label>Stat Label</Label>
                      <Input required value={statLabel} onChange={(e) => setStatLabel(e.target.value)} placeholder="e.g. ROAS Increase" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Image Illustration Path</Label>
                    <Input required value={image} onChange={(e) => setImage(e.target.value)} placeholder="/undraw_charts_31si.svg" />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary text-white mt-4">
                    {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Plus className="h-4 w-4 mr-2" />}
                    Add Project
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}
