import React from 'react'
import Nurudeen from "../../assets/HeroSectionImages/nurudeen.jpg"
import "./herosection.css"

export default function HeroSection() {
    return (
        <section className=' h-[95vh] min-h-[95vh]'>
            <div className='flex justify-between items-center  h-full'>
                <div className='flex-1'>
                    <h1 className='lg:text-5xl text-4xl font-bold'>
                        Hi, I am
                        <span className='block mt-4'> Ajijola Nurudeen</span>
                    </h1>
                    <p className='text-light-grey text-md lg:text-lg font-bold mt-[9px]'>Frontend Developer</p>
                    <div className="call-to-action mt-[35px]">
                        <a href="../../assets/resume/CV AJIJOLA NURUDEEN (1).pdf" className='bg-green py-[12px] px-[27px] text-sm' download>
                            Download CV
                        </a>
                    </div>
                </div>
                <div className='flex-1 max-w-[650px] w-[100%] rounded-[100%] border-[1px] border-grey aspect-square p-5 bg-[#181818]'>
                    <div className='rounded-full w-full h-full  overflow-hidden '>
                        <img className='rounded-full nurudeen' src={Nurudeen} alt="Nurudeen Ajijola" />
                    </div>
                </div>
            </div>
        </section>
    )
}
