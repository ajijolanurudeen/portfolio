import React from 'react'

import ProjectCards from './ProjectCards.jsx'

import { ProjectCardData } from './ProjectCardData.js'

import { useState } from 'react'



export default function Projects() {
  const [visible, setVisible] = useState(2)


  const showMore = () => {

    setVisible((prevValue) => Math.min(prevValue + 3, ProjectCardData.length))

    //  this code is just in case you want to
    //  render 3 at a time but i realized that we 
    //  dont have a lot of data to work with
    //  and i cant restart the code so ill just 
    //  work with what we have
    //Deuce (⌐■_■)

    // setVisible((prevValue) => prevValue + 3)

  }

  const showLess = () => {

    setVisible(2);

  }

  return (

    <section className='mt-[99px]'>

      <h2 className='lg:text-5xl text-4xl font-bold text-center mb-[45px]'>My Projects</h2>

      <div className='project-cards-section'>

        {ProjectCardData.slice(0, visible).map((ProjectCardInfo) => (

          <ProjectCards

            data={ProjectCardInfo}

            key={ProjectCardInfo.id}

          />

        ))}

      </div>

      <button

        className='bg-green py-[12px] px-[27px] text-sm mt-6'

        onClick={visible == ProjectCardData.length ? showLess : showMore}>

        {visible == ProjectCardData.length ? "Show Less" : "Show More"}

      </button>

    </section>

  )
}


