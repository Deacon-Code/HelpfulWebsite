import React from 'react';
import projects from './projects.json'; // Import the JSON file

const ProjectDetails1 = () => {
    const firstProject = projects[0]; // Access the first project

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>{firstProject.title}</h1>
            <img src={require(`./assets/${firstProject.image}`)} alt={firstProject.title} style={styles.image} />
            <p style={styles.objectives}>{firstProject.objectives}</p>
            <p style={styles.skills}><strong>Skills:</strong> {firstProject.skill}</p>
        </div>
    );
};

const styles = {
    container: {
        width: '90%',
        maxWidth: '600px',
        margin: '20px auto',
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#FFF',
        textAlign: 'center',
        padding: '16px',
    },
    title: {
        fontSize: '2em',
        color: '#333',
        margin: '16px 0',
    },
    image: {
        width: '100%',
        height: '300px',
        objectFit: 'cover',
    },
    description: {
        fontSize: '1em',
        color: '#555',
        lineHeight: '1.5',
    },
    skills: {
        fontSize: '1em',
        color: '#777',
    },
};

export default ProjectDetails1;
