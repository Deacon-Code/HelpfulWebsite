import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './Components/Contact'
import ProjectCard from './Components/ProjectCard';
import ProjectDetails from './Components/ProjectDetails'
import projectImage1 from './assets/project1.jpg';
import projectImage2 from './assets/project2.jpg';
import projectImage3 from './assets/project3.jpg';
import projects from './projects.json';


const element = <h1>Hello world</h1>;
const projectImages = [projectImage1, projectImage2, projectImage3]; // Array for mapping images
const firstProject = projects[0];

const app = (
    <>
        {/* const projectImages = [projectImage1, projectImage2, projectImage3]; // Array for mapping images */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            {/* <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}> */}
            {projects.map((project, index) => (
                <ProjectCard
                    key={project.id} // Unique key for React
                    image={projectImages[index]} // Dynamically assign images
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    skill={project.skill}
                />
            ))}
            {/* <Route path="/ProjectDetails" element={<ProjectDetails />} /> */}
        </div>
        {/* <ProjectCard
                image={projectImage1}
                title="The First Project"
                description="A brief overview of the second project."
                // link="https://example.com/project1" // Link to the project page
        />
        <ProjectCard
                image={projectImage2}
                title="The Second Project"
                description="A brief overview of the second project."
                // link="https://example.com/project1" // Link to the project page
        /> */}
        <Contact />
        <ProjectDetails
            title={firstProject.title}
            image={require(`${firstProject.image}`)}
            description={firstProject.description}
            skill={firstProject.skill}
            objectives={firstProject.objectives}
        />
    </>
);

ReactDOM.render(app, document.getElementById('root'));

