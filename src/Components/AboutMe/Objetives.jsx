import React from 'react'

export const Objetives = () => {
  return (
    <div className='about__info-container__objetives'>
      <h2>Objetivos</h2>
      <div>
        <ul>
          <li>Poder aportar todo mi conocimiento adquirido
            a una compania, ya sea para un producto en
            especifico o de manera consultora.
          </li>
          <li>Absorver todo el conocimiento posible de mentores/as y colegas.</li>
          <li>Crecer personal y profesionalmente.</li>
        </ul>
        <img src={require('../../assets/images/objetives-about.png')} alt="Objetivos" />
      </div>
    </div>
  )
}
