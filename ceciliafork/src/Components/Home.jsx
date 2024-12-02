import React, { useState } from 'react';
// import './App.css';

function HomePage() {
  const [activeTab, setActiveTab] = useState('about'); 
  const [showEmailInput, setShowEmailInput] = useState(false); 
  const [buttonName, setButtonName] = useState('Get email updates');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleEmailButtonClick = () => {
    setShowEmailInput(!showEmailInput);
    if(showEmailInput) {
      setButtonName("Get email updates");
    } 
    else {
      setButtonName("Sign Up");
    }
    
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <a href="https://www.wfu.edu/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/wfu_logo.png" alt="Wake Forest University" style={styles.logo} />
        </a>
        <nav style={styles.nav}>
          {['about', 'projects', 'tutorials', 'news'].map((tab) => (
            <a
              key={tab}
              href={`#${tab}`}
              onClick={() => handleTabClick(tab)}
              style={tab === activeTab ? styles.activeNavLink : styles.navLink}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </a>
          ))}
        </nav>
      </header>

      <main style={styles.main}>
        <div style={styles.imageContainer}>
          <img src="/assets/circuit_board.jpg" alt="Circuit board" style={styles.image} />
        </div>

        <div style={styles.textContainer}>
          <h1 style={styles.title}>
            Welcome to <br /> WFU Club <br />
            <span style={styles.highlight}>
              Robotics
              <span style={styles.highlightAfter}></span>
            </span>
          </h1>
          <p style={styles.description}>
            Welcome to the Wake Forest Robotics Club! Founded in 2020, we’re a student-led group that welcomes all
            skill levels to engage in exciting robotics projects. As we gear up for the Fifteenth competition in
            January 2024, we invite you to join us—just bring your enthusiasm to learn!
          </p>
          <div style={styles.buttons}>
            {showEmailInput ? (
              <input
                type="email"
                placeholder="Enter your email"
                style={styles.emailInput}
              />
            ) : (
              <button style={styles.joinButton}>Join us Mondays at 6pm in Manchester</button>
            )}
            <button style={styles.updateButton} onClick={handleEmailButtonClick}>
              { buttonName }
            </button>
          </div>
        </div>
      </main>

      <section style={styles.quickLinksSection}>
        <h2 style={styles.quickLinksTitle}>Quick Links</h2>
        <ul style={styles.quickLinksList}>
          <li><a href="https://groupme.com/join_group/66229966/E7jIX7MV" style={styles.quickLink}>Join our club GroupMe</a></li>
        </ul>
      </section>
    </div>
  );
}


const styles = {
  container: {
    fontFamily: 'JetBrainsMono-Light, Arial, sans-serif', 
    color: '#333',
    padding: '15px',
    width: '90%',
    margin: '0 auto'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px 0',
    marginBottom: '-75px'
  },
  logo: {
    height: '80px',
  },
  nav: {
    display: 'flex',
    gap: '15px'
  },
  navLink: {
    color: '#333',
    textDecoration: 'none',
    fontWeight: 'normal',
    fontSize: '16px'
  },
  activeNavLink: {
  fontWeight: 'bold',
  fontSize: '16px',
  background: 'linear-gradient(to right, #91742b, grey)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  position: 'relative', 
},
  activeNavLinkAfter: {
    content: '""',
    position: 'absolute',
    bottom: '-2px', 
    left: 0,
    width: '100%',
    height: '2px', 
    background: 'linear-gradient(to right, #91742b, grey)', 
  },
  main: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '0px'
  },
  imageContainer: {
    flex: '1 1 45%'
  },
  image: {
    width: '88%',
  },
  textContainer: {
    flex: '1 1 45%',
    textAlign: 'left',
    padding: '50px',
    marginBottom: '60px'

  },
  title: {
    fontSize: '55px',
    fontWeight: '625px',
    lineHeight: '1.6',
    fontFamily: 'JetBrainsMono-Bold, sans-serif',
    marginBottom: '60px'  
  },
  highlight: {
    position: 'relative', 
    display: 'inline-block', 
    zIndex: 1, 
    backgroundColor: 'transparent',
  },
  highlightAfter: {
    content: '""',
    position: 'absolute',
    bottom: '-4px', 
    right: '-13px', 
    width: '100%', 
    height: '45px', 
    zIndex: -1, 
    opacity: 0.5,
    background: 'linear-gradient(to right, #91742b, grey)', 
  },
  description: {
    fontSize: '16px',
    color: '#666',
    marginTop: '110px',
    marginBottom: '1px'
  },
  buttons: {
    display: 'flex',
    alignItems: 'left',
    gap: '10px',
    marginTop: '115px',
    textAlign: 'center'
  },
  joinButton: {
    padding: '10px 10px',
    backgroundColor: 'transparent',
    border: '1px solid #333',
    color: 'linear-gradient(to right, #91742b, grey)',
    cursor: 'pointer',
    fontFamily: 'JetBrainsMono-Light'
  },
  updateButton: {
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'JetBrainsMono-Light'
  },
  emailInput: {
    padding: '10px',
    border: '1px solid #333',
    fontSize: '16px',
    fontFamily: 'JetBrainsMono-Light',
    width: '250px',
  },
  quickLinksSection: {
    marginTop: '40px',
    textAlign: 'center'
  },
  quickLinksTitle: {
    fontSize: '24px',
    color: '#91742b',
    fontWeight: 'bold',
    marginBottom: '10px'
  },
  quickLinksList: {
    listStyleType: 'none',
    padding: 0
  },
  quickLink: {
    color: '#666',
    textDecoration: 'none',
    fontSize: '16px'
  }
};

export default HomePage;
