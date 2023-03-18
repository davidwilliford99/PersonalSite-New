import { useInView } from 'framer-motion';
import { React, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import introImg from './../assets/welcome-mobile.png';
import worksImg from './../assets/works-mobile.png';
import aboutImg from './../assets/about-mobile.png';
import contactImg from './../assets/contact-mobile.png';
import resumeImg from './../assets/resume-mobile.png';


export const MobileNavbar = (props) => {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    // run these functions from an event handler or an effect to execute scroll 
    const introScroll = () => props.introClickRef.current.scrollIntoView({behavior: "smooth"})   
    const worksScroll = () => props.worksClickRef.current.scrollIntoView({behavior: "smooth"})
    const aboutScroll = () => props.aboutClickRef.current.scrollIntoView({behavior: "smooth"})
    const contactScroll = () => props.contactClickRef.current.scrollIntoView({behavior: "smooth"})
    const resumeScroll = () => props.resumeClickRef.current.scrollIntoView({behavior: "smooth"})

   
    
    /**
     * List of navbar items 
     */
    const navItems = [
        {
            name: "Welcome", url: "", logo: "", isCurrent: props.introInView, goTo: introScroll, image: introImg
        },
        {
            name: "Works", url: "", logo: "", isCurrent: props.worksInView, goTo: worksScroll, image: worksImg
        },
        {
            name: "About", url: "", logo: "", isCurrent: props.aboutInView, goTo: aboutScroll, image: aboutImg
        },
        {
            name: "Contact", url: "", logo: "", isCurrent: props.contactInView, goTo: contactScroll, image: contactImg
        },
        {
            name: "Resume", url: "", logo: "", isCurrent: props.resumeInView, goTo: resumeScroll, image: resumeImg
        },

    ];

    return (
      <div 
            id='Navbar' 
            className='bg-dark fixed w-full font-Montserrat 2xl:px-48
                       flex justify-center items-center z-20 lg:invisible bottom-0'
            ref={ref}
            >
        

        
        <ul 
            className='flex w-full justify-evenly'
            style={{
                transform: isInView ? "none" : "translateY(100px)",
                transition: "all 1s"
            }}
            >
            {
                navItems.map((navItem) => {

                    if(navItem.isCurrent) {
                        return (
                            <NavLink 
                                className='w-full bg-neutral-800 text-offWhite transition border-solid border border-neutral-700 flex flex-col items-center justify-center font-semibold' 
                                onClick={navItem.goTo}
                                >
                                
                                <img src={navItem.image} alt='poop' className='h-8 pt-1'/>

                                <li className='font-Roboto text-neutral-200 tracking-widest w-full pb-1 pt-1 text-center text-xs tracking-wider'>
                                    {navItem.name}
                                </li>
                                
                            </NavLink>

                        )
                    }
                    else {
                        return (
                            <NavLink 
                                className='w-full text-offWhite transition border-solid border border-neutral-700 flex flex-col items-center justify-center' 
                                onClick={navItem.goTo}
                                >
                                
                                <img src={navItem.image} alt='poop' className='h-8 pt-1'/>

                                <li className='font-Roboto text-neutral-200 tracking-widest w-full pb-1 pt-1 text-center text-xs tracking-wider'>
                                    {navItem.name}
                                </li>
                                
                            </NavLink>
                        )
                    }

                })
            }
        </ul>
  
      </div>
  
    );
  }