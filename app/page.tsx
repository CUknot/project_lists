// app/page.tsx
import Link from 'next/link';
import Form from './components/Form';

type Project = {
  project_id: number;
  project_name: string;
  project_github_url: string;
  project_picture: string;
};

async function fetchProjects(): Promise<Project[]> {
  const response = await fetch('http://localhost:3001/api/projects'); // Use the full URL for local dev
  const data = await response.json();
  return data.projects || [];
}

export default async function Home() {
  const projects = await fetchProjects();
  console.log(projects);

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-300 to-rose-400 flex flex-col items-center px-4 sm:px-8">
      {/* Title */}
      <h1 className="text-3xl font-bold mt-8 mb-8 text-center text-black">My Project List</h1>

      {/* Add Form */}
      <Form />

      {/* Project List Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <div
            key={project.project_id}
            className="bg-white rounded-md shadow-md p-4 flex flex-col items-center mb-4"
          >
            <img
              src={project.project_picture}
              alt={`${project.project_name} thumbnail`}
              className="w-full h-auto object-contain rounded-md mb-4"
            />
            <h3 className="text-lg font-medium mb-2 text-black">{project.project_name}</h3>
            <Link
              href={project.project_github_url}
              className="text-black underline"
            >
              View on GitHub
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
