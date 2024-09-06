import { useInView } from 'framer-motion';
import { React, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

import introImg from './../assets/welcome-mobile.png';
import worksImg from './../assets/works-mobile.png';
import aboutImg from './../assets/about-mobile.png';
import contactImg from './../assets/contact-mobile.png';
import resumeImg from './../assets/resume-mobile.png';


export const MobileNavbar = (props) => {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    const [isOpen, setIsOpen] = useState(false);

    // run these functions from an event handler or an effect to execute scroll 
    const introScroll = () => props.introClickRef.current.scrollIntoView({behavior: "smooth"})   
    const worksScroll = () => props.worksClickRef.current.scrollIntoView({behavior: "smooth"})
    const aboutScroll = () => props.aboutClickRef.current.scrollIntoView({behavior: "smooth"})
    const contactScroll = () => props.contactClickRef.current.scrollIntoView({behavior: "smooth"})
    const servicesScroll = () => props.servicesClickRef.current.scrollIntoView({behavior: "smooth"})

   
    
    /**
     * List of navbar items 
     */
    const navItems = [
        {
            name: "Welcome", url: "", logo: "", isCurrent: props.introInView, goTo: introScroll, image: introImg
        },
        {
            name: "About", url: "", logo: "", isCurrent: props.aboutInView, goTo: aboutScroll, image: aboutImg
        },
        {
            name: "Services", url: "", logo: "", isCurrent: props.servicesInView, goTo: servicesScroll, image: worksImg
        },
        {
            name: "Contact", url: "", logo: "", isCurrent: props.contactInView, goTo: contactScroll, image: contactImg
        },
        {
            name: "Works", url: "", logo: "", isCurrent: props.worksInView, goTo: worksScroll, image: resumeImg
        },

    ];

    return (
        <div className="lg:hidden fixed w-full z-30">
          {/* Hamburger Menu */}
          <div className="fixed w-full flex justify-between items-center px-5 py-3 border-b border-neutral-800 z-30">
            <h1 className="text-neutral-300 text-xl font-Gloock"></h1>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-offWhite focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
    
          {/* Full Screen Menu */}
          <motion.div
            className={`fixed top-0 left-0 w-full h-full bg-neutral-900 flex flex-col items-center justify-center transition-all duration-500 ${
              isOpen ? "visible" : "invisible"
            }`}
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : '-100%' }}
            transition={{ duration: 0.5 }}
          >
            <ul className="flex flex-col items-center space-y-6">
              {navItems.map((navItem, index) => (
                <li
                  key={index}
                  className="text-3xl text-white font-Gloock"
                  onClick={() => {
                    navItem.goTo();
                    setIsOpen(false); // Close the menu after clicking a link
                  }}
                >
                  {navItem.name}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      );
  }