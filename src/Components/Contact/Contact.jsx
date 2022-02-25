import React from 'react'
import { FromSendMail } from './FromSendMail'
import { InfoContactCard } from './InfoContactCard'

export const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <h1>Contact</h1>
      <div className='contact__ui-container'>
        <InfoContactCard />
        <FromSendMail />
      </div>
    </div>
  )
}
