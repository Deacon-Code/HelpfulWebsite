import { useState, useEffect } from 'react';
import peopleData from './team.json';
import "../styles/main.css";


// Add this right after your imports
console.log("Imported peopleData:", peopleData);

const Team = () => {

    // Create a state variable announcements (initialized to empty array)
    // as well as setter function setPeople
    const [people, setPeople] = useState([]);

    useEffect(() => {
        if (peopleData && peopleData.length > 0) {
            setPeople(peopleData);
        }
    }, []);
    /* This does the same as: 
    function useEffect() {
      if (announcementsData && announcementsData.length > 0) {
        setAnnouncements(announcementsData);
      }
    } */


    return (
        <div id="team-members">
            {/* .map() loops through each announcement in the array
          and creates a new div for each one */}
            {people.map((person, index) => (
                <div className="person" key={index}>
                    {/* <img src={person.image} alt={person.name} ></img> */}
                    <img
                        src={person.image}
                        alt={person.name}
                        style={{ width: '300px', height: '300px' }}
                    />
                    <h3>{person.name}</h3>
                    <p className="light">{person.role}</p>
                    <p className="light">{person.email}</p>

                </div>
            ))}
        </div>
    );
};

export default Team;