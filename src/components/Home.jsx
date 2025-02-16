import React from 'react'

const Home = () => {

  return (
    <div>
      <section className="main">
          <div>
              <h2>Hello, I'm Jhon Doe, and i am a<br /><span>Front End Devloper</span></h2>
              <h3>I Build Website with html,css and js</h3>
              <a href="#projects" className="main-btn">View My Work</a>
              <div className="social-icon">
                  <a href="https://www.facebook.com/simo.asri.378" target="_blank"><i className="fab fa-facebook"></i></a>
                  <a href="https://www.instagram.com/simo5904/" target="_blank"><i className="fab fa-instagram"></i></a>
                  <a href="https://twitter.com/ELASRI08455745" target="_blank"><i className="fab fa-twitter"></i></a>
                  <a href="https://www.linkedin.com/in/mohamed-elasri-a4ab8815a/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                  <a href="https://github.com/elasri21" target="_blank"><i className="fab fa-github"></i></a>
              </div>
          </div>
      </section>
    </div>
  )
}

export default Home