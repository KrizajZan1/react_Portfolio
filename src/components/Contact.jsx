import React from "react";
import "../styles/Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <div id="contact">
      <h1 className="sub-title">Contact me:</h1>
      <div id="contact-container">
        <div className="contact-left">
          <p><i className="fas fa-envelope"></i>krizajzan1@gmail.com</p>
          <p><i className="fas fa-map-marker-alt"></i>Slovenia</p>
          <div className="social-icons">
            <a href="https://github.com/KrizajZan1" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/žan-križaj-b04a11239/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div className="contact-right">
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>

    </div>
  );
}
