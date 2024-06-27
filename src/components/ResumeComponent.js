import { React, useRef } from 'react';
import resumeImg from '../assets/resume-png.png';
import resumePdf from '../assets/DavidWilliford-Resume.pdf';
import { useInView } from 'framer-motion';


export const ResumeComponent = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true, margin: "-100px"})

    return (
        <div id='Resume' 
        className='  font-Montserrat 2xl:px-48 px-5 md:px-20 mt-20 md:mt-60 md:min-h-screen
                     flex items-center justify-center overflow-x-hidden
                     text-offWhite'
        >

         <div 
             className='flex flex-col md:flex-row'
             ref={ref}
         >


             <div
                 id='text-section'
                 className='md:pr-20 flex flex-col justify-center'
                 >
                     <h1 
                        className='font-Gloock text-offWhite text-5xl md:text-8xl mb-10'
                        style={{
                            transform: isInView ? "none" : "translateY(100px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 1s"
                          }}
                        >
                         My Resume
                     </h1>

                     <p 
                        className='text-xl'
                        style={{
                            transform: isInView ? "none" : "translateY(100px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 1.5s"
                          }}
                        >
                         Feel free to download my resume. If you have any further questions, please email me at <span className='text-orange-300'>d9899w@gmail.com</span>, or use the contact form above. It was a pleasure having you, thanks for stopping by!
                     </p>
                    
                    <div
                        style={{
                            opacity: isInView ? 1 : 0,
                            transition: "all 1.5s",
                            transitionDelay: "1.5s"
                        }}
                        >
                        <a href={resumePdf} download>
                            <button 
                                type='submit'
                                className='
                                        w-full md:w-1/2 font-Montserrat bg-dark2 text-md
                                        rounded-lg text-center py-3 my-20 md:my-10 
                                        hover:bg-neutral-300 hover:text-dark transition-all'
                                >
                                DOWNLOAD RESUME
                            </button>
                        </a>

                    </div>


                </div>
                
                <img 
                    src={resumeImg} 
                    alt='my resume' 
                    className='md:h-[40rem] rounded-sm'
                 />
         </div>
   </div>
  
    );
  }