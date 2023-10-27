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

                        <p className='text-l md:text-2xl mb-10 md:mb-00'>
                            I am <span className='text-orange-200'>David Williford</span>. I enjoy creating and learning about software, particularly in <span className='text-orange-200'>Ecommerce, Cloud Computing and API development</span>. Working on both front-end and back-end, I am always striving to learn and <span className='text-orange-200'>develop new skills</span> to become a well rounded engineer. My primary experience is mostly in <span className='text-orange-200'>full stack web applications</span>. I also have strong experience in cloud computing, automation, and an <span className='text-orange-200'>engineering / mathematics background</span>.
                        </p>

                    </div>
            </div>
      </div>
  
    );
}