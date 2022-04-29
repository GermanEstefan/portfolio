import React, { useEffect, useState } from 'react'
import { skillsDB } from '../../data';
import { Skill } from './Skill';

export const Skills = () => {

  const [skills, setSkills] = useState([]);
  useEffect(() => setSkills(skillsDB), []);

  return (
    <div className='about__info-container__skills' data-aos='fade-left'>

      <h2>Habilidades</h2>

      <div className='about__info-container__skills__img-and-container-skills'>

        <img src='https://res.cloudinary.com/journalappgetest/image/upload/v1646252263/skills-about_bz5ppu.png' alt="" />

        <div>

          <div>
            <h3>Tecnicas</h3>
            <div>
              {
                skills.map(skill => (
                  <Skill key={skill.id} props={skill} />
                ))
              }
            </div>
          </div>

          <div>
            <h3>Otras</h3>
            <p>Empatico, productivo, capacidad de trabajar en equipo, entre otras.</p>
          </div>

        </div>

      </div>
    </div>
  )
}
