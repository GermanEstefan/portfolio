import React from 'react'
import { Link } from 'react-scroll'

export const NavDesktop = () => {

  return (
    <nav className='nav-desktop'>
      <ul>
        <li><Link to='home' smooth={true} spy={true} activeClass='active-link'>Inicio</Link></li>
        <li><Link to='about' smooth={true} spy={true} activeClass='active-link'>Sobre mi</Link></li>
        <li><Link to='proyects' smooth={true} spy={true} activeClass='active-link'>Proyectos</Link></li>
        <li><Link to='contact' smooth={true} spy={true} activeClass='active-link'>Contacto</Link></li>
      </ul>
    </nav>
  )
}
