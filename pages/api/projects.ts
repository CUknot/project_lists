import type { NextApiRequest, NextApiResponse } from "next";
import multer from "multer";
import path from "path";
import fs from "fs";

// Mock database for storing projects (in-memory storage for simplicity)
let projects: Project[] = [];
let projectIdCounter = 7; // Initialize a counter for project IDs

// Define your Project type
type Project = {
  project_id: number;
  project_name: string;
  project_github_url: string;
  project_picture: string;
};

// Predefined set of projects
const predefinedProjects: Project[] = [
  {
    project_id: 1,
    project_name: 'ASCII Donut Animation Project',
    project_github_url: 'https://github.com/CUknot/Donut-Web.git',
    project_picture: '/images/picture1.png',
  },
  {
    project_id: 2,
    project_name: 'chess',
    project_github_url: 'https://github.com/CUknot/react-chess.git',
    project_picture: '/images/picture2.png',
  },
  {
    project_id: 3,
    project_name: 'resume',
    project_github_url: 'https://github.com/CUknot/resume.git',
    project_picture: '/images/picture3.png',
  },
  {
    project_id: 4,
    project_name: 'space-ace',
    project_github_url: 'https://github.com/2110215-ProgMeth/project-2022-2-space-ace.git',
    project_picture: '/images/picture4.png',
  },
  {
    project_id: 5,
    project_name: 'To-Do List Web Application',
    project_github_url: 'https://github.com/CUknot/ESS_Final_Project.git',
    project_picture: '/images/picture5.png',
  },
  {
    project_id: 6,
    project_name: 'Web Application showing dust location at locations in Bangkok districts',
    project_github_url: 'https://github.com/SecretKr/embed-final-project.git',
    project_picture: '/images/picture6.jpg',
  },
];

type ResponseData = {
  message: string;
  projects?: Project[];
};

// Simulate storing projects in a "database"
let isDatabaseEmpty = true; // Flag to check if the database is empty

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(process.cwd(), "public/uploads");
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Middleware to process file uploads
const uploadMiddleware = upload.single("project_picture");

function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: Function) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: unknown) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    try {
      // Process the file upload
      await runMiddleware(req, res, uploadMiddleware);

      const { project_name, project_github_url } = req.body;
      const file = (req as any).file; // Access the uploaded file

      if (!project_name || !project_github_url) {
        return res.status(400).json({
          message: "All fields are required: project_name, project_github_url.",
        });
      }

      const project_picture = file ? `/uploads/${file.filename}` : '/placeholder.png';

      // Add project to mock database
      const newProject = {
        project_id: ++projectIdCounter, 
        project_name,
        project_github_url,
        project_picture,
      };
      projects.push(newProject);

      return res.status(201).json({
        message: "Project created successfully!",
      });
    } catch (error) {
      console.error("Error processing upload:", error);
      return res.status(500).json({ message: "Error processing upload." });
    }
  } else if (req.method === "GET") {
    if (isDatabaseEmpty) {
      projects = predefinedProjects;
      projectIdCounter = 6;
      isDatabaseEmpty = false; // Set the flag to false after initialization
    }

    // Return the list of projects
    return res.status(200).json({
      message: "Projects retrieved successfully!",
      projects,
    });
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}

// Disable bodyParser for this API route
export const config = {
  api: {
    bodyParser: false,
  },
};
