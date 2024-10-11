import { useInView } from 'framer-motion';
import { React, useRef } from 'react';
import { NavLink } from 'react-router-dom';


export const Navbar = (props) => {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    // run these functions from an event handler or an effect to execute scroll 
    const introScroll = () => props.introClickRef.current.scrollIntoView({behavior: "smooth"})   
    const servicesScroll = () => props.servicesClickRef.current.scrollIntoView({behavior: "smooth"})
    const aboutScroll = () => props.aboutClickRef.current.scrollIntoView({behavior: "smooth"})
    const contactScroll = () => props.contactClickRef.current.scrollIntoView({behavior: "smooth"})
    const worksScroll = () => props.worksClickRef.current.scrollIntoView({behavior: "smooth"})
    const storiesScroll = () => props.storiesClickRef.current.scrollIntoView({behavior: "smooth"})
   
    
    /**
     * List of navbar items 
     */
    const navItems = [
        {
            name: "Welcome", url: "", logo: "", isCurrent: props.introInView, goTo: introScroll
        },
        {
            name: "About", url: "", logo: "", isCurrent: props.aboutInView, goTo: aboutScroll
        },
        {
            name: "Services", url: "", logo: "", isCurrent: props.servicesInView, goTo: servicesScroll
        },
        {
            name: "Stories", url: "", logo: "", isCurrent: props.storiesInView, goTo: storiesScroll
        },
        {
            name: "Contact", url: "", logo: "", isCurrent: props.contactInView, goTo: contactScroll
        },
        // {
        //     name: "Works", url: "", logo: "", isCurrent: props.worksInView, goTo: worksScroll
        // },

    ];

    return (
      <div 
            id='Navbar' 
            className='
                       bg-dark fixed w-full font-Gloock 2xl:px-48
                       max-w-screen-2xl
                       flex justify-center items-center z-10 invisible lg:visible'
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

                                <li className='tracking-widest bg-dark w-full py-5 text-center tracking-wider'>
                                    {navItem.name}
                                </li>

                            </NavLink>

                        )
                    }
                    else {
                        return (
                            <NavLink 
                                className='w-full hover:bg-dark bg-dark2 text-offWhite transition' 
                                onClick={navItem.goTo}
                                >

                                <li className='tracking-widest w-full py-5 text-center tracking-wider'>
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