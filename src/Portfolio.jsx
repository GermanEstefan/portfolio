import React from 'react'
import { FirstView } from './Components/FirstView/FirstView'
import { Header } from './Components/Header/Header'
import { Proyects } from './Components/Proyects/Proyects'

export const Portfolio = () => {
  return (
    <main>
        <Header/>
        <FirstView/>
        <Proyects/>
    </main>
  )
}
