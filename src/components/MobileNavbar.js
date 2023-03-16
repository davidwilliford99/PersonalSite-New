import { useInView } from 'framer-motion';
import { React, useRef } from 'react';
import { NavLink } from 'react-router-dom';


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
            name: "Welcome", url: "", logo: "", isCurrent: props.introInView, goTo: introScroll
        },
        {
            name: "Works", url: "", logo: "", isCurrent: props.worksInView, goTo: worksScroll
        },
        {
            name: "About", url: "", logo: "", isCurrent: props.aboutInView, goTo: aboutScroll
        },
        {
            name: "Contact", url: "", logo: "", isCurrent: props.contactInView, goTo: contactScroll
        },
        {
            name: "Resume", url: "", logo: "", isCurrent: props.resumeInView, goTo: resumeScroll
        },

    ];

    return (
      <div 
            id='Navbar' 
            className='bg-dark fixed w-full font-Montserrat 2xl:px-48
                       flex justify-center items-center z-10 lg:invisible bottom-0'
            ref={ref}
            >
        

        
        <ul 
            className='flex w-full justify-evenly'
            style={{
                transform: isInView ? "none" : "translateY(-100px)",
                transition: "all 1s"
            }}
            >
            {
                navItems.map((navItem) => {

                    if(navItem.isCurrent) {
                        return (
                            <NavLink 
                                className='w-full hover:text-orange-300 text-offWhite transition' 
                                onClick={navItem.goTo}
                                >

                                <li className='font-semibold font-Roboto tracking-widest bg-dark w-full py-5 text-center text-sm tracking-wider'>
                                    {navItem.name}
                                </li>

                            </NavLink>

                        )
                    }
                    else {
                        return (
                            <NavLink 
                                className='w-full text-offWhite transition border-solid border border-neutral-600' 
                                onClick={navItem.goTo}
                                >

                                <li className='font-Roboto text-neutral-200 tracking-widest w-full py-5 text-center text-xs tracking-wider'>
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