import React from 'react'
import { Link } from 'react-scroll'

export const NavDesktop = () => {

  return (
    <nav className='nav-desktop'>
      <ul>
        <li><Link to='home' smooth={true} spy={true} activeClass='active-link'>Home</Link></li>
        <li><Link to='about' smooth={true} spy={true} activeClass='active-link'>About</Link></li>
        <li><Link to='proyects' smooth={true} spy={true} activeClass='active-link'>Proyects</Link></li>
        <li><Link to='contact' smooth={true} spy={true} activeClass='active-link'>Contact</Link></li>
      </ul>
    </nav>
  )
}
