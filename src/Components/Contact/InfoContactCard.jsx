import React from 'react'
import { SocialMedias } from '../Header/SocialMedias'

export const InfoContactCard = () => {
  return (
    <div className='contact__ui-container__info-contact'>

      <div>
        <span>Social medias</span>
        <br />
        <div>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-github"></i>
          <i className="fab fa-linkedin-in"></i>
        </div>
      </div>

      <div>
        <span>Location</span>
        <br />
        <div>
          <i className='fas fa-map-marker-alt'></i>
        </div>
      </div>

      <div>
        <span>Other means of contact</span>
        <br />
        <div>
          <i className='fas fa-phone-square-alt'></i>
          <i className='fas fa-envelope'></i>
        </div>
      </div>

    </div>
  )
}
