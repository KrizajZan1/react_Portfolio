import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable'; // Importing react-swipeable
import '../styles/projects.css';

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: 'To-do List',
      description:
        'Developed simple To-do list website with HTML, CSS, JavaScript where user can add tasks which are saved with localStorage.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'src/assets/todoList.png',
      github: 'https://github.com/KrizajZan1/todoList',
      demo: 'src/projects/To-do list/index.html',
    },
    {
      title: 'Calculator',
      description:
        'Developed a simple calculator website with HTML, CSS and JavaScript.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'src/assets/Calculator.png',
      github: 'https://github.com/KrizajZan1/Calculator',
      demo: 'src/projects/calculator/calculator.html',
    },
    {
      title: 'Open Weather API',
      description:
        'React project that allows user to know weather information of a city he enters in the search bar.',
      technologies: ['React', 'API', 'CSS'],
      image: 'src/assets/WeatherProjekt.PNG',
      github: 'https://github.com/KrizajZan1/Kaldi_WeatherAssignment',
      demo: 'http://weather.krizajzan.com/',
    },
    {
      title: 'Vue Star Wars API',
      description:
        'Developed website with Vue.js that fetches data from SWAPI and displays it.',
      technologies: ['Vue.js'],
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
