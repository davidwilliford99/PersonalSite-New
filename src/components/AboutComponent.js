import { React, useRef } from 'react';
import { useInView } from 'framer-motion';
import aboutPhoto from '../assets/aboutPhoto.jpg';


export const AboutComponent = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    return (

      <div id='About' 
           className='  font-Montserrat 2xl:px-48 px-5 md:px-20 mt-60 min-h-screen
                        flex items-center justify-center overflow-x-hidden
                        text-offWhite'
           >

            <div 
                className='flex flex-col-reverse md:flex-row'
                id='about-me-section'
                ref={ref}
            >
                <img 
                    src={aboutPhoto} 
                    alt='about' 
                    className='md:h-[32rem] rounded-full md:rounded-2xl'
                    style={{
                        opacity: isInView ? 1 : 0,
                        transition: "all 2s"
                    }}
                    />

                <div
                    id='text-section'
                    className='px-5 md:px-20 flex flex-col justify-center'
                    style={{
                        transform: isInView ? "none" : "translateY(100px)",
                        transition: "all 1s"
                    }}
                    >
                        <h1 className='font-Roboto text-offWhite text-4xl md:text-6xl mb-10'>
                            About me ...
                        </h1>

                        <p className='text-lg md:text-lg mb-10 md:mb-00'>
                            Throughout my life, I have spent a lot of time on the <span className='text-orange-200'>internet</span>, finding it fascinating how people can connect online, and marveling at the compleity of the internet. This intrigue has lead me to obtiain a <span className='text-orange-200'>Computer Science degree</span> from ECU. I now have multiple years of experience in <span className='text-orange-200'>Ecommerce, Frontend Development, Cloud Computing, Automation and API Development</span>. I am also familiar with <span className='text-orange-200'>Low-Level Systems, Computer Architecture and Graphics</span>. Some beneficial traits about myself; I am <span className='text-orange-200'>well organized, self motivated, and enjoy learning</span>. As a natural problem solver, I am knowledgable in diagnosing/resolving bugs within programs and systems. Working on both front-end and back-end, I am always striving to learn and <span className='text-orange-200'>develop new skills</span> to become a well rounded engineer.
                        </p>

                    </div>
            </div>
      </div>
  
    );
}