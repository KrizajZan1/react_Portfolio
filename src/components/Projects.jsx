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
            <a href='https://github.com/KrizajZan1/todoList' target='blank'>
              <button className="btn">GitHub</button>
              </a>
              <a href='src/projects/To-do list/index.html' target='blank'>
              <button className="btn">Live Demo</button>
              </a>
          </div>
        </div>
        <div className="project-card">
          <img src='src/assets/Calculator.png' alt="Project Two" className="project-image" />
          <h3>Calculator</h3>
          <p>Developed a simple calculator website with HTML, CSS and JavaScript. You can check the page via link below</p>
          <div className="project-buttons">
            <a href='https://github.com/KrizajZan1/Calculator' target='blank'>
            <button className="btn">GitHub</button>
            </a>
            <a href='src/projects/calculator/calculator.html' target='blank'>
            <button className="btn">Live Demo</button>
            </a>
          </div>
        </div>
        <div className="project-card">
          <img src='src/assets/StarWarsAPI.png' alt="React Project" className="project-image" />
          <h3>Open Weather API</h3>
          <p>React project, that allows user to know weather information of a city he enters in the search bar.</p>
          <div className="project-buttons">
              <a href='https://github.com/KrizajZan1/Kaldi_WeatherAssignment' target='_blank'>
              <button className="btn">GitHub</button>
              </a>
              <a href='src/projects/WeatherProject/index.html' target='_blank'>
              <button className="btn">Live Demo</button>
              </a>
          </div>
        </div>
        <div className="project-card">
          <img src='src/assets/StarWarsAPI.png' alt="Project Three" className="project-image" />
          <h3>Vue Star Wars API</h3>
          <p>Developed website with Vue.js that fetches data from SWAPI and displays it. It also allows user to change the data and it is saved in localStorage. You can check the page via link below</p>
          <div className="project-buttons">
          <a href='https://github.com/KrizajZan1/vueStarWarsAPI' target='blank'>
            <button className="btn">GitHub</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}