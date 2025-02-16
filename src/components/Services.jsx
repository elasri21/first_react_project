import React from 'react'

const Services = () => {
  return (
    <section className="cards" id="services">
        <h2 className="title">Services</h2>
        <div className="content">
            <div className="card">
                <div className="icon"><i className="fas fa-file-code"></i></div>
                <div className="info">
                    <h3>HTML</h3>
                    <p>Building Websites with pure HTML</p>
                </div>
            </div>
            <div className="card">
                <div className="icon"><i className="fab fa-css3-alt"></i></div>
                <div className="info">
                    <h3>CSS</h3>
                    <p>Styling Websites with CSS</p>
                </div>
            </div>
            <div className="card">
                <div className="icon"><i className="fab fa-js"></i></div>
                <div className="info">
                    <h3>JavaSctipt</h3>
                    <p>Adding Behaviour to websites With JS</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services