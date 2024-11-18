import React from 'react';

const ProjectDetails = ({ title, image, description, skill, objectives }) => {
    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h1 style={styles.title}>{title}</h1>
                <p style={styles.description}><strong>Description:</strong> {description}</p>
                <p style={styles.description}><strong>Skill:</strong> {skill}</p>
                <p style={styles.description}><strong>Objectives:</strong> {objectives}</p>
            </div>
            <img src={image} alt={title} style={styles.image} />
        </div>
    );
};

// Updated styles for horizontal layout
const styles = {
    container: {
        display: 'flex', // Arrange items horizontally
        flexDirection: 'row', // Ensure content is in a row
        alignItems: 'center', // Center items vertically
        justifyContent: 'space-between', // Space between text and image
        width: '90%',
        maxWidth: '800px',
        margin: '20px auto',
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#FFF',
    },
    image: {
        width: '50%', // Half the width of the container
        height: 'auto', // Maintain aspect ratio
        objectFit: 'cover',
    },
    content: {
        width: '50%', // Half the width of the container
        padding: '20px',
        textAlign: 'left', // Align text to the left
    },
    title: {
        fontSize: '2em',
        color: '#333',
        marginBottom: '16px',
    },
    description: {
        fontSize: '1em',
        color: '#555',
        lineHeight: '1.5',
        marginBottom: '10px',
    },
};

export default ProjectDetails;
