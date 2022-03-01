import React from 'react'

export const InfoContactCard = () => {

  const handleFocusInput = () => {
    const input = document.getElementsByTagName('input')[0]
    input.focus()
  }

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
          <i className='fas fa-map-marker-alt' onClick={handleFocusInput}></i>
        </div>
      </div>

      <div>
        <span>Other means of contact</span>
        <br />
        <div>
          <i className='fas fa-phone-square-alt' onClick={handleFocusInput}></i>
          <i className='fas fa-envelope' onClick={handleFocusInput}></i>
        </div>
      </div>

    </div>
  )
 
}
