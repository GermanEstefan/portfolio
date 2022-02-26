import React, { useEffect } from 'react'

export const Skill = ({ props }) => {

  useEffect(() => {
    const barPercentage = document.getElementById(props.technology);
    barPercentage.style.width = props.level;
  }, [props.technology, props.level])


  return (
    <div className='container-skill'>
      <img src={props.img} alt={props.technology} />
      <div>
        <div id={props.technology}>{props.level}</div>
      </div>
    </div>
  )
}
