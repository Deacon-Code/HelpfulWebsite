import React from 'react';

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <a href={link} style={styles.card} target="_blank" rel="noopener noreferrer">
      <img src={image} alt={title} style={styles.image} />
      <div style={styles.content}>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.description}>{description}</p>
      </div>
    </a>
  );
};

const styles = {
  card: {
    width: '300px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    textDecoration: 'none',
    color: 'inherit',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease',
    backgroundColor: '#FFF',
    cursor: 'pointer',
    display: 'block',
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
  },
  content: {
    padding: '16px',
    textAlign: 'center',
  },
  title: {
    fontSize: '1.5em',
    color: '#333',
    margin: '8px 0',
  },
  description: {
    fontSize: '1em',
    color: '#555',
  },
};

export default ProjectCard;