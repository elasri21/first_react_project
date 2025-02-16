import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    const [isMobile, setIsMobile] = useState(false)
  return (
    <header>
    <nav className="navigation" style={{
      display: isMobile ? 'block' : 'none',
      transition: 'all .3s  ease-in-out',
    }}>
        <Link to="/home">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
    </nav>
    <div className="toggle" onClick={() => {
      setIsMobile(!isMobile);
    }}>
        <span></span>
        <span></span>
        <span></span>
    </div>
</header>

  )
}

export default NavBar