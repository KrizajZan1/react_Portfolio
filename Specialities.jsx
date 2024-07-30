import React from "react";
import "./styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faWifi, faC, faStarOfLife } from '@fortawesome/free-solid-svg-icons';

export default function Specialities() {
  return <div id="specialities">
    <div className="container">
            <h1 className="sub-title">My specialties</h1>
            <div className="specialties-list">
                <div>
                    <h2><FontAwesomeIcon icon={faWifi} /> Web Design</h2>
                    <p>
                        The thing that suits me best, or the thing that I know best and am most interested in, are definitely websites. Unfortunately, I only know HTML/CSS/JavaScript. 
                        I don't know any major frameworks like React, for example. But it is in my interest to learn it in the future. 
                        I also have some experience working with websites from the company where i did my internship last year.
                    </p>
                </div>
                <div>
                    <h2><FontAwesomeIcon icon={faDatabase} /> Databases</h2>
                    <p>
                        In addition to websites, I am also most interested in databases. I would say that databases are the next most familiar thing for me. 
                        At school we learned how to create events, procedures, functions... I also have some basic knowledge with MongoDB databases.
                        I also have some experience working with databases from the company where I did my internship in my first year of highschool.
                    </p>
                </div>
                <div>
                    <h2><FontAwesomeIcon icon={faC} /> <FontAwesomeIcon icon={faStarOfLife} /> Programming</h2>
                    <p>
                        When it comes to programming. The only programming language I know is C#. We learned it in highschool. And I would say that I have 
                        some basic knowledge when it comes to programming. I would say I understand easier tasks. 
                        Unfortunately my experience with programming is limited as I didn't learn it outisde of school...
                    </p>
                </div>
            </div>
        </div>
  </div>
}