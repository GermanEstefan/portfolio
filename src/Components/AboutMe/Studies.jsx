import React from 'react'

export const Studies = () => {
  return (
    <div className='about__info-container__studies'>
      <h2>Estudios</h2>
      <div>
        <img src={require('../../assets/images/studys-about.png')} alt="estudios" />
        <ul>
          <li>Bachillerato tecnologo de informatica - ITS Montevideo - Uruguay</li>
          <li>JavaScript developer - CoderHouse</li>
          <li>JavaScript Algorithms and Data Structures - FreeCodeCamp</li>
          <li>ReactJS Hooks y MERN - “ De cero a experto ” - Udemy</li>
          <li>NodeJS “De cero a experto” - Udemy</li>
        </ul>
      </div>
    </div>
  )
}
