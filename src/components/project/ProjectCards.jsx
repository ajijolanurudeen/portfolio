import React from 'react'

export default function ProjectCards(props) {

    //the props are parsed from project.jsx
    const { title, link, description, technologyStack, id } = props.data

    //this code is for the technology stack gotten from the ProjectCardsData.js.they are separated by commas, so this code splits them and puts them in arrays
    const technologies = technologyStack.split(",").map((tech) => tech.trim())
    return (

        <div className={`pb-[20px] border-light-grey ${id > 1 ? "border-t-2 pt-[20px] border-light-grey" : ""}`} >
            <a
                href={link}
                target='_blank'
                className='font-bold text-xl md:text-2xl capitalize text-green hover:underline leading-10'>
                {title}
            </a>
            <p
                className='md:text-xl text-sm mb-[2px] md:mb-2 max-w-xl'>
                {description}
            </p>
            <div>
                <span
                    className='text-light-grey font-bold mr-1'>
                </span>
                <div className='technologies flex gap-1 flex-wrap'>
                    {/* the technology stack is mapped and the content of the split array is put into different divs */}
                    {technologies.map((tech, index) =>
                        <div key={index} className='border-green border rounded-lg w-fit font-mono text-sm py-1 px-2'>
                            <div className='text-center'>
                                {tech}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* <a href={link} target='_blank' className='font-extralight mt-3 block'>Find out more</a> */}

        </div>
    )
}
