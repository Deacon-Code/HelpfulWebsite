import { useState, useEffect } from 'react';
import announcementsData from './announcements.json';
import "../styles/main.css";

const Announcements = () => {
  // Create a state variable announcements (initialized to empty array)
  // as well as setter function setAnnouncements
  const [announcements, setAnnouncements] = useState([]);
  
  useEffect(() => {
    if (announcementsData && announcementsData.length > 0) {
      setAnnouncements(announcementsData);
    }
  }, []); 
  /* This does the same as: 
  function useEffect() {
    if (announcementsData && announcementsData.length > 0) {
      setAnnouncements(announcementsData);
    }
  } */

  
  return (
    <div id="all-announcements">
      {/* .map() loops through each announcement in the array
          and creates a new div for each one */}
      {announcements.map((announcement, index) => (
        <div className="announcement-container" key={index}>
          <p className="light">{announcement.date}</p>
          <h1 className="announcement-header">{announcement.title}</h1>
          <p>{announcement.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Announcements;