// pages/api/projects/[id].ts

import { NextApiRequest, NextApiResponse } from 'next';
import { getProjectById } from '../../../lib/projects';

// Define a global (in-memory) store for projects
/*let projects = [
  {
    project_id: 1,
    project_name: "ASCII Donut",
    project_github_url: "https://github.com/yourusername/ascii-donut",
    project_readme: "This project is a web-based ASCII animation that renders a spinning 3D donut.",
  },
  {
    project_id: 2,
    project_name: "React Chess",
    project_github_url: "https://github.com/yourusername/react-chess",
    project_readme: "A chess game built with React that lets you play against others online.",
  },
];*/

// Handle GET request for specific project by ID
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;  // Get the project ID from the URL query

  if (req.method === 'GET') {
    // Find the project with the provided ID
    const project = getProjectById(parseInt(id as string));

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    // Return the project if found
    return res.status(200).json({
      message: "Project fetched successfully!",
      project,
    });
  }

  // If method is not GET, return 405 Method Not Allowed
  res.status(405).json({ message: 'Method Not Allowed' });
}