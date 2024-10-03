import { React, useRef, useState } from 'react';
import { useInView } from 'framer-motion';


export const ContactComponent = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true, margin: '-100px'})
    const [formSubmitted, setFormSubmitted] = useState(false);


    return (

      <div 
          id='About' 
          className='  
            font-Montserrat 2xl:px-48 px-5 md:px-20 my-48
            flex flex-col overflow-x-hidden text-offWhite pb-20'
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
                className='text-2xl md:text-6xl text-center md:text-left font-Gloock leading-snug mt-6'
                style={{
                  transform: isInView ? "none" : "translateY(100px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 1s"
                }}
                >
                Feel free to ask any questions!
            </h3>

            <p 
                className='text-lg md:text-xl text-center text-neutral-400 md:text-left leading-snug mt-2'
                style={{
                  transform: isInView ? "none" : "translateY(100px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 1s"
                }}
                >
                Click the button in the bottom right to book a free 1-on-1 consultation.
            </p>

            <p 
                className='text-lg md:text-xl text-center text-neutral-400 md:text-left leading-snug mt-2 '
                style={{
                  transform: isInView ? "none" : "translateY(100px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 1s"
                }}
                >
                Email me <a className='text-orange-300' href="mailto:contact@davidwilliford.dev">contact@davidwilliford.dev</a>
            </p>


            <p 
                className='text-lg md:text-xl text-center text-neutral-400 md:text-left leading-snug mt-2 mb-10'
                style={{
                  transform: isInView ? "none" : "translateY(100px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 1s"
                }}
                >
                Call or Text <span className='text-orange-300'>(919)-709-5700</span>
            </p>


        {/* Contact Form */}
        <form 
            action="https://formsubmit.co/contact@davidwilliford.dev" 
            method='POST' 
            className='w-full flex flex-col items-center justify-center'
            ref={ref}
          >
          
          <button className='flex w-full items-center justify-center gap-3' id='name and email'>
            <input type="text" placeholder='Your Name' name="Name" className='w-full bg-dark border rounded-md p-4 text-white'></input>
            <input type="email" placeholder='Email Address' name="Email" className='w-full bg-dark border rounded-md p-4 text-white'></input>
            <input type="text" placeholder='Phone Number' name="Phone" className='w-full bg-dark border rounded-md p-4 text-white'></input>
            <input type="hidden" name="_captcha" value="false"></input>
            <input type="hidden" name='_next' value='https://davidwilliford99.github.io/PersonalSite-New/#/ThankYou'></input>
          </button>
          <textarea type="text"  rows="5" cols="10" placeholder="Write your message here" name="message" className='m-3 w-full bg-dark border rounded-md p-4 text-white mb-10'></textarea>
          
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