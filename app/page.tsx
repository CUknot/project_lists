// app/page.tsx
import Link from 'next/link';
import Form from './components/Form';

interface Project {
  project_id: number;
  project_name: string;
  project_github_url: string;
  project_readme: string;
}

async function fetchProjects(): Promise<Project[]> {
  const response = await fetch('http://localhost:3001/api/projects'); // Use the full URL for local dev
  const data = await response.json();
  return data.project || [];
}

export default async function Home() {
  const projects = await fetchProjects();

  function handleSubmit(formData: FormData) {
    console.log(formData);
  }

  return (
    <div className="p-4">
      
      <h1 className="text-2xl font-bold mb-4">Projects</h1>

      <ul>
        {projects.map((project) => (
          <li key={project.project_id} className="mb-2 text-blue-600 underline">
            <Link href={`/project/${project.project_id}`}>
              {project.project_name}
            </Link>
          </li>
        ))}
      </ul>
      
      <Form/>

    </div>
  );
}

