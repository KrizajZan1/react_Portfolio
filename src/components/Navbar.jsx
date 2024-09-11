import React, { useState, useRef, useEffect } from "react";
import "../styles/navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDownload } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuIconRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Funkcija za zapiranje menija, ko uporabnik klikne zunaj menija
  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !menuIconRef.current.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    // Dodaj event listener za klik zunaj menija
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Odstrani event listener ob unmountu
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div id="header">
      <img src="src/assets/background.png" id="header"/>
      <div className="container">
        <nav>
          <a href="src/assets/CV_ZanKrizaj_SLO.docx" download className="download-button">
            <FontAwesomeIcon icon={faDownload} /> CV
          </a>
          <ul
            id="sidemenu"
            className={menuOpen ? "open" : ""}
            ref={menuRef} // Dodaj ref za meni
          >
            <li><a href="#header" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#specialities" onClick={toggleMenu}>My specialties</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
          <div
            className="menu-icon"
            onClick={toggleMenu}
            ref={menuIconRef} // Dodaj ref za ikono menija
          >
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
