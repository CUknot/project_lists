// lib/projects.ts
interface Project {
  project_id: number;
  project_name: string;
  project_github_url: string;
  project_readme: string;
}

let projects = [
    {
        project_id: 1,
        project_name: 'ASCII Donut Animation Project',
        project_github_url: 'https://github.com/CUknot/Donut-Web.git',
        project_readme: `
# ASCII Donut Animation Project [https://donut-web-pied.vercel.app/](https://donut-web-pied.vercel.app/)

## Overview

This project is a web-based ASCII animation that renders a spinning 3D donut in real-time. Inspired by the mathematical concepts discussed in a1k0n's "donut math" blog post, the project implements a frame-by-frame rotation effect using trigonometry and depth buffering to achieve a 3D illusion on a 2D plane.

## Technologies Used

- **TypeScript**: Provides static type-checking to enhance code reliability and maintainability.
- **HTML Canvas**: Used for rendering the donut shape in a browser.
- **CSS**: For styling the page, including background and layout settings.
- **JavaScript Math Functions**: Employed for sine, cosine, and other trigonometric calculations crucial for creating the 3D effect.

## Learning Objectives

Through this project, I aim to:

1. **Understand 3D Projections**: Learn how to convert 3D coordinates into 2D space using projection techniques.

2. **Implement Depth Buffering**: Manage pixel depth to create realistic overlap and shading, giving the animation a sense of 3D rotation.

3. **Optimize for Real-Time Rendering**: Enhance efficiency in calculations to achieve smooth animation in the browser.

4. **Build an Interactive Canvas**: Learn to utilize HTML Canvas and TypeScript for creating graphical, animated content in a web project.

## Project Structure

- **index.html**: The main HTML file to structure the page layout.
- **/src**: Contains all TypeScript code for rendering the animation and handling 3D calculations.
- **/styles**: Basic CSS files to style the canvas and overall layout.

## Features

- Renders a rotating 3D ASCII donut in real time.
- Interactive and efficient, leveraging canvas for a smooth animation experience.
- Calculates lighting and depth based on viewing angles for realistic shading.

## How to Run the Project

To run this project locally:

1. Clone the repository:
- git clone https://github.com/yourusername/ascii-donut.git
- cd ascii-donut

2. Install any dependencies (if using a bundler):
- Copy code
- npm install

3. npm start


## Contribution 
This project is based on a1k0n's work on ASCII donut animations. For further reading and inspiration, visit [a1k0n's donut math article](https://www.a1k0n.net/2011/07/20/donut-math.html).

        `
      },
      {
        project_id: 2,
        project_name: 'chess',
        project_github_url: 'https://github.com/CUknot/react-chess.git',
        project_readme: `
# Chess Game Project [https://cuknot.github.io/react-chess/](https://cuknot.github.io/react-chess/)

## Overview

This is a web-based chess game developed using React. The project aims to provide an engaging user experience while learning about various web development concepts, including state management, component structure, and styling with Tailwind CSS. 

## Technologies Used

- **React**: A JavaScript library for building user interfaces. It allows for the creation of reusable components, making the codebase easier to manage and scale.
- **Tailwind CSS**: A utility-first CSS framework that provides low-level utility classes for styling. It simplifies the process of creating responsive designs and custom styles.
- **JavaScript**: The primary programming language used for building the game logic and interactivity.
- **ES6+ Features**: Utilizing modern JavaScript features such as arrow functions, destructuring, and modules to write cleaner and more efficient code.
- **GitHub Pages**: For hosting the web application.

## Learning Objectives

Through the development of this chess game, I aim to achieve the following learning objectives:

1. **Component-Based Architecture**: Understanding how to design and implement a component-based architecture in React, which enhances code reusability and maintainability.

2. **State Management**: Learning how to manage state effectively within components using React hooks like \`useState\`.

3. **Game Logic Implementation**: Gaining experience in implementing complex game logic, including piece movement validation, turn management, and detecting checkmate.

4. **Styling with Tailwind CSS**: Familiarizing myself with Tailwind CSS to create responsive layouts and visually appealing designs without writing extensive custom CSS.

5. **User Experience (UX) Design**: Focusing on creating an intuitive user experience, including game interactions and visual feedback (e.g., highlighting valid moves, game over screens).

## Project Structure

- **/src**: Contains all the source code for the application.
- **/components**: Reusable components such as \`Board\`, \`Square\`, \`Piece\`, \`GameOverScreen\`, etc.
- **/utils**: Utility functions for game logic, including move validation and checkmate detection.

## Features

- Play a complete game of chess with a functional game board.
- Game over screen that displays the winner.
- Responsive design with Tailwind CSS for a modern look and feel.
- Restart functionality to reset the game.

## How to Run the Project

To run the project locally, follow these steps:

1. Clone the repository:
git clone [https://github.com/CUknot/react-chess.git](https://github.com/CUknot/react-chess.git)
git clone [https://github.com/CUknot/react-chess.git](https://github.com/CUknot/react-chess.git)
cd chess-game

2. Install the dependencies:
    npm install

3. npm start

        `
      },
      {
        project_id: 3,
        project_name: 'resume',
        project_github_url: 'https://github.com/CUknot/resume.git',
        project_readme: `
# Resumette

My Resume is cloned from [bookpanda/resumette](https://github.com/bookpanda/resumette), which is built on top of [Leomotors/resumette](https://github.com/Leomotors/resumette) and [narze/resume](https://github.com/narze/resume).


https://resume-ten-brown.vercel.app/
`
},
{
project_id: 4,
project_name: 'space-ace',
project_github_url: 'https://github.com/2110215-ProgMeth/project-2022-2-space-ace.git',
project_readme: `
#Space Ace

Space Ace is an exciting top-down shooting game built using JavaFX. Players control a spaceship to shoot enemies, dodge meteors, and face a challenging boss with multiple attack patterns and phases.

Features
Dynamic Gameplay: Engage in thrilling battles while maneuvering through waves of enemies and meteors.
Boss Battles: Face a formidable boss enemy with two unique phases and three attack patterns.
Challenging Obstacles: Navigate through dangerous meteor fields while fighting enemies.
Polished Graphics: Developed with JavaFX for a smooth and visually appealing experience.
Technologies Used
JavaFX: For the user interface and game rendering.
Java: Core language used to implement game logic.
Gameplay Overview
Player Controls:
Move your spaceship to dodge obstacles and position yourself for attacks.
Fire weapons to destroy enemies and meteors.
Enemies:
Encounter waves of enemy ships with varying behaviors.
Dodge meteors falling randomly across the screen.
Boss:
Fight a challenging boss with two distinct phases and three unique attack patterns.
Learn the boss's patterns to succeed!

`
},
{
project_id: 5,
project_name: 'To-Do List Web Application',
project_github_url: 'https://github.com/CUknot/ESS_Final_Project.git',
project_readme: `
# To-Do List Web Application

This is a simple **To-Do List Web Application** built using **Node.js** and **ExpressJS**. It allows users to create, update, and delete tasks with ease, offering a user-friendly experience for managing daily activities. 

## Project Overview

This project was developed as part of the **ESS Final Project**, focusing on backend and database operations. The backend connects seamlessly with the frontend, enabling efficient data management and user interaction.

### Features

- **Task Management**: Add, update, and delete tasks.
- **Routing**: Handled using ExpressJS for clear and maintainable code.
- **Database Integration**: Integrated a database for persistent storage of tasks.
- **Postman Testing**: Used Postman for testing API endpoints.

---

## Technologies and Frameworks Used

- **Node.js**: Backend runtime environment.
- **ExpressJS**: For routing and handling HTTP requests.
- **Database**: [Specify database, e.g., MongoDB, MySQL, etc.].
- **Postman**: To test and debug API endpoints.

---

## What I Did

1. Designed and implemented the backend logic to handle CRUD operations for tasks.
2. Established a connection between the frontend and backend using ExpressJS.
3. Managed database operations to store and retrieve tasks.
4. Tested and validated API endpoints with Postman.
5. Ensured code maintainability and scalability through modular design.

---

## What I Learned

- **Backend Development**: Gained hands-on experience building and managing backend logic in Node.js.
- **Routing with ExpressJS**: Learned how to create and organize routes effectively.
- **Database Integration**: Improved my skills in working with databases for data persistence.
- **API Development**: Learned to design, implement, and test RESTful APIs.
- **Debugging and Testing**: Used Postman to debug and test API functionality.

---

## How to Run the Project

1. Clone the repository:  
git clone https://github.com/CUknot/ESS-Final-Project.git

2. Navigate to the project directory:
cd ESS-Final-Project

3. install dependencies:
npm install

4. Start the server:
npm start

5. Open your browser and navigate to:
http://localhost:3000

        `
      },
      {
        project_id: 6,
        project_name: 'Web Application showing dust location at locations in Bangkok districts',
        project_github_url: 'https://github.com/SecretKr/embed-final-project.git',
        project_readme: `
#Dust Location Web Application

This web application provides real-time dust and air quality data for various districts in Bangkok. Users can explore an interactive map to view dust levels at specific locations.

Features
Real-time Dust Levels: View up-to-date air quality information across Bangkok's districts.
Interactive Map: Integrated with Leaflet for dynamic map interaction.
User-Friendly Interface: Simple and intuitive navigation.
Responsive Design: Optimized for both desktop and mobile devices.
Live Demo
Check out the live demo here.

Technologies Used
Frontend
React.js: For building the user interface.
Leaflet: For map visualization and interaction.
CSS: For styling and responsive design.
Backend & Database
Firebase: For real-time database and hosting.
        `
      },
  ];
  
  // Export getter and setter functions to interact with the projects array
  export function getProjects() {
    return projects;
  }
  
  export function addProject(project: Omit<Project, 'project_id'>): Project {
    const newProject: Project = {
      project_id: projects.length ? projects[projects.length - 1].project_id + 1 : 1,
      ...project,
    };
    projects.push(newProject);
    return newProject;
  }
  
  export function getProjectById(id: number) {
    return projects.find((project) => project.project_id === id);
  }
  