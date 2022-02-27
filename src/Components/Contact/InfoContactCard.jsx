import React from 'react'
import { SocialMedias } from '../Header/SocialMedias'

export const InfoContactCard = () => {
  return (
    <div className='contact__ui-container__info-contact'>

      <div>
        <span>Social medias</span>
        <br />
        <div>
          <a href="https://github.com/GermanEstefan/" target='_blank'><i className="fab fa-github"></i></a>  
          <a href="https://www.linkedin.com/in/german-estefan-313075174/" target='_blank'><i className="fab fa-linkedin-in"></i></a> 
        </div>
      </div>

      <div>
        <span>Location</span>
        <br />
        <div>
          <a href=""><i className='fas fa-map-marker-alt'></i></a>
        </div>
      </div>

      <div>
        <span>Other means of contact</span>
        <br />
        <div>
          <a href=""><i className='fas fa-phone-square-alt'></i></a>
          <a href=""><i className='fas fa-envelope'></i></a> 
        </div>
      </div>

    </div>
  )
}
