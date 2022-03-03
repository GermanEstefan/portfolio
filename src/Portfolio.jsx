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
      <a href={require('./assets/Curriculum.pdf')} className='link-curriculum button-primary' rel="noreferrer" target='_blank'>Ver curriculum</a>
    </main>
  )
}
