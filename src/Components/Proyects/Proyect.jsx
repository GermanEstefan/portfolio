import React from 'react'

export const Proyect = ({ props }) => {
  return (
    <div className='proyects__all-proyects__proyect'>
      <h2>{props.title}</h2>
      <img src={props.img} alt={props.title} />
      <p>{props.description}</p>
      <div>
        <i className="fab fa-github"></i>
        <i className="fas fa-globe-americas"></i>
      </div>
    </div>
  )
}
