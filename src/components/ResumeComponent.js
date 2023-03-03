import { React } from 'react';
import resumeImg from '../assets/resume-png.png';
import resumePdf from '../assets/DavidWilliford-Resume.pdf';
import { useInView } from 'framer-motion';


export const ResumeComponent = () => {

    return (
        <div id='Resume' 
        className='  font-Montserrat 2xl:px-48 px-20 my-60 min-h-screen
                     flex items-center justify-center overflow-x-hidden
                     text-offWhite'
        >

         <div 
             className='flex'
             id='about-me-section'
         >


             <div
                 id='text-section'
                 className='pr-20 flex flex-col justify-center'
                 >
                     <h1 className='font-Gloock text-offWhite text-8xl mb-10'>
                         My Resume
                     </h1>

                     <p className='text-xl'>
                         Feel free to download my resume. If you have any further questions, please email me at <span className='text-orange-300'>WillifordD21@students.ecu.edu</span>, or use the contact form above. It was a pleasure having you, thanks for stopping by!
                     </p>

                     <button 
                        type='submit'
                        className='
                                w-1/2 font-Montserrat bg-dark2 text-md
                                rounded-lg text-center py-3 my-10
                                hover:bg-neutral-300 hover:text-dark transition-all'
                        >
                        DOWNLOAD RESUME
                    </button>

                </div>

                <img 
                    src={resumeImg} 
                    alt='my resume' 
                    className='h-[40rem] rounded-sm'
                 />
         </div>
   </div>
  
    );
  }