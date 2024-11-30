const styles = {
    card: {
        width: '400px', // Increased width from 300px to 400px
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
        width: '100%', // Ensure the image spans the full width of the card
        height: '200px', // Optionally adjust height proportionally
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
