import React, { useState } from 'react'
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
      <i className="fas fa-bars nav-mobile__exit-btn" onClick={() => setOpenNav(true)}></i>
      {
        openNav && <ul id='navMobile' className='animate__animated animate__fadeInRight'>
          <i className="fas fa-times" onClick={handleCloseMenu}></i>
          <li className='nav-mobile__link'>Home</li>
          <li className='nav-mobile__link'>About me</li>
          <li className='nav-mobile__link'>Proyects</li>
          <li className='nav-mobile__link'>Contact</li>
          <SocialMedias />
        </ul>
      }
    </nav>
  )
}
