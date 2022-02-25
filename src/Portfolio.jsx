import React from 'react'
import { Contact } from './Components/Contact/Contact'
import { FirstView } from './Components/FirstView/FirstView'
import { Header } from './Components/Header/Header'
import { Proyects } from './Components/Proyects/Proyects'

export const Portfolio = () => {
  return (
    <main>
        <Header/>
        <FirstView/>
        <Proyects/>
        <Contact/>
    </main>
  )
}
