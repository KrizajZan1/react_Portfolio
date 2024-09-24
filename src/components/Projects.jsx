import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import '../styles/projects.css';

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: 'To-do List',
      description:
        'Developed a simple To-do list website, where the user can add, edit or remove tasks. Tasks are stored in localStorage, so that if the page is refreshed, we do not lose them. Feel free to check the project via the link below.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'src/assets/todoList.png',
      github: 'https://github.com/KrizajZan1/todoList',
      demo: 'src/projects/To-do list/index.html',
    },
    {
      title: 'Calculator',
      description:
        'Developed a simple calculator website that allows the user to add, subtract, multiply and divide. It also has a operation history which allows user to see his last 10 operations that he performed. You can preview the project via the link below.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'src/assets/Calculator.png',
      github: 'https://github.com/KrizajZan1/Calculator',
      demo: 'src/projects/calculator/calculator.html',
    },
    {
      title: 'Open Weather API',
      description:
        'This website was developed as part of an application for a job opportunity. It allows user to obtain weather data for a city that he searches. This is achieved by using OpenWeather API. Preview the project via the link below.',
      technologies: ['React', 'CSS', 'API'],
      image: 'src/assets/WeatherProjekt.PNG',
      github: 'https://github.com/KrizajZan1/Kaldi_WeatherAssignment',
      demo: 'http://weather.krizajzan.com/',
    },
    {
      title: 'Vue Star Wars API',
      description:
        'Developed website with Vue.js that fetches data from Star Wars API about 3 characters from Star Wars and displays it. It then also allows user to alter that data which is then saved in localStorage.',
      technologies: ['Vue.js', 'CSS', 'API'],
      image: 'src/assets/StarWarsAPI.png',
      github: 'https://github.com/KrizajZan1/vueStarWarsAPI',
    },
  ];

  const handlePrevClick = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  // Swipe handlers using react-swipeable
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNextClick,
    onSwipedRight: handlePrevClick,
    trackMouse: true,
  });

  return (
    <section id="projects" className="projects" {...swipeHandlers}>
      <h2>
        Browse My Recent <span>Projects</span>
      </h2>

      <div className="projects-container">
        <button className="nav-arrow left-arrow" onClick={handlePrevClick}>
          &#10094;
        </button>

        <div className="project-card">
          <img
            src={projects[currentProject].image}
            alt={projects[currentProject].title}
            className="project-image"
          />

          <div className="project-info">
            <h3>{projects[currentProject].title}</h3>
            <div className="space"></div>
            <p>{projects[currentProject].description}</p>
            <div className="space"></div>
            <ul className="tech-list">
              <h3>Technologies used:</h3>
              {projects[currentProject].technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <div className="space"></div>
            <div className="project-buttons">
              <a
                href={projects[currentProject].github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">GitHub</button>
              </a>
              {projects[currentProject].demo && (
                <a
                  href={projects[currentProject].demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn">Live Demo</button>
                </a>
              )}
            </div>
          </div>
        </div>

        <button className="nav-arrow right-arrow" onClick={handleNextClick}>
          &#10095;
        </button>
      </div>

      <div className="project-indicators">
        {projects.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentProject ? 'active' : ''}`}
            onClick={() => setCurrentProject(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}
