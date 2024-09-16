import React from 'react';
import '../styles/Skills.css';

export default function Experience() {
  return (
    <section id="skills" className="experience-section">
      <h2>Explore My <span>Experience</span></h2>

      <div className="experience-container">
        <div className="experience-card">
          <h3>Frontend Development</h3>
          <ul>
            <li>
              <span className="checkmark">✔</span>
              <div>
                <strong>HTML</strong>
                <p>Experienced</p>
              </div>
            </li>
            <li>
              <span className="checkmark">✔</span>
              <div>
                <strong>CSS</strong>
                <p>Experienced</p>
              </div>
            </li>
            <li>
              <span className="checkmark">✔</span>
              <div>
                <strong>JavaScript</strong>
                <p>Basic</p>
              </div>
            </li>
            <li>
              <span className="checkmark">✔</span>
              <div>
                <strong>React</strong>
                <p>Basic</p>
              </div>
            </li>
            <li>
              <span className="checkmark">✔</span>
              <div>
                <strong>Vue.js</strong>
                <p>Basic</p>
              </div>
            </li>
            <li>
              <span className="checkmark">✔</span>
              <div>
                <strong>Git</strong>
                <p>Basic</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="experience-card">
          <h3>Backend Development</h3>
          <ul>
            <li>
              <span className="checkmark">✔</span>
              <div>
                <strong>MySQL</strong>
                <p>Intermidiate</p>
              </div>
            </li>
            <li>
              <span className="checkmark">✔</span>
              <div>
                <strong>MongoDB</strong>
                <p>Basic</p>
              </div>
            </li>
            <li>
              <span className="checkmark">✔</span>
              <div>
                <strong>Python</strong>
                <p>Basic</p>
              </div>
            </li>
            <li>
              <span className="checkmark">✔</span>
              <div>
                <strong>C#</strong>
                <p>Intermediate</p>
              </div>
            </li>
            <li>
              <span className="checkmark">✔</span>
              <div>
                <strong>PHP</strong>
                <p>Basic</p>
              </div>
            </li>
            <li>
              <span className="checkmark">✔</span>
              <div>
                <strong>SwiftUI</strong>
                <p>Basic</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
