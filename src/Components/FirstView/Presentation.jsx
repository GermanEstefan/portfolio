import React from 'react'

export const Presentation = () => {
  return (
    <div className='first-view__presentation'>
       <p>
        <b className='animate__animated animate__fadeIn'>Hola, </b> <span className='animate__animated animate__fadeIn animate__delay-1s'>mi nombre es German Estefan.</span><br />
        <span className='animate__animated animate__fadeIn animate__delay-2s'>Soy </span><strong className='animate__animated animate__fadeIn animate__delay-2s'>Full Stack Developer Junior</strong><br />
        <span className='animate__animated animate__fadeIn animate__delay-2s'>( M.E.R.N stack )</span>
      </p>
      <img src={require('../../assets/images/profile.jpg')} alt="profile face" className='animate__animated animate__fadeIn animate__delay-3s' />
    </div>
  )
}
