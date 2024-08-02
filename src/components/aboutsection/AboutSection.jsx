import React from 'react'
import { AboutSectionData } from './AboutSectionInfoData.js'
import AboutSectionInfo from './AboutSectionInfo.jsx'

export default function AboutSection() {
    return (
        <section>
            <h2 className='lg:text-5xl text-4xl font-bold text-center mb-[45px]'>About</h2>
            <p className='mx-auto text-center text-md lg:text-lg max-w-[745px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident
            </p>
            <div className='about-section-contact-info flex justify-between max-w-sm mx-auto mt-[45px]'>
                {AboutSectionData.map((info) =>
                    <AboutSectionInfo data={info} key={info.id} />
                )}
            </div>
        </section>
    )
}
