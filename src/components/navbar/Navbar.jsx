import React from 'react'
import { useState } from 'react'
import { NavbarMenuItemData } from './NavbarData.js'
import NavbarMenuItemList from './NavbarMenuItemList.jsx'
// css for hamburger button
import './css/hamburger.css'

export default function Navbar() {


    // state for navbar
    // const [isOpen, setIsOpen] = useState(false);
    // i later found out i dont need state
    //after i already had a checkbox that could
    //handle something similar
    //i'm dumb asf



    //state for the hamburger
    const [isChecked, setChecked] = useState(false)



    // function that overwrites state
    const toggleNavbar = () => {
        setChecked(!isChecked)
    }

    //this is the funtion for the hamburger for the animation to work
    //i know its unecessary but i thought it would be fun
    //This is worth paying me 40k more, bro (•_•)
    //i know you will never see the comment on this code because you wont
    //read the code aspa consumer. Wait, why am i writing all this shit?
    //Deuce (⌐■_■)


    return (
        <nav className= {`flex items-center justify-between py-[15px] md:py-[28px] sm:border-none relative ${!isChecked ? "border-b-2 border-light-grey": ""}`}>


            <div className="nav-logo text-2xl lg:text-3xl font-bold">
                Ajijola Nurudeen
            </div>

            {/* navitems for desktop view */}
            <ul className='gap-6 lg:gap-[40px] text-md lg:text-lg font-medium hidden sm:flex'>
                {NavbarMenuItemData.map((NavItem) =>
                    <NavbarMenuItemList data={NavItem} key={NavItem.id} />
                )}
            </ul>


            {/* navitems for mobile view */}
            <ul className={`gap-[20px] text-lg ${isChecked ? 'max-h-[500px] border-b-2 border-light-grey pb-7' : 'max-h-0'} transition-all  overflow-hidden font-medium sm:hidden flex flex-col w-full absolute items-center top-[90px] `}>
                {NavbarMenuItemData.map((NavItem) =>
                    <NavbarMenuItemList data={NavItem} key={NavItem.id} />  
                )}
            </ul>

            {/* hamburger menu button */}
            <div className="hamburger sm:hidden">

                <input
                    className="checkbox"
                    type="checkbox"
                    checked={isChecked}
                    onChange={toggleNavbar}
                />

                <svg fill="none" viewBox="0 0 50 50" height="50" width="50">
                    <path
                        className="lineTop line"
                        strokeLinecap="round"
                        strokeWidth="4"
                        stroke="black"
                        d="M6 11L44 11"
                    ></path>
                    <path
                        strokeLinecap="round"
                        strokeWidth="4"
                        stroke="black"
                        d="M6 24H43"
                        className="lineMid line"
                    ></path>
                    <path
                        strokeLinecap="round"
                        strokeWidth="4"
                        stroke="black"
                        d="M6 37H43"
                        className="lineBottom line"
                    ></path>
                </svg>
            </div>

        </nav>
    )
}

//you are probably wondering why i wrote the SVG code by myself
//without using a Generator or Copying it from a forum
//well, it is for my own amusement. Sometimes i Jerk off to my own work,
//not because i'm good at it but because i am hiding the fact that i write
//bad JS code. You may notice some spelling erros. I dont use Autocorrect on PC
//Deuce (⌐■_■)  