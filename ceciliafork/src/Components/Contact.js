import React, { useState } from 'react';

const Contact = () => {
    const [email, setEmail] = useState('');

    const handleClick = () => {
        if (email) {
            //use google api to record the email list in a google doc/google sheet
            console.log('Email Submitted:', email);
            setEmail('');
        } else {
            console.log('Please enter an email address');
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Want the latest information about WFU Robotics?</h1>
            {/* <label htmlFor="email" style={styles.label}>Email Address</label> */}
            <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                style={styles.input}
            />
            <button onClick={handleClick} style={styles.button}>
                Sign Up
            </button>
        </div>
    );
};

// Inline styles with Wake Forest colors and matching layout
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        border: '2px solid #FFC72C', // Wake Forest gold border
        borderRadius: '8px',
        backgroundColor: '#fff', // White background
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    header: {
        fontSize: '1.5em',
        color: '#000', // Black text
        marginBottom: '20px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
    },
    label: {
        alignSelf: 'flex-start',
        fontSize: '1em',
        color: '#000',
        marginBottom: '5px',
        fontFamily: 'Arial, sans-serif',
    },
    input: {
        padding: '10px',
        width: '100%',
        maxWidth: '400px',
        marginBottom: '20px',
        border: '1px solid #CCC',
        borderRadius: '4px',
        outline: 'none',
        backgroundColor: '#FFF', // White background for input
        color: '#000', // Black text for input
        fontFamily: 'Arial, sans-serif',
    },
    button: {
        width: '100%', // Full width for the button
        maxWidth: '400px',
        padding: '15px 0', // Center-align text vertically
        backgroundColor: '#B29A66', // Gold color for button
        color: '#FFF', // White text
        fontSize: '1em',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        transition: 'background-color 0.3s ease, transform 0.2s ease',
    },
};

// Add hover and active states to enhance interactivity
styles.button[':hover'] = { backgroundColor: '#A08553' }; // Slightly darker gold on hover
styles.button[':active'] = { transform: 'scale(0.98)' }; // Slightly shrink on click

export default Contact;
