import React, { useEffect } from 'react'
import { AboutMe } from './Components/AboutMe/AboutMe'
import { Contact } from './Components/Contact/Contact'
import { FirstView } from './Components/FirstView/FirstView'
import { Footer } from './Components/Footer/Footer'
import { Header } from './Components/Header/Header'
import { Proyects } from './Components/Proyects/Proyects'
import Aos from 'aos'
import 'aos/dist/aos.css';

export const Portfolio = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <main>
      <Header />
      <FirstView />
      <AboutMe />
      <Proyects />
      <Contact />
      <Footer />
      <a href='https://drive.google.com/file/d/1eFeaFR-3yTh4bb6ZHqR0_2X0ELpVZYlh/view?usp=sharing' className='link-curriculum button-primary' rel="noreferrer" target='_blank'>Ver curriculum</a>
    </main>
  )
}
