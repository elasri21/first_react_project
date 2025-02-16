import React from 'react'
import {useNavigate } from 'react-router-dom'
const About = () => {
  const navigate = useNavigate();
  return (
    <section className='about'>
      <h2>About Me</h2>
      <p>
        Hi, I'm Mohamed, a passionate web developer with a strong foundation in building responsive and interactive web applications.
        I specialize in front-end development and am always eager to learn and explore new technologies. Below are some of the projects that I have worked on:
      </p>

      <div className="projects-introduction">
        <p>
          These projects showcase my skills in HTML, CSS, JavaScript, and React. Each project represents my dedication to crafting clean, functional, and user-friendly websites.
        </p>
      </div>

      <h3>My Projects</h3>
      <div className="projects-container">
          <button onClick={() => navigate("/projects")}>See our projects</button>
      </div>

      <div className="contact-info">
        <p>
          Feel free to check out my <a href="https://github.com/elasri21" target="_blank" rel="noopener noreferrer">GitHub Acount</a> and <a href="https://www.linkedin.com/in/mohamed-elasri-a4ab8815a/" target="_blank" rel="noopener noreferrer">LinkedIn</a> to explore more about my work and connect with me.
        </p>
      </div>
    </section>
  )
}

export default About