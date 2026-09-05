import { React, useRef, useState } from 'react';
import { useInView, motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import webdev3 from './../assets/service-icons/webdev3.svg';
import webdev4 from './../assets/service-icons/webdev4.svg';
import webdev5 from './../assets/service-icons/webdev5.svg';

import maintenance3 from './../assets/service-icons/maintenance3.svg';
import maintenance2 from './../assets/service-icons/maintenance2.svg';
import maintenance1 from './../assets/service-icons/maintenance1.svg';

import analytics3 from './../assets/service-icons/analytics3.svg';

import seo1 from './../assets/service-icons/seo1.svg';

export const ServicesComponent = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: '-100px', once: true });
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const services = [
        {
            title: "Development",
            logo: webdev5,
            description: "With a professional background in software development, I can work on a large variety of different applications."
        },    
        {
            title: "Cloud",
            logo: maintenance1,
            description: "Scalable, secure cloud solutions that save time and reduce costs, ensuring your data is always accessible."
        }, 
        {
            title: "Architecture",
            logo: webdev5,
            description: "Making sure applications and resources scale to multiple users and regions around the world."
        },
        {
            title: "E-commerce",
            logo: webdev4,
            description: "Building & managing e-commerce sites effortlessly, allowing owners to sell more with less work."
        },    
        {
            title: "Maintenance",
            logo: maintenance3,
            description: "Maintaining IT resources. Saving time, fixing bugs & issues, and addressing cybersecurity concerns."
        },
        {
            title: "Automation",
            logo: analytics3,
            description: "If you are tired of doing the same tasks over and over, I can automate your business processes, saving you time."
        },
        {
            title: "Agentic Development",
            logo: maintenance2,
            description: "Set up multiple agents that can work in parallel to solve most engineering problems."
        },
    ];
    
    return (
        <div className='font-Montserrat bg-dark px-5 2xl:px-48 md:px-20 z-0'>
            <motion.h1 
                className='font-Gloock lg:mt-40 mb-8 text-4xl md:text-6xl'
                initial={{ opacity: 0, x: -100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1 }}
            >
                Some things I can do:
            </motion.h1>

    
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5`} ref={ref}>
                {services.map((service, index) => {

                    const isRightBorder = (index % 3 !== 2);
                    const isLastRow = index >= services.length - 2;
    
                    return (
                        <div className={`border bg-dark border-neutral-700 rounded-xl shadow-md shadow-neutral-700`}>
                            <div 
                                className={`
                                    border-neutral-700 p-10
                                `} 
                                key={index}
                            >

                                <div className='flex items-end gap-2'>
                                    <div className='flex justify-center'>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                                            transition={{ duration: 0.5 }}
                                            className='mb-5 flex justify-center items-center bg-neutral-800 h-12 w-12 rounded-full'
                                        >
                                            <img className='text-offWhite h-6' src={service.logo} alt={service.title} />
                                        </motion.div>
                                    </div>

            
                                    <motion.h3
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.5, delay: 0.1 }}
                                        className='text-2xl mb-5 text-left font-Gloock'
                                    >
                                        {service.title}
                                    </motion.h3>
                                </div>
        
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className='text-neutral-400 text-md md:text-md font-light'
                                >
                                    {service.description}
                                </motion.p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
    
}
