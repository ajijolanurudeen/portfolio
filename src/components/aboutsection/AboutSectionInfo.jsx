import React from 'react'

export default function AboutSectionInfo(props) {
  const { socialContact, link, logo, linkType } = props.data;

  return (
    <div>
      <div className="rounded-full w-[62px] h-[62px] bg-grey logo-container flex justify-center items-center">
        <img
          src={logo}
          alt={`${socialContact} Logo`}
        />
      </div>
      <a
        href={linkType === "Email" ? "mailto:" + link : link}
        target='_blank'
        className='text-center mt-[18px] text-lg font-bold block hover:text-green hover:underline'>
        {socialContact}
      </a>
    </div>
  )
}
