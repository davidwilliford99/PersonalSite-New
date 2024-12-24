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
            description: "Specializing in custom web experiences, I can make your website do ANYTHING!"
        },    
        {
            title: "Cloud",
            logo: maintenance1,
            description: "Scalable, secure cloud solutions that save time and reduce costs, ensuring your data is always accessible."
        }, 
        {
            title: "Architecture",
            logo: webdev5,
            description: "Making sure your applications scale to multiple users and regions around the world. Ensuring smooth sailing for all levels of traffic."
        },
        {
            title: "E-commerce",
            logo: webdev4,
            description: "Boost or build your e-commerce site effortlessly with custom automation, allowing you to sell more with less work."
        },    
        {
            title: "Maintenance",
            logo: maintenance3,
            description: "Have a professional maintain your website, cloud platform, hosting and more. Saving you valuable time every month."
        },
        {
            title: "SEO",
            logo: seo1,
            description: "With some simple tweaks to your site, I can make sure your site is visible to search engines, driving more organic traffic and sales."
        },   
        {
            title: "Automation",
            logo: analytics3,
            description: "Tired of doing the same tasks over and over? Let's talk about how I can automate your business, saving you time and money."
        },
        {
            title: "SaaS Development",
            logo: maintenance2,
            description: "Have a custom SaaS platform and need a developer? I can provide development services at a fair rate, without needing to hire full-time employees."
        },
        {
            title: "Custom Apps",
            logo: webdev3,
            description: "Have an app idea? Book a 1-on-1 meeting and let's see if we can build it together!"
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
                <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className='
                            font-Montserrat text-orange-300 text-md
                            rounded-lg text-center py-3 px-10 mt-8 bg-neutral-800
                            transition-all flex items-center gap-2'
                    style={{
                        opacity: isInView ? 1 : 0,
                        transition: "background-color 0.3s, opacity 3s",
                        transitionDelay: "opacity 3s"
                    }}
                    >
                        Curate Your Own Custom Service Package
                        <motion.span
                            initial={{ rotate: 0 }}
                            animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            &#9660;
                        </motion.span>
                </button>
            </div>

            {formSubmitted && (
                <p className='text-green-400 text-center mt-5'>Thank you for your request! I'll reach out ASAP about how I can help.</p>
            )}

            <AnimatePresence>
                {isDropdownOpen && (
                    <motion.form 
                        action="https://formsubmit.co/contact@davidwilliford.dev" 
                        method='POST' 
                        className='w-full max-w-screen-sm mx-auto flex flex-col mt-8 px-2 lg:bg-neutral-800 rounded-lg lg:p-8'
                        ref={ref}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className='flex flex-col w-full gap-3 mt-3 lg:p-5 text-offWhite'>
                            <label className='text-2xl text-center'>Select Service(s)</label>
                            <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 my-5'>
                                {services.map((service, index) => (
                                <div key={index} className='flex'>
                                    <input type="checkbox" name="services" value={service.title} className='mr-2'></input>
                                    <label className=''>{service.title}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <input type="text" required placeholder='Name' name="Name" className='w-full bg-dark border rounded-md border-neutral-700 p-4 text-offWhite placeholder-neutral-500'></input>
                            <input type="email" required placeholder='Email' name="Email" className='w-full bg-dark border rounded-md border-neutral-700 p-4 text-offWhite placeholder-neutral-500'></input>
                            <input type="text" placeholder='Phone #' name="Phone" className='w-full bg-dark border rounded-md border-neutral-700 p-4 text-offWhite placeholder-neutral-500'></input>
                            <input type="hidden" name="_captcha" value="false"></input>
                            <input type="hidden" name='_next' value='https://davidwilliford99.github.io/PersonalSite-New/#/ThankYou'></input>
                        </div>
                        <textarea type="text"  rows="5" cols="10" placeholder="Briefly description of your project or business, and what problems you want to fix." name="message" className='mt-2 w-full bg-dark border border-neutral-700 rounded-md p-4 text-white mb-10 placeholder-neutral-500'></textarea>
                        
                        <button 
                            type='submit'
                            onClick={() => {
                                setFormSubmitted(prev => !prev)
                                setIsDropdownOpen(false)
                            }}
                            className='
                                    w-full font-Montserrat text-offWhite bg-orange-500 text-md
                                    rounded-lg text-center py-3
                                    hover:bg-neutral-300 hover:text-dark transition-all'
                            style={{
                                opacity: isInView ? 1 : 0,
                                transition: "background-color 0.3s, opacity 3s",
                                transitionDelay: "opacity 3s"
                            }}
                            >
                            Submit Request
                        </button>
                    </motion.form>
                )}
            </AnimatePresence>

        </div>
    );
    
}
