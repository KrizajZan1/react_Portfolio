import React from "react"
import "./styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';


export default function Projects() {
  return <div id="projects">
    <div className="container">
            <h1 className="sub-title">My projects</h1>
            <div className="work-list">
                <div className="work">
                    <img src="images/work-1.png"/>
                    <div className="layer">
                        <h3>Personal Web page</h3>
                        <p>My first project is this website on which we are currently on.</p>
                    </div>
                </div>
                <div className="work">
                    <img src="images/work-2.png"/>
                    <div className="layer">
                        <h3>Calculator</h3>
                        <p>I also made a simple working calculator web page. You can take a look at it in the link below.</p>
                        <a href="./projects/calculator/calculator.html" target='_blank'><FontAwesomeIcon icon={faLink} /></a>
                    </div>
                </div>
                <div className="work">
                    <img src="images/work-3.png"/>
                    <div className="layer">
                        <h3>To-do List</h3>
                        <p>I also made a To-do List where you can add/remove tasks.You can take a look at it in the link below.</p>
                        <a href="./projects/To-do list/index.html" target='_blank'><FontAwesomeIcon icon={faLink} /></a>
                    </div>
                </div>
            </div>
            <a href="#" className="btn">See more</a>
        </div>
  </div>
}