import React from 'react'

export default function ContactForm() {

    return (
        //for submit action and things of that nature
        <form action="https://formsubmit.co/ajijolanurudeen@gmail.com" method="POST" className='max-w-[753px] mx-auto '>
            <div className=' flex-col flex md:flex-row justify-between items-center md:gap-4  md:mb-[42px]'>

                <input
                    type="text"
                    placeholder='name'
                    name="Name"
                    className='bg-transparent  border-b border-light-grey outline-none placeholder:text-light-grey placeholder:text-sm md:max-w-[350px] w-[100%] py-2 text-sm min-w-0  md:mt-0'
                    required
                />


                <input
                    type="text"
                    placeholder='last name'
                    name="Last_Name"
                    className='bg-transparent  border-b border-light-grey outline-none placeholder:text-light-grey placeholder:text-sm md:max-w-[350px] w-[100%] py-2 text-sm min-w-0 mt-2 md:mt-0'
                    required
                />

            </div>
            <div className=' flex-col flex md:flex-row justify-between items-center md:gap-4  mb-[42px]'>

                <input
                    type="email"
                    placeholder='email'
                    name="email"
                    className='bg-transparent  border-b border-light-grey outline-none placeholder:text-light-grey placeholder:text-sm md:max-w-[350px] w-[100%] py-2 text-sm min-w-0 mt-2 md:mt-0'
                    required
                />

                <input
                    type="number"
                    placeholder='phone number'
                    name="Phone_Number"
                    className='bg-transparent  border-b border-light-grey outline-none placeholder:text-light-grey placeholder:text-sm md:max-w-[350px] w-[100%] py-2 text-sm min-w-0 mt-2 md:mt-0'
                />

            </div>

            <textarea
                name="Message"
                placeholder='send a message...'
                className='bg-transparent border border-light-grey outline-none w-full placeholder:text-light-grey placeholder:text-sm p-2'
                rows='5'
            >

            </textarea>

            <button type="submit" className="block bg-green py-[12px] px-[27px] text-sm mt-6 mx-auto">
                Submit now
            </button>
        </form>

    )
}
