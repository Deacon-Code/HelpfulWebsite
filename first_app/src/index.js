import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import Contact from './Components/Contact';
import ProjectCard from './Components/ProjectCard';
import ProjectDetails from './Components/ProjectDetails';
import projectImage1 from './assets/project1.jpg';
import projectImage2 from './assets/project2.jpg';
import projectImage3 from './assets/project3.jpg';
import projects from './projects.json';

// Map images to project indices
const projectImages = [projectImage1, projectImage2, projectImage3];

// Component to display a list of projects
const ProjectList = () => {
    const navigate = useNavigate(); // Hook for navigation

    // Function to handle card click
    const handleCardClick = (projectId) => {
        // Navigate to the specific project details page based on project ID
        navigate(`/project-details/${projectId}`);
    };

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            {projects.map((project, index) => (
                <ProjectCard
                    key={project.id} // Unique key for each project
                    image={projectImages[index]} // Image for the project
                    title={project.title} // Project title
                    description={project.description} // Project description
                    onClick={() => handleCardClick(project.id)} // Click handler with hardcoded project ID
                />
            ))}
        </div>
    );
};

// Component to display project details based on the hardcoded project ID
const ProjectDetailsWrapper = () => {
    const { id } = useParams(); // Extract project ID from the URL
    const project = projects.find((proj) => proj.id === parseInt(id, 10)); // Find the project by ID

    // If no project is found, display a fallback message
    if (!project) {
        return <p>Project details not found. Please go back and select a project.</p>;
    }

    const image = projectImages[project.id - 1]; // Get the corresponding project image

    return (
        <ProjectDetails
            title={project.title}
            image={image}
            description={project.description}
            skill={project.skill}
            objectives={project.objectives}
        />
    );
};

// Layout for the homepage (with ProjectList and Contact)
const HomeLayout = () => (
    <>
        <ProjectList />
        <Contact />
    </>
);

// Layout for the project details page (only ProjectDetails)
const ProjectDetailsLayout = () => (
    <Routes>
        <Route path="/project-details/:id" element={<ProjectDetailsWrapper />} />
    </Routes>
);

// Main App Component
const App = () => (
    <Router>
        <Routes>
            {/* Home page layout with ProjectList and Contact */}
            <Route path="/" element={<HomeLayout />} />

            {/* Project details layout with only ProjectDetails */}
            <Route path="/project-details/:id" element={<ProjectDetailsWrapper />} />
        </Routes>
    </Router>
);

// Render the App
ReactDOM.render(<App />, document.getElementById('root'));
