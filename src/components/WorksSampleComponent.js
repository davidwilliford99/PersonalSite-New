import { React, useRef } from 'react';
import { useInView } from 'framer-motion';

// projects screenshots 
import acpScreenshot from './../assets/ACP1.png';
import cmScreenshot from './../assets/CM1.png';
import taScreenshot from './../assets/TextArt1.png';
import pwScreenshot from './../assets/pw1.png';

export const WorksSamplesComponent = () => {


    const ref = useRef(null)
    const isInView = useInView(ref, {margin: '-100px', once: true})


    const worksSamples =[
        {
            name: "MajorStatistics",
            description: "A web app that displays statistics on various undergraduate majors.",
            image: cmScreenshot
        },
        {
            name: "My Portfolio Site",
            description: "This site is made entirely from scratch using React and Tailwind.",
            image: pwScreenshot
        },
        {
            name: "ACP Web App",
            description: "A web application I worked on during my time at Autonomic Solutions",
            image: acpScreenshot
        },
        {
            name: "TextArt",
            description: "C/C++ terminal application used to create, animate and edit text art images.",
            image: taScreenshot
        },

    ]

    return (

        <div className='font-Montserrat bg-dark px-20 2xl:px-48 mt-72 text-offWhite z-0'>

            <div 
                id='welcome-text' 
                className='flex items-center'
                ref={ref}
                style={{
                    opacity: isInView ? 1 : 0,
                    transition: "all 2s"
                  }}
                >

                {/* Line SVG */}
                <svg height="3" width="50">
                    <line x1="0" y1="0" x2="50" y2="0" className='stroke-neutral-300'/>
                </svg>
                  
                <h3 className='text-xl ml-5 py-6 text-orange-300 tracking-widest'>MY WORKS</h3>
            </div>

            <h3 
                className='text-6xl font-Gloock leading-snug my-6 mb-20'
                style={{
                    opacity: isInView ? 1 : 0,
                    transition: "all 3s"
                }}
                >
                All of my projects are all available on Github, feel free to check them out!
            </h3>

            {/* My works examples are hardcoded since every animation must be a different delay */}
            <ul 
                className='flex flex-col md:flex-row gap-5'
            >

                {/* Major Statistics */}
                <li 
                    className='bg-dark2 rounded-xl p-5 flex flex-col justify-center items-center w-80'
                    style={{
                        transform: isInView ? `translateX(0px)` : `translateX(-800px)` ,
                        transition: "all 3s",
                        transitionDelay: '1.5s'
                    }}
                    >

                    <img 
                        src={worksSamples[0].image}
                        className='h-28'
                        alt='works-logo'
                    />
                    
                    <h1 className='font-Gloock text-center text-2xl my-5'>{worksSamples[0].name}</h1>
                    <p className='text-center'>{worksSamples[0].description}</p>
                    <button 
                        type='button'
                        className=' my-5 px-5 py-2 text-dark font-semibold 
                                    bg-purple-500 rounded-lg 
                                    hover:bg-neutral-900 transition hover:text-offWhite'
                        >
                            Learn More!
                    </button>
                </li>

                {/* Personal Website */}
                <li 
                    className='bg-dark2 rounded-xl p-5 flex flex-col justify-center items-center w-80'
                    style={{
                        transform: isInView ? `translateX(0px)` : `translateX(-1100px)` ,
                        transition: "all 3s",
                        transitionDelay: '1s'
                    }}
                    >

                    <img 
                        src={worksSamples[1].image}
                        className='h-28'
                        alt='works-logo'
                    />
                    <h1 className='font-Gloock text-center text-2xl my-5'>{worksSamples[1].name}</h1>
                    <p className='text-center'>{worksSamples[1].description}</p>
                    <button 
                        type='button'
                        className=' my-5 px-5 py-2 text-dark font-semibold 
                                    bg-purple-500 rounded-lg 
                                    hover:bg-neutral-900 transition hover:text-offWhite'
                        >
                            Learn More!
                    </button>
                </li>

                {/* ACP */}
                <li 
                    className='bg-dark2 rounded-xl p-5 flex flex-col justify-center items-center w-80'
                    style={{
                        transform: isInView ? `translateX(0px)` : `translateX(-1500px)` ,
                        transition: "all 3s",
                        transitionDelay: '0.5s'
                    }}
                    >

                    <img 
                        src={worksSamples[2].image}
                        className='h-28'
                        alt='works-logo'
                    />
                    <h1 className='font-Gloock text-center text-2xl my-5'>{worksSamples[2].name}</h1>
                    <p className='text-center'>{worksSamples[2].description}</p>
                    <button 
                        type='button'
                        className=' my-5 px-5 py-2 text-dark font-semibold 
                                    bg-purple-500 rounded-lg 
                                    hover:bg-neutral-900 transition hover:text-offWhite'
                        >
                            Learn More!
                    </button>
                </li>

                {/* TextArt */}
                <li 
                    className='bg-dark2 rounded-xl p-5 flex flex-col justify-center items-center w-80'
                    style={{
                        transform: isInView ? `translateX(0px)` : `translateX(-2000px)` ,
                        transition: "all 3s",
                        transitionDelay: '0s'
                    }}
                    >

                    <img 
                        src={worksSamples[3].image}
                        className='h-28'
                        alt='works-logo'
                    />
                    <h1 className='font-Gloock text-center text-2xl my-5'>{worksSamples[3].name}</h1>
                    <p className='text-center'>{worksSamples[3].description}</p>
                    <button 
                        type='button'
                        className=' my-5 px-5 py-2 text-dark font-semibold 
                                    bg-purple-500 rounded-lg 
                                    hover:bg-neutral-900 transition hover:text-offWhite'
                        >
                            Learn More!
                    </button>
                </li>

            </ul>

        </div>
    );
}


