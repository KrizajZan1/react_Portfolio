import React from "react";
import "./styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faGlobe, faC, faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';

export default function Specialities() {
  return <div id="specialities">
    <div className="container">
            <h1 className="sub-title">My specialties:</h1>
            <div className="specialties-list">
                <div>
                    <h2><FontAwesomeIcon icon={faGlobe} /> Web Development</h2>
                    <p>
                        I know HTML and CSS and JavaScript. Currently I am also learning about React and also Vue.js by doing some small projects in those frameworks. 
                    </p>
                </div>
                <div>
                    <h2><FontAwesomeIcon icon={faDatabase} /> Databases</h2>
                    <p>
                        I also know a bit of SQL. I know how to display data although joining tables was always the problem for me. I also know how to create events, procedures, functions... Besides all that I also know a bit of MongoDB <br/> (We learned it at school for a short while).
                    </p>
                </div>
                <div>
                    <h2><FontAwesomeIcon icon={faC} /> <FontAwesomeIcon icon={faStarOfLife} /> Programming</h2>
                    <p>
                        I also know some C#. We learned it school. And I also used it at a company at summer break, where I was editing a website with it.
                    </p>
                </div>
                <div>
                    <h2><FontAwesomeIcon icon={faPython} />Python</h2>
                    <p>
                        I also know very little of Python. <br /> (Learned it at school).
                    </p>
                </div>
            </div>
        </div>
  </div>
}