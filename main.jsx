import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './src/components/Navbar'
import About from './src/components/About'
import Specialities from './src/components/Specialities'
import Projects from './src/components/Projects'
import Contact from './src/components/Contact'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <About />
    <Specialities />
    <Projects />
    <Contact />
  </React.StrictMode>,
)
