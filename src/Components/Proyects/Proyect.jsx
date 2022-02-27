import React from 'react'

export const Proyect = ({ props }) => {
  return (
    <div className='proyects__all-proyects__proyect'>
      <h2>{props.title}</h2>
      <img src={props.img} alt={props.title} />
      <p>{props.description}</p>
      <div>
        <a href={props.linkRepo} target='_blank'><i className="fab fa-github"></i></a>
        <a href={props.linkWeb} target='_blank'><i className="fas fa-globe-americas"></i></a>
      </div>
    </div>
  )
}
