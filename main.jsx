import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar'
import About from './About'
import Specialities from './Specialities'
import Projects from './Projects'
import Contact from './Contact'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <About />
    <Specialities />
    <Projects />
    <Contact />
  </React.StrictMode>,
)
