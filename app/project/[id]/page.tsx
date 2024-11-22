// app/project/[id]/page.tsx
import BackButton from "./BackButton";

interface Project {
    project_id: number;
    project_name: string;
    project_github_url: string;
    project_readme: string;
  }
  
  async function fetchProject(id: string): Promise<Project> {
    const response = await fetch(`http://localhost:3001/api/project/${id}`);  // Use template literals to insert the `id` dynamically
    const data = await response.json();
    
    return data.project || null;  // Return null if no project is found
  }
  
  export default async function ProjectDetails({ params }: { params: { id: string } }) {
    const project = await fetchProject(params.id);
  
    return (
      <div>
        <h1 className="text-2xl font-bold mb-2">{project.project_name}</h1>
        <h2 className="text-xl mb-2">
          GitHub URL: <a href={project.project_github_url} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">{project.project_github_url}</a>
        </h2>
        <div className="leading-normal">
          <h3 className="text-lg font-semibold">README:</h3>
          <pre className="bg-black text-white p-4 rounded overflow-auto whitespace-pre-wrap">{project.project_readme}</pre>
        </div>

        {/* Go Back Button */}
        <BackButton />
      </div>
    );
  }
  