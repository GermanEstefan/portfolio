import React from 'react'
import { Link } from 'react-scroll'

export const NavDesktop = () => {

  return (
    <nav className='nav-desktop'>
      <ul>
        <li className='nav-desktop__link'><Link to='home' smooth={true} spy={true} activeClass='active-link'>Home</Link></li>
        <li className='nav-desktop__link'><Link to='about' smooth={true} spy={true} activeClass='active-link'>About</Link></li>
        <li className='nav-desktop__link'><Link to='proyects' smooth={true} spy={true} activeClass='active-link'>Proyects</Link></li>
        <li className='nav-desktop__link'><Link to='contact' smooth={true} spy={true} activeClass='active-link'>Contact</Link></li>
      </ul>
    </nav>
  )
}
