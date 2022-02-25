import React from 'react'

export const Presentation = () => {
  return (
    <div className='first-view__presentation'>
       <p>
        <b className='animate__animated animate__fadeIn'>Hi there, </b> <span className='animate__animated animate__fadeIn animate__delay-1s'>my name is German Estefan.</span><br />
        <span className='animate__animated animate__fadeIn animate__delay-2s'>I'm </span><strong className='animate__animated animate__fadeIn animate__delay-2s'>Full Stack Developer</strong><br />
        <span className='animate__animated animate__fadeIn animate__delay-2s'>(M.E.R.N stack )</span>
      </p>
      <img src={require('../../assets/images/profileImage.jpeg')} alt="profile face" className='first-view__presentation__image animate__animated animate__fadeIn animate__delay-3s' />
    </div>
  )
}
