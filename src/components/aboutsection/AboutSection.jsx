import React from 'react'
import { AboutSectionData } from './AboutSectionInfoData.js'
import AboutSectionInfo from './AboutSectionInfo.jsx'

export default function AboutSection() {
    return (
        <section id='1'>
            <h2 className='lg:text-5xl text-4xl font-bold text-center mb-[45px] mt-[20px] md:mt-[45px]'>About</h2>
            <p className='mx-auto text-center text-md lg:text-lg max-w-[745px]'>Howdy! I'm Nurudeen , a backend engineer with a knack for diving deep into the world of cloud computing. With a strong foundation in backend development, I thrive on building robust systems that power applications behind the scenes. My enthusiasm for cloud computing stems from my love for scalability, efficiency, and the endless possibilities it offers in modern tech landscapes.

In my journey, I've honed my skills in designing and optimizing databases, crafting efficient APIs, and ensuring seamless data flow. Whether it's architecting resilient cloud infrastructures or optimizing backend processes for peak performance, I'm always up for the challenge. When I'm not coding away, you can find me exploring the latest trends in cloud technology or tinkering with new tools to enhance my skill set.

Let's connect and geek out over all things backend and cloud computing!
            </p>
            <div className='about-section-contact-info flex justify-between max-w-[250px] sm:max-w-sm mx-auto mt-[45px]'>
                {AboutSectionData.map((info) =>
                    <AboutSectionInfo data={info} key={info.id} />
                )}
            </div>
        </section>
    )
}

//the about me is lorem  ipsum so you go obviously edit am
