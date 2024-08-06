import React from 'react'
import ProjectCards from './ProjectCards.jsx'
import { ProjectCardData } from './ProjectCardData.js'
import { useState } from 'react'

export default function Projects() {
  //  this code is just in case you want to
  //  render 3 at a time but i realized that we 
  //  dont have a lot of data to work with
  //  and i cant restart the code so ill just 
  //  work with what we have
  //Deuce (⌐■_■)

  // setVisible((prevValue) => prevValue + 3)

  const [visible, setVisible] = useState(2)


  //this function uses the previous value as reference for a new value
  const showMore = () => {
    setVisible((prevValue) => Math.min(prevValue + 3, ProjectCardData.length))
  }

  const showLess = () => {
    setVisible(2);
  }

  return (
    <section id='2' className='mt-[99px]'>
      <h2 className='lg:text-5xl text-4xl font-bold text-center mb-[45px]'>My Projects</h2>
      <div className='project-cards-section'>
        {/* this code prevents all the items in the array from rendering */}
        {/* on default i set it to only render 2 items as you can see in the state [visible, setVisible] */}
        {ProjectCardData.slice(0, visible).map((ProjectCardInfo) => (
          <ProjectCards
            data={ProjectCardInfo}
            key={ProjectCardInfo.id}
          />
        ))}
      </div>
      {/* showless/show more button */}
      <button
        className='bg-green py-[12px] px-[27px] text-sm mt-6 hover:bg-transparent hover:border-white border border-transparent cursor-pointer transition-all'
        // i think it is self explanatory what this does right?
        // depending on the state visible, this funtion either of the function will run
        onClick={visible == ProjectCardData.length ? showLess : showMore}>
        {visible == ProjectCardData.length ? "Show Less" : "Show More"}
      </button>
    </section>
  )
}


