import React from 'react';

const ProjectCard = ({ image, title, description, skill, objectives }) => {
    return (
        <div style={styles.card}>
            <img src={image} alt={title} style={styles.image} />
            <div style={styles.content}>
                <h2 style={styles.title}>{title}</h2>
                <p style={styles.description}><h3>Team Objectives:</h3> {objectives}</p>
                <p style={styles.description}><h3>Current Work:</h3> {description}</p>
                <p style={styles.description}><h3>Skills learned in this project:</h3> {skill}</p>

            </div>
        </div>
    );
};

// Inline styles for the ProjectCard
const styles = {
    card: {
        width: '25%', // Card width adapts to the grid cell
        border: '1px solid #ddd',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Lighter, wider shadow
        transition: 'transform 0.3s ease',
        backgroundColor: '#FFF',
        textAlign: 'left',
        padding: '1%',
    },
    image: {
        width: '100%',
        height: '200px', // Adjust height for better proportions
        objectFit: 'cover',
    },
    content: {
        padding: '10px',
    },
    title: {
        fontSize: '1.5em',
        color: '#333',
        margin: '8px 0',
    },
    description: {
        fontSize: '1em',
        color: '#555',
        marginBottom: '10px',
        lineHeight: '1.5',
    },
};


export default ProjectCard;
