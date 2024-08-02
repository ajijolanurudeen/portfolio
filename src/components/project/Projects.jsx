import React from 'react'

import ProjectCards from './ProjectCards.jsx'

import { ProjectCardData } from './ProjectCardData.js'



export default function Projects() {
  return (
    
    <section className='mt-[99px]'>

      <h2 className='lg:text-5xl text-4xl font-bold text-center mb-[45px]'>My Projects</h2>

      <div className='project-cards-section'>

        {ProjectCardData.map((projectCardInfo) =>

          <ProjectCards key={projectCardInfo.id} data={projectCardInfo} />

        )}
      </div>

    </section>

  )
}


