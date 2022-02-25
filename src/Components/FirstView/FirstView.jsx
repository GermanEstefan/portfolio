import React from 'react'
import { Presentation } from './Presentation'
import { Slide } from './Slide'

export const FirstView = () => {

  return (
    <div className='first-view' id='home'>
      <Presentation />
      <Slide />
    </div>
  )
}
