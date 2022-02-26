import React from 'react'
import { AboutMe } from './Components/AboutMe/AboutMe'
import { Contact } from './Components/Contact/Contact'
import { FirstView } from './Components/FirstView/FirstView'
import { Header } from './Components/Header/Header'
import { Proyects } from './Components/Proyects/Proyects'

export const Portfolio = () => {
  return (
    <main>
        <Header/>
        <FirstView/>
        <AboutMe/>
        <Proyects/>
        <Contact/>
    </main>
  )
}
