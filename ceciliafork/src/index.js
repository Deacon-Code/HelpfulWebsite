import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './Components/Contact';
import ProjectCard from './Components/ProjectCard';
import projects from './projects.json';
import Calendar from './Components/Calendar'; // Case-sensitive
import Home from './Components/Home';
import Announcements from './Components/Announcements';
import Team from './Components/Team';
import Footer from './Components/Footer';
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
    // <div style={{ backgroundColor: 'grey' }}>
    <div>
    <Home />
        <h2>Projects</h2>
        <ProjectList />
        <h2>Calendar</h2>
        <Calendar />
        <h2>Contact</h2>
        <Contact />
        <h2>Announcements</h2>
        <div style={{ marginTop: '20px' }}>
            <Announcements />
        </div>
        <div id='team-section' style={{ marginTop: '20px' }}>
            <h2>Our Team</h2>
            <Team />
        </div>
        <div style={{ marginTop: '20px' }}>
            <Footer />
        </div>
    </div>
);

// Render the App
ReactDOM.render(<App />, document.getElementById('root'));
