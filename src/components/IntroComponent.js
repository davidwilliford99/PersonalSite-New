import { React } from 'react';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';

import linkedIn from './../assets/linkedin.png'
import github from './../assets/github.png'
import hashnode from './../assets/hashnode.png'
import custom from './../assets/Custom.svg';
import website from './../assets/Website.svg';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';


import { PopupWidget } from "react-calendly";


export const IntroComponent = (props) => {

    
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const [formSubmitted, setFormSubmitted] = useState(false);

    // prop for scrollingto projects section
    const worksScroll = () => props.worksClickRef.current.scrollIntoView({behavior: "smooth"});


    return (

      <div id='Intro' 
           ref={ref}
           className='  
                    font-Montserrat 2xl:px-48 md:min-h-screen items-center 
                    md:flex-row md:justify-between overflow-x-hidden z-0
                    grid grid-cols-1 lg:grid-cols-4 border-b border-neutral-700
                    '
           >

        
        <div 
            id='main-text-section'
            className='
                    flex flex-col text-offWhite md:px-20 lg:px-5 fadeIn
                    px-5 col-span-3 lg:pr-20 lg:border-r border-neutral-700'
            >


            <div 
                id='welcome-text' 
                className='flex items-center justify-center md:justify-start mt-20 md:mt-0'
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
                            font-Gloock md:text-6xl 2xl:text-7xl leading-tight
                            text-4xl md:mt-0
                            '
                style={{
                    opacity: isInView ? 1 : 0,
                    transition: "all 5s",
                    transitionDelay: "1.5s"
                }}
                >
                    David Williford, <br/>
                    Web & Automation<br/>
                    Expert
            </h1>

            <p 
                className='text-neutral-400 text-md lg:text-xl mt-5'
                style={{
                    opacity: isInView ? 1 : 0,
                    transition: "all 5s",
                    transitionDelay: "1.5s"
                }}
            >
                I help businesses <span className='text-orange-300'>achieve more with fewer resources</span>, giving them more time to focus on growth
            </p>

            <div className='flex buttons gap-2 mb-2'>
                <Link 
                    onClick={worksScroll}
                    className='
                            md:w-1/2 font-Montserrat text-orange-300 bg-dark2 
                            text-xs lg:text-md
                            rounded-md text-center py-3 mt-8
                            hover:bg-neutral-300 hover:text-dark transition-all
                            
                            w-full'
                    style={{
                        opacity: isInView ? 1 : 0,
                        transition: "background-color 0.3s, opacity 3s",
                        transitionDelay: "opacity 3s"
                    }}
                    >
                    CONTACT ME
                </Link>
                <Link 
                    onClick={() => {window.open('https://calendly.com/d9899w/1-on-1-remote-consultation', '_blank');}}
                    className='
                            md:w-1/2 font-Montserrat text-orange-300 bg-dark2
                            text-xs lg:text-md
                            rounded-md text-center py-3 mt-8
                            hover:bg-neutral-300 hover:text-dark transition-all
                            
                            w-full'
                    style={{
                        opacity: isInView ? 1 : 0,
                        transition: "background-color 0.3s, opacity 3s",
                        transitionDelay: "opacity 3s"
                    }}
                    >
                    FREE CONSULTATION
                </Link>
            </div>

            {/* <div 
                id='socials' 
                className='flex justify-center lg:justify-start gap-6 mx-3 my-10 lg:my-5'
                style={{
                    transform: isInView ? "none" : "translateX(200px)",
                    opacity: isInView ? 1: 0,
                    transition: "all 3s",
                    transitionDelay: "2s"
                }}
                >
                
                <a href='https://www.linkedin.com/in/davidwilliford99/' target='_blank' rel="noreferrer">
                    <img src={linkedIn} alt='linkedin logo' className='h-10 md:hover:rotate-180 transition cursor-pointer'/>
                </a>
                
                <a href='https://github.com/davidwilliford99' target='_blank' rel="noreferrer">
                    <img src={github} alt='github logo' className='h-10 md:hover:rotate-180 transition cursor-pointer'/>
                </a>
            </div> */}

            
            {/* Calendly popup link */}
            <div className=''>
                <PopupWidget
                    url="https://calendly.com/d9899w/1-on-1-remote-consultation"
                    /*
                    * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                    * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                    */
                    rootElement={document.getElementById("root")}
                    text="Book a free consultation"
                    textColor="#2c2c2c"
                    color="#fdba74"
                />
            </div>
        </div>


        {/* Contact Form */}
        <motion.div 
            className='p-6 lg:h-full flex flex-col justify-center rounded-md mt-20 md:mt-0 md:mx-20 lg:mx-0 lg:mt-0'
            initial={{ opacity: 0, x: 500 }} // Start off-screen to the right and invisible
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 500 }} // Animate into view only when the element is visible
            transition={{
                opacity: { duration: 3, delay: 3 },
                x: { type: "spring", stiffness: 50, damping: 20, delay: 3 }, // Delay for the animation
            }}
            >

            <div className='flex flex-col'>
                <h3 className='font-Gloock text-2xl text-neutral-300 mb-2'>Tired of being overwhelmed?</h3>
                <p className='py-2 text-neutral-500 text-xs mb-2'>Let's automate your business processes, allowing you to make money while saving time.</p>
            </div>

            <form 
                action="https://formsubmit.co/contact@davidwilliford.dev" 
                method='POST' 
                className='w-full flex flex-col items-center justify-center'
            >
            
                <button className='flex flex-col gap-2 w-full items-center justify-center gap-3' id='name and email'>
                    <input 
                        type="text" 
                        placeholder='Your Name' 
                        name="Name" 
                        className='w-full bg-dark border border-dark2 rounded-md p-3 text-white text-sm'
                    />
                    <input 
                        type="email" 
                        placeholder='Email or Phone #' 
                        name="Email" 
                        className='w-full bg-dark border border-dark2 rounded-md p-3 text-white text-sm'
                    />
                    <input 
                        type="text" 
                        placeholder='Business Name' 
                        name="Business" 
                        className='w-full bg-dark border border-dark2 rounded-md p-3 text-white text-sm'
                    />
                    <input type="hidden" name="_subject" value="Website Contact Form Submission!"></input>
                    <input type="hidden" name="_captcha" value="false"></input>
                    <input type="hidden" name='_next' value='https://davidwilliford99.github.io/PersonalSite-New/#/ThankYou'></input>
                </button>
                
                <button 
                    type='submit'
                    onClick={() => setFormSubmitted(!formSubmitted)}
                    className='
                            w-full font-Montserrat text-dark bg-orange-400 text-md
                            rounded-md text-center py-3 mt-5 mb-5 font-semibold
                            hover:bg-neutral-300 hover:text-dark transition-all'
                    style={{
                        opacity: isInView ? 1 : 0,
                        transition: "background-color 0.3s, opacity 3s",
                        transitionDelay: "opacity 3s"
                    }}
                    >
                    Get Started
                </button>

            </form>
        </motion.div>
  
      </div>
  
    );
}