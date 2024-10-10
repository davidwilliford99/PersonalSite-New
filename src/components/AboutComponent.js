import { React, useRef } from 'react';
import { useInView } from 'framer-motion';
import aboutPhoto from '../assets/aboutPhoto2.png';
import { Link } from 'react-router-dom';

export const AboutComponent = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    return (
      <div id='About' 
           className='font-Montserrat 2xl:px-48 px-5 md:px-20 py-40
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
                    className='md:h-[32rem]'
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
                            As a former <span className='text-orange-300'>Computer Science student</span> and technology enthusiast, I'm driven by curiosity and a desire to make progress in both my life and the world around me. This passion has led me to specialize in <span className='text-orange-300'>automation, software development, ecommerce, cloud computing, and APIs</span>. I provide services that leverage these technologies to help businesses <span className='text-orange-300'>streamline their operations</span>, <span className='text-orange-300'>increase efficiency</span>, and <span className='text-orange-300'>scale effectively</span>. My goal is to empower companies with custom solutions that free them from manual tasks, allowing them to focus on growth and innovation.
                        </p>


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
