import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './src/components/Navbar'
import About from './src/components/About'
import AboutMe from './src/components/AboutMe'
import Experience from './src/components/Skills'
import Projects from './src/components/Projects'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <About />
    <AboutMe />
    <Experience />
    <Projects />
    <footer id="footer">
        <div id="copyright">
          &copy; 2024 Žan Križaj. All rights reserved.
        </div>
      </footer>
  </React.StrictMode>,
)
