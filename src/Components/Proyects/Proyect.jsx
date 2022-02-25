import React from 'react'

export const Proyect = ({props}) => {
  return (
    <div className='proyects__all-proyects__proyect'>
        <h2>{props.title}</h2>
        <img src="" alt="" />
        <p>{props.description}</p>
        <div>
            <span>Github</span>
            <span>View demo</span>
        </div>
    </div>
  )
}
