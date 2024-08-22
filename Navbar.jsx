import React, { useState } from "react";
import "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDownload } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div id="header">
      <div className="container">
        <nav>
          <a href="Assets/CV.png" download className="download-button">
            <FontAwesomeIcon icon={faDownload} /> CV
          </a>
          <ul id="sidemenu" className={menuOpen ? "open" : ""}>
            <li><a href="#header" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#specialities" onClick={toggleMenu}>My specialties</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
          <div className="menu-icon" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </nav>
        <div className="header-text">
          <h1>Hi, I'm <span>Žan Križaj</span> <br /> <span>Front End</span> Developer</h1>
        </div>
      </div>
    </div>
  );
}
