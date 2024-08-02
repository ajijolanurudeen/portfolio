import React from 'react'
import ServicesCard from './ServicesCard.jsx'
// data for the card
import { ServicesData } from './ServicesData.js'

export default function Services() {
    return (
        <section className='mt-[99px]'>
            <h2 className='lg:text-5xl text-4xl font-bold text-center mb-[45px]'>What i do</h2>
            <div className='lg:flex-row flex-col lg:gap-0 gap-6 flex lg:gap-0  max-w-[1050px] justify-between  mx-auto'>
                {/* mapped data from servicesData  */}
                {ServicesData.map((serviceData) =>
                    <ServicesCard data={serviceData} key={serviceData.id} />
                )}
            </div>
        </section>
    )
}
