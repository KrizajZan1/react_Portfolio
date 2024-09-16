import React from 'react';
import '../styles/Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Browse My Recent <span>Projects</span></h2>

      <div className="projects-container">
        <div className="project-card">
          <img src='src/assets/todoList.png' alt="Project One" className="project-image" />
          <h3>To-do List</h3>
          <p>Developed simple To-do list website with HTML, CSS, JavaScript where user can add tasks which are saved with localStorage. You can check the page via link below</p>
          <div className="project-buttons">
            <button className="btn">GitHub</button>
            <button className="btn">Live Demo</button>
          </div>
        </div>
        <div className="project-card">
          <img src='src/assets/Calculator.png' alt="Project Two" className="project-image" />
          <h3>Calculator</h3>
          <p>Developed a simple calculator website with HTML, CSS and JavaScript. You can check the page via link below</p>
          <div className="project-buttons">
            <button className="btn">GitHub</button>
            <button className="btn">Live Demo</button>
          </div>
        </div>
        <div className="project-card">
          <img src='src/assets/StarWarsAPI.png' alt="Project Three" className="project-image" />
          <h3>Vue Star Wars API</h3>
          <p>Developed website with Vue.js that fetches data from SWAPI and displays it. It also allows user to change the data and it is saved in localStorage. You can check the page via link below</p>
          <div className="project-buttons">
            <button className="btn">GitHub</button>
            <button className="btn">Live Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
}