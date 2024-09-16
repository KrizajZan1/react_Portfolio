import React, { useState } from "react";
import "../styles/about.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function About() {
  const [showContactInfo, setShowContactInfo] = useState(false);

  // Funkcija za prenos CV-ja
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "src/assets/CV_ZanKrizaj_SLO.docx";
    link.download = "CV_ZanKrizaj_SLO.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Funkcija za odpiranje/zapiranje kontaktnih informacij
  const toggleContactInfo = () => {
    setShowContactInfo(!showContactInfo);

    // Blokiraj premikanje po strani, ko je modal odprt
    if (!showContactInfo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <section id="about" className="about">
      <div className="about-content">
        <img src="src/assets/me.jpg" alt="Your profile" className="profile-image" />
        <div>
          <h2>Hello, I'm Žan Križaj</h2>
          <p>Aspiring Frontend Developer</p>
          <div className="about-buttons">
            <button className="btn" onClick={downloadCV}>
              Download CV
            </button>
            <button className="btn" onClick={toggleContactInfo}>
              Contact Info
            </button>
          </div>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/%C5%BEan-kri%C5%BEaj-b04a11239/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
            <a href="https://github.com/KrizajZan1" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Kontaktne informacije modal */}
      {showContactInfo && (
        <div className="contact-info-modal">
          <div className="contact-info-content">
            <h3>Contact Information: </h3>
            <p>Email: krizajzan1@gmail.com</p>
            <button className="btn close-btn" onClick={toggleContactInfo}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
