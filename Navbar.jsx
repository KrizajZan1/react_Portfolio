import React from "react"
import "./styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return <div id="header">
  <div className="container">
      <nav>
          <img src="Assets/logo.png" className="logo"/>
          <ul id="sidemenu">
              <li><a href="#header">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#specialities">My specialties</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
              <i className="fa-solid fa-xmark" onclick="closemenu()"></i>
          </ul>
          {/* <FontAwesomeIcon icon={faBars} onClick={() => this.openmenu()} /> */}
          <i className="fa-solid fa-bars" onclick="openmenu()"></i>
      </nav>
      <div className="header-text">
          <p>Student/Web Designer</p>
          <h1>Hi, I'm <span>Žan Križaj</span> <br/> from Slovenia</h1>
      </div>
  </div>
</div>
}