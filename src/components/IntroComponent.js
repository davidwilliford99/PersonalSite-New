import { React } from 'react';
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';

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
    const [currentText, setCurrentText] = useState('');
    const [fullTextIndex, setFullTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const texts = [
        "Web Developer",
        "Software Engineer",
        "Automation Expert",
    ];


    // Typing animation
    useEffect(() => {
        const handleTyping = () => {
            const fullText = texts[fullTextIndex];
            setCurrentText(
                isDeleting
                    ? fullText.substring(0, currentText.length - 1)
                    : fullText.substring(0, currentText.length + 1)
            );
            setTypingSpeed(isDeleting ? 75 : 150);

            if (!isDeleting && currentText === fullText) {
                setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
            } else if (isDeleting && currentText === '') {
                setIsDeleting(false);
                setFullTextIndex((prev) => (prev + 1) % texts.length); // Move to next text
            }
        };

        const typingInterval = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(typingInterval);
    }, [currentText, isDeleting, fullTextIndex, typingSpeed]);


    // prop for scrollingto projects section
    const contactScroll = () => props.contactClickRef.current.scrollIntoView({behavior: "smooth"})

    return (

      <div id='Intro' 
           ref={ref}
           className='  
                    font-Montserrat 2xl:px-48 py-20 lg:py-48 items-center 
                    md:flex-row md:justify-between overflow-x-hidden z-0
                    grid grid-cols-1 lg:grid-cols-4 border-b border-neutral-700
                    px-5 2xl:px-48 md:px-20
                    '
           >

        
        <div 
            id='main-text-section'
            className='
                    flex flex-col text-offWhite md:px-20 lg:px-5 fadeIn
                    px-5 col-span-3 lg:pr-20 border-neutral-700'
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
                            text-white text-4xl md:mt-0
                            '
                style={{
                    opacity: isInView ? 1 : 0,
                    transition: "all 2s",
                    transitionDelay: ""
                }}
                >
                    David Williford, <br/>
                    <span 
                        className="inline-block"
                        style={{
                            opacity: isInView ? 1 : 0,
                            transition: "all 1s",
                            transitionDelay: "2s"
                        }}
                    >
                        {currentText}
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 1 }}
                            className='text-white'
                        >
                            |
                        </motion.span>
                    </span>

            </h1>

            <p 
                className='text-neutral-400 text-md lg:text-xl mt-5'
                style={{
                    opacity: isInView ? 1 : 0,
                    transition: "all 1s",
                    transitionDelay: "3s"
                }}
            >
                I build & manage <span className='text-orange-300'>tailored digital solutions</span>, so your business can grow faster.
            </p>

            <div className='flex buttons gap-2 mb-2'>
                <Link 
                    onClick={contactScroll}
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
                    GET IN TOUCH
                </Link>
            </div>

            <div 
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

                <a href='https://blog.davidwilliford.dev/' target='_blank' rel="noreferrer">
                    <img src={hashnode} alt='github logo' className='h-10 md:hover:rotate-180 transition cursor-pointer'/>
                </a>
            </div>

            
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
  
      </div>
  
    );
}