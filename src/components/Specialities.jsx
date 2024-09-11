import React from "react";
import "../styles/specialities.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faGlobe, faC, faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';

export default function Specialties() {
  return (
    <div id="specialities">
      <div className="container">
        <h1 className="sub-title">My Specialties:</h1>
        <div className="specialties-list">
          <div>
            <h2><FontAwesomeIcon icon={faGlobe} /> Web Development</h2>
            <p>
              Expertise in creating dynamic and responsive web applications using modern technologies including HTML5, CSS3, and JavaScript. Currently advancing skills in React.js and Vue.js through practical projects.
            </p>
          </div>
          <div>
            <h2><FontAwesomeIcon icon={faDatabase} /> Database Management</h2>
            <p>
              Proficient in SQL for relational database management and familiar with MongoDB. Skilled in performing complex queries, functions, events...
            </p>
          </div>
          <div>
            <h2><FontAwesomeIcon icon={faC} /> <FontAwesomeIcon icon={faStarOfLife} /> Development</h2>
            <p>
              Solid foundation in C# gained through academic coursework and practical experience. Applied C# in a professional setting to enhance web applications and implement backend functionalities.
            </p>
          </div>
          <div>
            <h2><FontAwesomeIcon icon={faPython} /> Python Programming</h2>
            <p>
              Basic proficiency in Python, developed through formal education. Capable of using Python for scripting, automation, and data analysis tasks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
