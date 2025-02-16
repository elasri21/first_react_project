import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import NavBar from "./NavBar";
import Services from './Services'
import Footer from './Footer'
import Project from './Project'
const RouterApp = () => {
  return (
    <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default RouterApp