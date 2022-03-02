import React from 'react'
import { Objetives } from './Objetives'
import { Skills } from './Skills'
import { Studies } from './Studies'


export const AboutMe = () => {

  return (
    <div className='about' id='about'>
      <h1 data-aos='fade-left'>Sobre mi</h1>
      <div className='about__info-container'>
        <Studies />
        <Objetives />
        <Skills />
      </div>
    </div>
  )
}
