import React from 'react'

export default function ProjectCards(props) {

    const { title, link, description, technologyStack, id } = props.data

    return (

        <div className={`pb-[20px] border-light-grey ${id > 1 ? "border-t-2 pt-[20px] border-light-grey" : ""}`} >

            <a href={link} target='_blank' className='font-bold text-2xl capitalize text-green hover:underline leading-10'>{title}</a>

            <p>{description}</p>

            <p><span className='text-light-grey font-bold mr-1'>Technology Stack:</span>  {technologyStack}</p>

            {/* <a href={link} target='_blank' className='font-extralight mt-3 block'>Find out more</a> */}

        </div>
    )
}
  