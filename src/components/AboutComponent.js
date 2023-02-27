import { React } from 'react';
import aboutPhoto from '../assets/aboutPhoto.jpg';


export const AboutComponent = () => {

    return (

      <div id='About' 
           className='  font-Montserrat 2xl:px-48 px-20 mt-60 min-h-screen
                        flex items-center justify-center overflow-x-hidden
                        text-offWhite'
           >

            <div 
                className='flex'
                id='about-me-section'
            >
                <img 
                    src={aboutPhoto} 
                    alt='about' 
                    className='h-[32rem] rounded-2xl'/>

                <div
                    id='text-section'
                    className='px-20 flex flex-col justify-center'
                    >
                        <h1 className='font-bold text-6xl mb-10'>
                            About Me
                        </h1>

                        <p className='text-2xl'>
                            I am <span className='text-orange-200'>David Williford</span>. I enjoy creating and learning about software, particularly in <span className='text-orange-200'>Java and React</span>, working on both front-end and back-end. I am always striving to learn and <span className='text-orange-200'>develop new skills</span> to become a more well rounded engineer. My main experience is in <span className='text-orange-200'>full stack web applications using React, Java & MySQL</span>. I also have experience in low level systems, and a <span className='text-orange-200'>strong mathematics background</span>.
                        </p>

                    </div>
            </div>
      </div>
  
    );
}