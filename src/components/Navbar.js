import { useInView } from 'framer-motion';
import { React, useRef } from 'react';
import { Link } from 'react-router-dom';


export const Navbar = () => {


    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    
    /**
     * List of navbar items 
     */
    const navItems = [
        {
            name: "Welcome", url: "", logo: "", selected: false
        },
        {
            name: "Works", url: "", logo: "", selected: true
        },
        {
            name: "About", url: "", logo: "", selected: false
        },
        {
            name: "Contact", url: "", logo: "", selected: false
        },
        {
            name: "Resume", url: "", logo: "", selected: false
        },

    ];

    return (
      <div 
            id='Navbar' 
            className='fixed w-full font-Montserrat 2xl:px-48
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

                    if(navItem.selected) {
                        return (
                            <Link className='w-full hover:text-orange-300 text-offWhite transition'>
                                <li className='font-semibold font-Roboto tracking-widest bg-dark w-full py-5 text-center tracking-wider'>
                                    {navItem.name}
                                </li>
                            </Link>

                        )
                    }
                    else {
                        return (
                            <Link className='w-full hover:bg-dark bg-dark2 text-offWhite transition'>
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