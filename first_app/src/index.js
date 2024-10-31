import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './Components/Contact'
import ProjectCard from './Components/ProjectCard';
import projectImage1 from './assets/project1.jpg'; 
import projectImage2 from './assets/project2.jpg'; 

const element = <h1>Hello world</h1>;

const app = (
    <>
        <ProjectCard
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
        />
        <Contact />
    </>
);

ReactDOM.render(app, document.getElementById('root'));

