import { useInView } from 'framer-motion';
import { React, useRef } from 'react';
import { Link } from 'react-router-dom';


export const Navbar = (props) => {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    
    /**
     * List of navbar items 
     */
    const navItems = [
        {
            name: "Welcome", url: "", logo: "", isCurrent: props.introInView
        },
        {
            name: "Works", url: "", logo: "", isCurrent: props.worksInView
        },
        {
            name: "About", url: "", logo: "", isCurrent: props.aboutInView
        },
        {
            name: "Contact", url: "", logo: "", isCurrent: props.contactInView
        },
        {
            name: "Resume", url: "", logo: "", isCurrent: props.resumeInView
        },

    ];

    return (
      <div 
            id='Navbar' 
            className='bg-dark fixed w-full font-Montserrat 2xl:px-48
                       flex justify-center items-center z-10'
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
                            <Link 
                                className='w-full hover:text-orange-300 text-offWhite transition' 
                                onClick={() => props.setLinkClicked(navItem.name)}
                                >

                                <li className='font-semibold font-Roboto tracking-widest bg-dark w-full py-5 text-center tracking-wider'>
                                    {navItem.name}
                                </li>

                            </Link>

                        )
                    }
                    else {
                        return (
                            <Link 
                                className='w-full hover:bg-dark bg-dark2 text-offWhite transition' 
                                onClick={() => props.setLinkClicked(navItem.name)}
                                >

                                <li className='font-semibold font-Roboto tracking-widest w-full py-5 text-center tracking-wider'>
                                    {navItem.name}
                                </li>
                                
                            </Link>
                        )
                    }

                })
            }
        </ul>
  
      </div>
  
    );
  }