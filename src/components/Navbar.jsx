import React, { useState, useRef, useEffect } from "react";
import "../styles/navbar.css";

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
    <nav className="navbar">
      <h1 className="logo">Žan</h1>
      <ul className="nav-links">
        <li><a href="#aboutMe">About Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
    </nav>
  );
}
