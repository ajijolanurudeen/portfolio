import React from 'react'
import Nurudeen from "../../assets/HeroSectionImages/nurudeen.jpg"
import "./herosection.css"

export default function HeroSection() {
    return (
        <section className=' h-[80vh] min-h-[80vh] md:h-[95vh] md:min-h-[95vh]'>
            <div className='flex justify-center sm:gap-0 gap-8 sm:justify-between flex-col sm:flex-row items-center  h-full'>
                <div className='sm:flex-1 text-center sm:text-start'>
                    <h1 className='lg:text-5xl text-4xl font-bold'>
                        Hi, I am
                        <span className='sm:block mt-4'> Ajijola Nurudeen</span>
                    </h1>
                    <p className='text-light-grey text-md lg:text-lg font-bold mt-[9px]'>Backend Developer</p>
                    <div className="call-to-action mt-[20px] sm:mt-[35px]">
                        <a href="../../assets/resume/CV AJIJOLA NURUDEEN (1).pdf" className='bg-green py-[12px] px-[27px] text-sm hover:bg-transparent hover:border-white border border-transparent cursor-pointer transition-all' download>
                            Download CV
                        </a>
                    </div>
                </div>
                <div className='sm:flex-1 max-w-[300px] p-2 sm:max-w-[500px] w-[100%] sm:block rounded-[100%] border-[1px] border-green aspect-square sm:p-3 lg:p-5 bg-[#181818]'>
                    <div className='rounded-full w-full h-full  overflow-hidden aspect-square'>
                        <img className='rounded-full nurudeen' src={Nurudeen} alt="Nurudeen Ajijola" />
                    </div>
                </div>
            </div>
        </section>
    )
}
