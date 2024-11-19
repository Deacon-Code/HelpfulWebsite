import React from 'react';
import ProjectCard from './components/ProjectCard';
import Contact from './components/Contact';
import Announcements from './components/Announcements';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div id='body'>
      <ProjectCard
        image="/path-to-your-image.jpg"
        title="Example Project"
        description="This is a sample project description"
        link="https://example.com"
      />
      <div style={{ marginTop: '20px' }}>
        <Contact />
      </div>
      <div style={{ marginTop: '20px' }}>
        <Announcements />
      </div>
      <div id = 'team-section' style={{ marginTop: '20px' } }>
        <h2>Our Team</h2>
        <Team/>
      </div>
      <div style={{ marginTop: '20px' }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;