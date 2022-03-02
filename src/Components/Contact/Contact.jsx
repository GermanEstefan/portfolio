import React from 'react'
import { FromSendMail } from './FromSendMail'
import { InfoContactCard } from './InfoContactCard'

export const Contact = () => {
  return (
    <div className='contact' id='contact' >
      <h1 data-aos='fade-left'>Contacto</h1>
      <div className='contact__ui-container' data-aos='fade-right'>
        <InfoContactCard />
        <FromSendMail />
      </div>
    </div>
  )
}
