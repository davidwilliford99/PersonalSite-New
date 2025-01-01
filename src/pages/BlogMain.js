import { React, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'framer-motion';


export const BlogMain = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, {once: true, margin: "-100px"})

  return (
      <div id='Thank-You' 
      className='  font-Montserrat 2xl:px-48 px-5 py-14 md:px-20 md:min-h-screen
                   flex items-center justify-center overflow-x-hidden
                   text-offWhite'
      >

        Herro

      </div>

  );
}