import React from 'react'

const Contact = () => {

  return (
    <section className="cards contact" id="contact">
        <h2 className="title">Let'swork togrther</h2>
        <div className="content">
            <div className="card">
                <div className="icon"><i className="fas fa-phone"></i></div>
                <div className="info">
                    <h3>Phone</h3>
                    <p>(123) 456-7890</p>
                </div>
            </div>
            <div className="card">
                <div className="icon"><i className="fas fa-envelope"></i></div>
                <div className="info">
                    <h3>Email</h3>
                    <p>example.name@gmail.com</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact