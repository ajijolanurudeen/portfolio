import React from 'react'

export default function AboutSectionInfo(props) {
  const { socialContact, link, logo, linkType } = props.data;

  return (
    <div className='grid place-items-center'>
      <div className="rounded-full w-[40px] h-[40px] sm:w-[62px] sm:h-[62px] bg-grey logo-container flex justify-center items-center">
        <img
          src={logo}
          alt={`${socialContact} Logo`}
        />
      </div>
      <a
        href={linkType === "Email" ? "mailto:" + link : link}
        target='_blank'
        className='text-center mt-[18px] text-sm sm:text-lg font-bold block hover:text-green hover:underline'>
        {socialContact}
      </a>
    </div>
  )
}
