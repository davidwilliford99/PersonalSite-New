import { React, useRef, useState } from 'react';
import { useInView } from 'framer-motion';


export const ContactComponent = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true, margin: '-100px'})
    const [formSubmitted, setFormSubmitted] = useState(false);


    return (

      <div 
          id='About' 
          className='  font-Montserrat 2xl:px-48 px-5 md:px-20 mt-60 min-h-screen
                        flex flex-col overflow-x-hidden text-offWhite'
          ref={ref}
           >

        {/* Contact Title */}

        <div 
            id='welcome-text' 
            className='flex items-center justify-center md:justify-start'
            style={{
                opacity: isInView ? 1 : 0,
                transition: "all 2s"
              }}
            >

            {/* Line SVG */}
            <svg height="3" width="50">
                <line x1="0" y1="0" x2="50" y2="0" className='stroke-neutral-300'/>
            </svg>

            <h3 className='text-2xl md:text-xl mx-5 py-6 text-orange-300 tracking-widest'>CONTACT ME</h3>

            {/* Line SVG  (only appears on mobile)*/}
            <svg height="3" width="50">
                <line x1="0" y1="0" x2="50" y2="0" className='md:invisible stroke-neutral-300'/>
            </svg>

        </div>

            <h3 
                className='text-2xl md:text-6xl text-center md:text-left font-Gloock leading-snug my-6 mb-20'
                style={{
                  transform: isInView ? "none" : "translateY(100px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 1s"
                }}
                >
                All messages are read carfeully and appreciated! I would love to hear from you ... 
            </h3>


        {/* Contact Form */}
        <form 
            action="https://formsubmit.co/WillifordD21@students.ecu.edu" 
            method='POST' 
            className='w-full flex flex-col items-center justify-center'
            ref={ref}
          >
          
          <div className='flex w-full items-center justify-center gap-3' id='name and email'>
            <input type="text" placeholder='Your Name' name="Name" required className='w-full bg-dark border rounded-md p-4 text-white'></input>
            <input type="email" placeholder='Email Address' name="Email" required className='w-full bg-dark border rounded-md p-4 text-white'></input>
            <input type="hidden" name="_captcha" value="false"></input>
            <input type="hidden" name='_next' value='https://davidwilliford99.github.io/PersonalSite-New/#/ThankYou'></input>
          </div>
          <textarea type="text"  rows="5" cols="10" placeholder="Write your message here" name="message" required className='m-3 w-full bg-dark border rounded-md p-4 text-white mb-10'></textarea>
          
          <button 
              type='submit'
              onClick={() => setFormSubmitted(!formSubmitted)}
              className='
                      w-1/2 font-Montserrat text-orange-300 bg-dark2 text-md
                      rounded-lg text-center py-3 my-8
                      hover:bg-neutral-300 hover:text-dark transition-all'
              style={{
                  opacity: isInView ? 1 : 0,
                  transition: "background-color 0.3s, opacity 3s",
                  transitionDelay: "opacity 3s"
              }}
              >
              SEND MESSAGE!
          </button>

        </form>

        
         

      </div>
  
    );
}