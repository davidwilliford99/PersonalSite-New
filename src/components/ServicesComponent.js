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


    const services = [
        {
            title: "Web Development",
            logo: webdev5,
            description: "Specializing in custom web experiences, I can make you a website that truly can do ANYTHING."
        },        
        {
            title: "Web Upgrades",
            logo: maintenance1,
            description: "Having issues & limitations with your current site? Let's talk about how I can upgrade your current site."
        },
        {
            title: "SEO",
            logo: seo1,
            description: "Make sure your site is visible to search engines, driving more organic traffic and sales."
        },
        {
            title: "Automation",
            logo: analytics3,
            description: "Tired of doing the same tasks over and over? Let's talk about how I can automate your business, saving you time and money."
        },
        {
            title: "E-commerce",
            logo: webdev4,
            description: "Let's build out your online store! Already have a store? Then let's add some automation and custom integrations."
        },
        {
            title: "Web Design",
            logo: webdev5,
            description: "Make your site leave an impact, with an elegant, custom design that matches your brand."
        },
        {
            title: "SaaS",
            logo: maintenance2,
            description: "Have a custom SaaS platform and need a developer? I can provide development services at a fair rate, without needing to hire full-time."
        },
        {
            title: "Web Management",
            logo: maintenance3,
            description: "Have a professional manage your website, saving you valuable time every month."
        },
        {
            title: "Custom Apps",
            logo: webdev3,
            description: "Have an app idea? Book a 1-on-1 consultation and let's talk about how we can build it together!."
        },
    ];
    
    

    return (
        <div className='font-Montserrat bg-dark px-5 2xl:px-48 md:px-20 z-0'>
            <motion.h1 
                className='font-Gloock mt-40 lg:mb-2 text-4xl md:text-6xl'
                initial={{ opacity: 0, x: -100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1 }}
            >
                I can assist you with:
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
            
            <div className='w-full flex justify-center'>
                <Link 
                    onClick={() => {window.open('https://calendly.com/d9899w/1-on-1-remote-consultation', '_blank');}}
                    className='
                            font-Montserrat text-orange-300 bg-dark2 text-md
                            rounded-lg text-center py-3 px-10 mt-8
                            hover:bg-neutral-300 hover:text-dark transition-all'
                    style={{
                        opacity: isInView ? 1 : 0,
                        transition: "background-color 0.3s, opacity 3s",
                        transitionDelay: "opacity 3s"
                    }}
                    >
                        Let's Talk: How I can assist YOU
                </Link>
            </div>

        </div>
    );
    
}
