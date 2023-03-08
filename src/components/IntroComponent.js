import { React } from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

import linkedIn from './../assets/linkedin.png'
import github from './../assets/github.png'
import { useInView } from 'framer-motion';



export const IntroComponent = () => {

    
    const ref = useRef(null)
    const isInView = useInView(ref, {margin: '-100px', once: true})


    return (

      <div id='Intro' 
           className='  font-Montserrat 2xl:px-48 min-h-screen flex items-center 
                        justify-between overflow-x-hidden z-0'
           >
        
        <div 
            id='main-text-section'
            className='flex flex-col text-offWhite px-20 fadeIn'
            >


            <div 
                id='welcome-text' 
                className='flex items-center'
                style={{
                    opacity: isInView ? 1 : 0,
                    transition: "all 2s"
                  }}
                >

                {/* Line SVG */}
                <svg height="3" width="50">
                    <line x1="0" y1="0" x2="50" y2="0" className='stroke-neutral-300'/>
                </svg>

                <h3 className='text-xl ml-5 py-6 text-orange-300 tracking-widest'>WELCOME</h3>

            </div>


            <h1 
                className=' 
                            font-Gloock text-7xl leading-tight
                            2xl:text-8xl'
                style={{
                    opacity: isInView ? 1 : 0,
                    transition: "all 5s",
                    transitionDelay: "1.5s"
                }}
                ref={ref}
                >
                    I am David Williford, <br/>
                    a computer science<br/>
                    student at ECU.
            </h1>

            <Link 
                className='
                        w-1/2 font-Montserrat text-orange-300 bg-dark2 text-md
                        rounded-lg text-center py-3 my-8
                        hover:bg-neutral-300 hover:text-dark transition-all'
                style={{
                    opacity: isInView ? 1 : 0,
                    transition: "background-color 0.3s, opacity 3s",
                    transitionDelay: "opacity 3s"
                }}
                >
                SEE MY PROJECTS
            </Link>
        </div>



        <div 
            id='socials' 
            className='pr-20 mb-10'
            style={{
                transform: isInView ? "none" : "translateX(200px)",
                opacity: isInView ? 1: 0,
                transition: "all 3s",
                transitionDelay: "2s"
            }}
            >
            
            <a href='https://www.linkedin.com/in/davidwilliford99/' target='_blank' rel="noreferrer">
                <img src={linkedIn} alt='linkedin logo' className='h-10 mb-5 hover:rotate-180 transition cursor-pointer'/>
            </a>
            
            <a href='https://github.com/davidwilliford99' target='_blank' rel="noreferrer">
                <img src={github} alt='github logo' className='h-10 mt-5 hover:rotate-180 transition cursor-pointer'/>
            </a>


        </div>

  
      </div>
  
    );
}