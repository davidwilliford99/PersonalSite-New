import { React, useRef } from 'react';
import { useInView } from 'framer-motion';
import aboutPhoto from '../assets/aboutPhoto.jpg';
import { Link } from 'react-router-dom';

export const AboutComponent = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    return (
      <div id='About' 
           className='font-Montserrat 2xl:px-48 px-5 md:px-20 mt-40 min-h-screen
                      flex items-center justify-center overflow-x-hidden
                      text-offWhite'>
            <div 
                className='flex flex-col-reverse md:flex-row'
                id='about-me-section'
                ref={ref}
            >
                <img 
                    src={aboutPhoto} 
                    alt='about' 
                    className='md:h-[32rem] rounded-full border-2 border-orange-200 md:rounded-4xl'
                    style={{
                        opacity: isInView ? 1 : 0,
                        transition: "all 2s"
                    }}
                    />

                <div
                    id='text-section'
                    className='px-5 lg:px-20 flex flex-col justify-center text-neutral-400'
                    style={{
                        transform: isInView ? "none" : "translateY(100px)",
                        transition: "all 1s"
                    }}>
                        <h1 className='font-Gloock text-offWhite text-4xl md:text-6xl mb-10'>
                            About Me
                        </h1>

                        <p className='text-lg mb-8'>
                            Throughout my life, I have spent a lot of time on the <span className='text-orange-200'>internet</span>, finding it fascinating how people can connect online, gaining experience in <span className='text-orange-200'>Ecommerce, Web Development, Cloud Computing, Automation and APIs</span>.
                        </p>

                        {/* <h3 className='block text-offWhite text-2xl mb-5'>Qualifications</h3>
                        
                        <p className='block text-sm md:text-md mb-2'>
                            <span className='text-white'>&#x25cf; </span> 
                            Bachelor's degree in <span className='text-orange-200'>Computer Science</span>
                        </p>
                        <p className='block text-sm md:text-md mb-2'>
                            <span className='text-white'>&#x25cf; </span> 
                            Experience as a <span className='text-orange-200'>full-time Web Developer</span>
                        </p>
                        <p className='block text-sm md:text-md mb-2'>
                            <span className='text-white'>&#x25cf; </span> 
                            Multiple years of experience in <span className='text-orange-200'>Web Development</span>
                        </p> */}

                        <Link 
                            onClick={() => {window.open('https://calendly.com/d9899w/1-on-1-remote-consultation', '_blank');}}
                            className='
                                    lg:w-1/2 font-Montserrat text-orange-300 bg-dark2 text-md
                                    rounded-lg text-center py-3 my-8
                                    hover:bg-neutral-300 hover:text-dark transition-all
                                    w-full'
                            style={{
                                opacity: isInView ? 1 : 0,
                                transition: "background-color 0.3s, opacity 3s",
                                transitionDelay: "opacity 3s"
                            }}>
                            Book a Free Consultation
                        </Link>

                    </div>
            </div>
      </div>
    );
}
