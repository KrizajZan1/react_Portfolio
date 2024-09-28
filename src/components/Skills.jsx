import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import '../styles/Skills.css';

export default function Experience() {
  return (
    <section id="skills" className="experience-section">
      <h2>Explore my <span>skills</span></h2>

      <div className="experience-container">
        <div className="experience-card">
          <h3>Front-end Development</h3>
          <ul>
            <li>
              <span className="checkmark"><FontAwesomeIcon icon={faCheck} /></span>
              <div>
                <strong>HTML</strong>
                <p>Experienced</p>
              </div>
            </li>
            <li>
              <span className="checkmark"><FontAwesomeIcon icon={faCheck} /></span>
              <div>
                <strong>CSS</strong>
                <p>Experienced</p>
              </div>
            </li>
            <li>
              <span className="checkmark"><FontAwesomeIcon icon={faCheck} /></span>
              <div>
                <strong>JavaScript</strong>
                <p>Basic</p>
              </div>
            </li>
            <li>
              <span className="checkmark"><FontAwesomeIcon icon={faCheck} /></span>
              <div>
                <strong>React</strong>
                <p>Basic</p>
              </div>
            </li>
            <li>
              <span className="checkmark"><FontAwesomeIcon icon={faCheck} /></span>
              <div>
                <strong>Vue.js</strong>
                <p>Basic</p>
              </div>
            </li>
            <li>
              <span className="checkmark"><FontAwesomeIcon icon={faCheck} /></span>
              <div>
                <strong>Git</strong>
                <p>Basic</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="experience-card">
          <h3>Back-end Development</h3>
          <ul>
            <li>
              <span className="checkmark"><FontAwesomeIcon icon={faCheck} /></span>
              <div>
                <strong>MySQL</strong>
                <p>Intermidiate</p>
              </div>
            </li>
            <li>
              <span className="checkmark"><FontAwesomeIcon icon={faCheck} /></span>
              <div>
                <strong>MongoDB</strong>
                <p>Basic</p>
              </div>
            </li>
            <li>
              <span className="checkmark"><FontAwesomeIcon icon={faCheck} /></span>
              <div>
                <strong>Python</strong>
                <p>Basic</p>
              </div>
            </li>
            <li>
              <span className="checkmark"><FontAwesomeIcon icon={faCheck} /></span>
              <div>
                <strong>C#</strong>
                <p>Intermediate</p>
              </div>
            </li>
            <li>
              <span className="checkmark"><FontAwesomeIcon icon={faCheck} /></span>
              <div>
                <strong>PHP</strong>
                <p>Learning</p>
              </div>
            </li>
            <li>
              <span className="checkmark"><FontAwesomeIcon icon={faCheck} /></span>
              <div>
                <strong>SwiftUI</strong>
                <p>Learning</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
