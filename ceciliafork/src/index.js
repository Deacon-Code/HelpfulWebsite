import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './Components/Contact';
import ProjectCard from './Components/ProjectCard';
import projects from './projects.json';
import Calendar from './Components/Calendar'; // Case-sensitive

// Component to display a list of projects
const ProjectList = () => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            {projects.map((project, index) => (
                <ProjectCard
                    key={project.id} // Unique key for each project
                    image={require(`./assets/${project.image}`)} // Dynamically resolve image
                    title={project.title} // Project title
                    description={project.description} // Project description
                    skill={project.skill} // Skills involved
                    objectives={project.objectives} // Objectives of the project
                />
            ))}
        </div>
    );
};

// Main App Component
const App = () => (
    <>
        <ProjectList />
        <Calendar />
        <Contact />
    </>
);

// Render the App
ReactDOM.render(<App />, document.getElementById('root'));
