import React from 'react'
import { Link } from 'react-scroll'

export const NavDesktop = () => {

  return (
    <nav className='nav-desktop'>
      <ul>
        <li className='nav-desktop__link'><Link to='home' smooth={true} spy={true} activeClass='active-link'>Home</Link></li>
        <li className='nav-desktop__link'><Link to='about' smooth={true} spy={true} activeClass='active-link'>About</Link></li>
        <li className='nav-desktop__link'>Proyects</li>
        <li className='nav-desktop__link'>Contact</li>
      </ul>
    </nav>
  )
}
