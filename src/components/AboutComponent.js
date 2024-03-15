import { React, useRef } from 'react';
import { useInView } from 'framer-motion';
import aboutPhoto from '../assets/aboutPhoto.jpg';
import { Link } from 'react-router-dom';


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

                        <p className='text-lg md:text-lg mb-8'>
                            Throughout my life, I have spent a lot of time on the <span className='text-orange-200'>internet</span>, finding it fascinating how people can connect online, marveling at it's complexity. This intrigue has lead me to pursuing a <span className='text-orange-200'>Computer Science degree</span> from ECU. I have multiple years of experience in <span className='text-orange-200'>Ecommerce, Frontend Development, Cloud Computing, Automation and API Development/Usage</span>. I am familiar with <span className='text-orange-200'>Low-Level Systems, Computer Architecture and Graphics</span> as well. To describe my work style in 3 words, it would be: <span className='text-orange-200'>organized, focused, detailed</span>. As someone who prioritizes organization, I steadily take notes on progress and future goals for my projects. My current long-term goal is to <span className='text-orange-200'>develop new skills</span> to become a master of the internet.
                        </p>

                        <Link 
                            onClick={() => {window.open('https://davidwilliford.hashnode.dev', '_blank');}}
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
      </div>
  
    );
}