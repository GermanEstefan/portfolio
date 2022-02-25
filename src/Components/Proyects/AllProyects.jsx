import React, { useEffect, useState } from 'react'
import { proyectsDB } from '../../data'
import { Proyect } from './Proyect'

export const AllProyects = () => {

    const [proyects, setProyects] = useState([])
    useEffect(() => setProyects(proyectsDB), [])

    return (
        <div className='proyects__all-proyects'>
            {
                proyects.map(proyect => (
                    <Proyect key={proyect.id} props={{...proyect}} />
                ))
            }
        </div>
    )
}
