import type { NextApiRequest, NextApiResponse } from 'next';
import { getProjects, addProject} from '../../lib/projects';


type Project = {
  project_id: number;
  project_name: string;
  project_github_url: string;
  project_readme: string;
};

type ResponseData = {
  message: string;
  project?: Project | Project[];  // This allows returning either a single project or an array of projects
};

const projects: Project[] = getProjects();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'GET') {
    // Handle GET request
    return res.status(200).json({
      message: 'Projects fetched successfully!',
      project: projects, // Return all projects
    });
  } 

  if (req.method === 'POST') {
    const { project_name, project_github_url, project_readme } = req.body;

    // Validate request body
    if (!project_name || !project_github_url || !project_readme) {
      return res
        .status(400)
        .json({ message: 'All fields are required: project_name, project_github_url, project_readme.' });
    }

    // Add the new project
    const newProject = addProject({
      project_name,
      project_github_url,
      project_readme,
    });

    return res.status(201).json({
      message: 'Project created successfully!',
      project: newProject,
    });
  }

  res.status(405).json({ message: 'Method Not Allowed' });
}
