import { React, useRef } from 'react';
import { useInView } from 'framer-motion';


export const ContactComponent = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    return (

      <div id='About' 
           className='  font-Montserrat 2xl:px-48 px-20 mt-60 min-h-screen
                        flex overflow-x-hidden text-offWhite'
           >

      </div>
  
    );
}