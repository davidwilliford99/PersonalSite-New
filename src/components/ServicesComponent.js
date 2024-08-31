import { React, useRef, useState } from 'react';
import { useInView, motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import webdev1 from './../assets/service-icons/webdev1.svg';
import webdev2 from './../assets/service-icons/webdev2.svg';
import webdev3 from './../assets/service-icons/webdev3.svg';
import webdev4 from './../assets/service-icons/webdev4.svg';
import webdev5 from './../assets/service-icons/webdev5.svg';

import maintenance1 from './../assets/service-icons/maintenance1.svg';
import maintenance2 from './../assets/service-icons/maintenance2.svg';
import maintenance3 from './../assets/service-icons/maintenance3.svg';

import performance1 from './../assets/service-icons/performance1.svg';
import performance2 from './../assets/service-icons/performance2.svg';
import performance3 from './../assets/service-icons/performance3.svg';

import seo1 from './../assets/service-icons/seo1.svg';
import seo2 from './../assets/service-icons/seo2.svg';
import seo3 from './../assets/service-icons/seo3.svg';
import seo4 from './../assets/service-icons/seo4.svg';

import analytics1 from './../assets/service-icons/analytics1.svg';
import analytics2 from './../assets/service-icons/analytics2.svg';
import analytics3 from './../assets/service-icons/analytics3.svg';

export const ServicesComponent = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: '-100px', once: true });


    const services = [
        {
            title: "Web Development",
            logo: webdev5,
            description: "Building tailored websites for businesses of all sizes. All websites are responsive, SEO-optimized, and user-friendly."
        },
        {
            title: "Ecommerce",
            logo: webdev4,
            description: "Ecommerce stores for businesses of all sizes. Utilizing robust CMS platforms, I can have you selling online in no time."
        },
        {
            title: "Custom Apps",
            logo: webdev3,
            description: "Have an app idea? Book a 1-on-1 consultation and let's talk about how we can build it together!."
        },
        {
            title: "Business Software",
            logo: maintenance2,
            description: "Let's build custom software tools for you to use within your business. Internal tooling can greatly increase productivity and soften work load."
        },
        {
            title: "Automation",
            logo: analytics3,
            description: "Tired of doing the same manual tasks over and over? Book a free consultation, and let's talk about how I can automate your mundane tasks."
        },
        {
            title: "Web Management",
            logo: maintenance3,
            description: "Have a professional manage your website, saving you valuable time every month. Ensure your site contains fast load times and seamless navigation."
        },
        {
            title: "Performance",
            logo: performance1,
            description: "Improve your website/app loading speed and overall performance. Ensuring fast load times and smooth navigation for your users."
        },
        {
            title: "SEO",
            logo: seo1,
            description: "Enhance your website’s visibility on search engines. Tailored SEO strategies designed for businesses of all sizes."
        },
        {
            title: "Analytics",
            logo: performance3,
            description: "Get insights into how visitors interact with your website. Integrate advanced analytics tools to track and analyze user behavior."
        }
    ];
    
    

    return (
        <div className='font-Montserrat bg-dark px-5 2xl:px-48 md:px-20 z-0'>
            <motion.h1 
                className='font-Gloock text-center mt-40 lg:mb-20 text-4xl md:text-6xl'
                initial={{ opacity: 0, x: -500 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 2 }}
            >
                How I can grow your business
            </motion.h1>
    
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3' ref={ref}>
                {services.map((service, index) => {

                    const isRightBorder = (index % 3 !== 2);
    
                    return (
                        <div className='border-b border-neutral-700'>
                            <div 
                                className={`
                                    border-neutral-700 my-5 lg:my-10 p-10
                                    ${isRightBorder && 'lg:border-r'}
                                `} 
                                key={index}
                            >

                                <div className='flex justify-center'>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.5 }}
                                        className='mb-5 flex justify-center items-center bg-neutral-800 h-20 w-20 rounded-full'
                                    >
                                        <img className='text-white h-12' src={service.logo} alt={service.title} />
                                    </motion.div>
                                </div>

        
                                <motion.h3
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className='text-2xl mb-5 text-center font-Gloock'
                                >
                                    {service.title}
                                </motion.h3>
        
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className='text-center text-neutral-400 text-md md:text-md font-light'
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
                        Get In touch!
                </Link>
            </div>

        </div>
    );
    
}
