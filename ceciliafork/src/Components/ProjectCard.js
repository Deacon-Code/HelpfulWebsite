import React from 'react';

const ProjectCard = ({ image, title, description, skill, objectives }) => {
    return (
        <div style={styles.card}>
            <img src={image} alt={title} style={styles.image} />
            <div style={styles.content}>
                <h2 style={styles.title}>{title}</h2>
                <p style={styles.description}><strong>Description:</strong> {description}</p>
                <p style={styles.description}><strong>Skill:</strong> {skill}</p>
                <p style={styles.description}><strong>Objectives:</strong> {objectives}</p>
            </div>
        </div>
    );
};

// Inline styles for the ProjectCard
const styles = {
    card: {
        width: '300px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.3s ease',
        backgroundColor: '#FFF',
        cursor: 'pointer',
        textAlign: 'left', // Align text to the left for better readability
    },
    image: {
        width: '100%',
        height: '180px',
        objectFit: 'cover',
    },
    content: {
        padding: '16px',
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
