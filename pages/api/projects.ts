import type { NextApiRequest, NextApiResponse } from 'next';
import { getProjects } from '../../lib/projects';


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
  } else {
    // Handle unsupported methods
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
