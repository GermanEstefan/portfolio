import React from 'react'
import { Link } from 'react-scroll'
import { NavDesktop } from '../Header/NavDesktop'
import { SocialMedias } from '../Header/SocialMedias'

export const Footer = () => {
  return (
    <footer>
      <div className='span-container'>
        <div>
          <span>German Estefan</span><br />
          <small>Full stack developer - M.E.R.N</small><br />
        </div>
        <i className="fas fa-code"></i>
      </div>
      <NavDesktop />
      <SocialMedias />
      <Link to='home' smooth={true} spy={true} activeClass='active-link' className='to-upper'>
        <i className='fas fa-arrow-circle-up'></i>
      </Link>
    </footer>
  )
}
