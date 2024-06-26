import { React } from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

import linkedIn from './../assets/linkedin.png'
import github from './../assets/github.png'
import hashnode from './../assets/hashnode.png'
import { useInView } from 'framer-motion';



export const IntroComponent = (props) => {

    
    const ref = useRef(null)
    const isInView = useInView(ref, {margin: '-100px', once: true})

    // prop for scrollingto projects section
    const worksScroll = () => props.worksClickRef.current.scrollIntoView({behavior: "smooth"})

    return (

      <div id='Intro' 
           className='  
                    font-Montserrat 2xl:px-48 md:min-h-screen flex items-center 
                    flex-col md:flex-row md:justify-between overflow-x-hidden z-0
                        
                    '
           >
        
        <div 
            id='main-text-section'
            className='
                    flex flex-col text-offWhite md:px-20 fadeIn
                    
                    px-5'
            >


            <div 
                id='welcome-text' 
                className='flex items-center justify-center md:justify-start mt-3 md:mt-0'
                style={{
                    opacity: isInView ? 1 : 0,
                    transition: "all 2s"
                  }}
                >

                {/* Line SVG */}
                <svg height="3" width="50">
                    <line x1="0" y1="0" x2="50" y2="0" className='stroke-neutral-300'/>
                </svg>

                <h3 className='text-3xl md:text-xl mx-5 py-6 text-orange-300 tracking-widest'>WELCOME</h3>

                {/* Line SVG  (only appears on mobile)*/}
                <svg height="3" width="50">
                    <line x1="0" y1="0" x2="50" y2="0" className='md:invisible stroke-neutral-300'/>
                </svg>

            </div>


            <h1 
                className=' 
                            font-Gloock md:text-7xl leading-tight
                            2xl:text-8xl
                            
                            text-4xl mt-20 md:mt-0
                            '
                style={{
                    opacity: isInView ? 1 : 0,
                    transition: "all 5s",
                    transitionDelay: "1.5s"
                }}
                ref={ref}
                >
                    I am David Williford, <br/>
                    software developer<br/>
                    and tech enthusiast.
            </h1>

            <div className='buttons flex gap-2'>
                <Link 
                    onClick={worksScroll}
                    className='
                            md:w-1/2 font-Montserrat text-orange-300 bg-dark2 text-md
                            rounded-lg text-center py-3 my-8
                            hover:bg-neutral-300 hover:text-dark transition-all
                            
                            w-full'
                    style={{
                        opacity: isInView ? 1 : 0,
                        transition: "background-color 0.3s, opacity 3s",
                        transitionDelay: "opacity 3s"
                    }}
                    >
                    SEE MY PROJECTS
                </Link>
                <Link 
                    onClick={() => {window.open('https://blog.davidwilliford.dev', '_blank');}}
                    className='
                            md:w-1/2 font-Montserrat text-orange-300 bg-dark2 text-md
                            rounded-lg text-center py-3 my-8
                            hover:bg-neutral-300 hover:text-dark transition-all
                            
                            w-full'
                    style={{
                        opacity: isInView ? 1 : 0,
                        transition: "background-color 0.3s, opacity 3s",
                        transitionDelay: "opacity 3s"
                    }}
                    >
                    VISIT MY BLOG
                </Link>
            </div>

        </div>



        <div 
            id='socials' 
            className='pr-5 md:pr-20 mb-10 flex md:flex-col'
            style={{
                transform: isInView ? "none" : "translateX(200px)",
                opacity: isInView ? 1: 0,
                transition: "all 3s",
                transitionDelay: "2s"
            }}
            >
            
            <a href='https://www.linkedin.com/in/davidwilliford99/' target='_blank' rel="noreferrer">
                <img src={linkedIn} alt='linkedin logo' className='h-16 mt-3 md:h-10 md:mb-5 mx-3 md:hover:rotate-180 transition cursor-pointer'/>
            </a>
            
            <a href='https://github.com/davidwilliford99' target='_blank' rel="noreferrer">
                <img src={github} alt='github logo' className='h-16 mt-3 mb-3 md:h-10 md:mt-5 mx-3 md:hover:rotate-180 transition cursor-pointer'/>
            </a>


        </div>

  
      </div>
  
    );
}