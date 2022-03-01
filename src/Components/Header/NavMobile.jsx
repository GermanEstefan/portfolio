import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { SocialMedias } from './SocialMedias';

export const NavMobile = () => {

  const [openNav, setOpenNav] = useState(false);

  const handleCloseMenu = () => {
    const navMovile = document.getElementById('navMobile');
    navMovile.classList.toggle('animate__fadeOutRight')
    setTimeout(() => {
      setOpenNav(false)
    }, 500)
  }

  return (
    <nav className='nav-mobile'>
      <i className="fas fa-bars" onClick={() => setOpenNav(true)}></i>
      {
        openNav && <ul id='navMobile' className='animate__animated animate__fadeInRight'>
          <i className="fas fa-times" onClick={handleCloseMenu}></i>
          <li><Link to='home' smooth={true} spy={true}>Home</Link></li>
          <li><Link to='about' smooth={true} spy={true}>About</Link></li>
          <li><Link to='proyects' smooth={true} spy={true}>Proyects</Link></li>
          <li><Link to='contact' smooth={true} spy={true}>Contact</Link></li>
          <SocialMedias />
        </ul>
      }
    </nav>
  )
}
