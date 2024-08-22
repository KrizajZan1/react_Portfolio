import React from "react"
import "./styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


export default function Projects() {
  return <div id="projects">
    <div className="container">
            <h1 className="sub-title">My projects:</h1>
            <div className="work-list">
                <div className="work">
                    <img src="Assets/work-1.png"/>
                    <div className="layer">
                        <h3>Personal Web page</h3>
                        <p>Developed a comprehensive personal website, which serves as the foundation for this portfolio. Built using React, this website showcases my skills and projects with a modern and interactive design.</p>
                    </div>
                </div>
                <div className="work">
                    <img src="Assets/Calculator.png"/>
                    <div className="layer">
                        <h3>Calculator</h3>
                        <p>Created a functional web-based calculator capable of solving basic arithmetic operations. Includes a history feature to track previous calculations, utilizing localStorage for persistence. Explore the calculator through the link below.</p>
                        <div className="icons">
                            <a href="./Projects/calculator/calculator.html" target='_blank'><FontAwesomeIcon icon={faLink} /></a>
                            <a href="https://github.com/KrizajZan1/Calculator" target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
                        </div>
                    </div>
                </div>
                <div className="work">
                    <img src="Assets/todoList.png"/>
                    <div className="layer">
                        <h3>To-do List</h3>
                        <p>Developed a dynamic to-do list application allowing users to add, remove, and reorder tasks. Features task prioritization and persistent storage using localStorage, ensuring tasks remain intact across sessions. Check out the to-do list via the link below.</p>
                        <div className="icons">
                            <a href="/Projects/To-do list/index.html" target='_blank'><FontAwesomeIcon icon={faLink} /></a>
                            <a href="https://github.com/KrizajZan1/todoList" target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
                        </div>
                    </div>
                </div>
                <div className="work">
                    <img src="Assets/StarWarsAPI.png"/>
                    <div className="layer">
                        <h3>Star Wars characters</h3>
                        <p>Developed a website for managing Star Wars character data, utilizing the Vue.js framework. This application allows users to view and edit character information, offering an engaging and interactive experience. Access the project via the link below.</p>
                        <div className="icons">
                            <a href="https://github.com/KrizajZan1/vueStarWarsAPI" target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
}