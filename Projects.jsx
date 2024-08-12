import React from "react"
import "./styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';


export default function Projects() {
  return <div id="projects">
    <div className="container">
            <h1 className="sub-title">My projects:</h1>
            <div className="work-list">
                <div className="work">
                    <img src="Assets/work-1.png"/>
                    <div className="layer">
                        <h3>Personal Web page</h3>
                        <p>My first project is this website on which we are currently on. It is made with React.</p>
                    </div>
                </div>
                <div className="work">
                    <img src="Assets/Calculator.png"/>
                    <div className="layer">
                        <h3>Calculator</h3>
                        <p>I also made a simple working calculator web page where you can solve basic equations. You can also look at the history of inputs. Made that with the help of localStorage. You can take a look at it in the link below.</p>
                        <a href="./Projects/calculator/calculator.html" target='_blank'><FontAwesomeIcon icon={faLink} /></a>
                    </div>
                </div>
                <div className="work">
                    <img src="Assets/todoList.png"/>
                    <div className="layer">
                        <h3>To-do List</h3>
                        <p>I also made a To-do List where you can add/remove tasks. Task are also movable so you can set the priority and are also saved in localStorage so the next time you refresh or reopen the list stayes untouched.You can take a look at it in the link below.</p>
                        <a href="/Projects/To-do list/index.html" target='_blank'><FontAwesomeIcon icon={faLink} /></a>
                    </div>
                </div>
                <div className="work">
                    <img src="Assets/StarWarsAPI.png"/>
                    <div className="layer">
                        <h3>Star Wars characters</h3>
                        <p>I also made this website where you can change Star Wars characters data. Website is made with Vue framework</p>
                        <a href="/Projects/vueStarWarsAPI/index.html" target='_blank'><FontAwesomeIcon icon={faLink} /></a>
                    </div>
                </div>
            </div>
        </div>
  </div>
}