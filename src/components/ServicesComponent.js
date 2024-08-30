import { React, useRef, useState } from 'react';
import { useInView, motion, AnimatePresence } from 'framer-motion';

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
    const [showPlans, setShowPlans] = useState({});

    const togglePlans = (index) => {
        setShowPlans((prev) => ({
            ...prev,
            [index]: !prev[index], // Toggle visibility
        }));
    };

    const services = [
        {
            title: "Website Creation",
            logo: webdev5,
            cta: "Build Your Website!",
            description: [
                "Building tailored websites for businesses of all sizes.",
                "All websites are designed mobile-first, responsive, SEO-optimized, and user-friendly.",
                "From small personal sites to large enterprise solutions, I have a solution for you."
            ],
            plans: [
                {
                    title: "Simple Website Build",
                    logo: webdev2,
                    description: "A simple website build (1-3 pages), using basic components and industry-standard tools.",
                    brief: "For small businesses or personal sites needing a quick, effective online presence.",
                    whoItsFor: [
                        "Small businesses",
                        "Portfolios",
                    ],
                    includes: [
                        "Template customization",
                        "Basic SEO",
                        "Responsive design",
                        "Contact forms",
                        "Basic integrations"
                    ]
                },
                {
                    title: "Ecommerce Store",
                    logo: webdev4,
                    description: "Let's build you a professional ecommerce store! This will set you up to sell products online through Shopify!",
                    brief: "Ideal for businesses focusing on online retail and needing a robust, easy-to-manage platform.",
                    whoItsFor: [
                        "Ecommerce",
                        "Small stores",
                    ],
                    includes: [
                        "Theme customization",
                        "Product setup",
                        "Payment gateway",
                        "Basic SEO",
                        "App integrations"
                    ]
                },
                {
                    title: "Headless Ecommerce",
                    logo: webdev1,
                    description: "Also an ecommerce build, but with a completely custom frontend. Greatly increasing website performance and customization.",
                    brief: "For businesses desiring more control over the user experience with a custom frontend.",
                    whoItsFor: [
                        "Ecommerce",
                        "Large stores",
                    ],
                    includes: [
                        "Custom frontend",
                        "Shopify CMS",
                        "Better Performance",
                        "SEO Optimization"
                    ]
                },
                {
                    title: "Full Custom Build",
                    logo: webdev3,
                    description: "Comprehensive, fully customized solutions for businesses with specific needs and high expectations.",
                    brief: "Tailored for businesses needing fully customized solutions with specific requirements.",
                    whoItsFor: [
                        "Saas Products",
                        "Entrepeneurs",
                    ],
                    includes: [
                        "Custom frontend",
                        "Custom backend",
                        "Cloud hosting",
                        "Ongoing maintenance"
                    ]
                }
            ]
        },
        {
            title: "Website Management Services",
            cta: "",
            logo: maintenance3,
            description: [
                "Have a professional manage your website, saving you valuable time every month.",
                "Ensure your website runs smoothly with fast load times and seamless navigation.",
                "Optimize resources, enhance user experience, and boost SEO with expert management."
            ],
            plans: [
                {
                    title: "Basic Website Management",
                    logo: maintenance2,
                    description: "Essential management services to maintain optimal website performance, including regular updates and basic optimization.",
                    brief: "Perfect for small to medium-sized websites that need consistent, reliable upkeep.",
                    whoItsFor: [
                        "Small businesses",
                        "Personal websites",
                        "Portfolio sites"
                    ],
                    includes: [
                        "20 hours/month",
                        "Bug Fixes",
                        "Content Updates",
                        "Performance Updates",
                        "Feature Integration",
                        "SEO updates",
                    ]
                },
                {
                    title: "Advanced Management",
                    logo: maintenance1,
                    description: "Comprehensive management services, including advanced performance tuning and in-depth optimization for high-traffic sites.",
                    brief: "Ideal for content-rich websites needing intensive management and optimization.",
                    whoItsFor: [
                        "Ecommerce sites",
                        "Content-rich websites",
                        "High-traffic blogs"
                    ],
                    includes: [
                        "40 hours/month",
                        "Bug Fixes",
                        "Content Updates",
                        "Performance Updates",
                        "Feature Integration",
                        "SEO updates",
                        "Google Analytics",
                    ]
                }
            ]
        },
        {
            title: "Website Performance Optimization",
            cta: "",
            logo: performance1,
            description: [
                "Improve your website's loading speed and overall performance.",
                "Ensuring fast load times and smooth navigation for your users.",
                "Optimize resources, enhance UX and increase SEO with faster loading."
            ],
            plans: [
                {
                    title: "Basic Performance Upgrades",
                    logo: performance2,
                    description: "Basic upgrades to improve page speed, optimize images, and enhance resource management.",
                    brief: "Ideal for small websites with minor performance issues needing basic optimizations.",
                    whoItsFor: [
                        "Simple websites",
                        "Blogs & Portfolios"
                    ],
                    includes: [
                        "Speed analysis",
                        "Image optimization",
                        "CMS utilization",
                        "Caching",
                        "Minification"
                    ]
                },
                {
                    title: "Advanced Performance Upgrades",
                    logo: performance3,
                    description: "Comprehensive performance improvements including server-side optimization and advanced database tuning.",
                    brief: "Best for complex sites requiring significant performance enhancements.",
                    whoItsFor: [
                        "Ecommerce",
                        "Content-Heavy sites"
                    ],
                    includes: [
                        "Speed analysis",
                        "Image optimization",
                        "CMS utilization",
                        "Caching",
                        "Minification",
                        "Backend optimization",
                        "Lazy/deferred loading",
                    ]
                }
            ]
        },
        {
            title: "SEO Optimization",
            cta: "Boost Your Search Visibility!",
            logo: seo1,
            description: [
                "Enhance your website’s visibility on search engines.",
                "Tailored SEO strategies designed for businesses of all sizes.",
                "Improve search rankings, increase organic traffic, and drive more conversions."
            ],
            plans: [
                {
                    title: "Per Page SEO",
                    logo: seo2,
                    description: "Focused SEO improvements on individual key pages, perfect for small businesses.",
                    brief: "Great for small, local businesses or personal sites needing targeted SEO.",
                    whoItsFor: [
                        "Local Business",
                        "Portfolios",
                        "Limited Budgets"
                    ],
                    includes: [
                        "On-page SEO",
                        "Content strategy",
                        "keyword research",
                        "Meta tags",
                        "Description tailoring"
                    ]
                },
                {
                    title: "Full Site SEO",
                    logo: seo3,
                    description: "A comprehensive SEO overhaul designed for businesses with a broader reach.",
                    brief: "Tailored to businesses and companies with high needs for online presence.",
                    whoItsFor: [
                        "Ecommerce",
                        "Wide Reach",
                        "International"
                    ],
                    includes: [
                        "Full site audit",
                        "Technical SEO",
                        "On & Off-Page SEO",
                        "Content strategy",
                        "Keyword research",
                        "Backlinks",
                    ]
                },
                {
                    title: "Continuous SEO",
                    logo: seo4,
                    description: "Ongoing SEO support to maintain and improve your site’s ranking over time.",
                    brief: "Ideal for ecommerce stores or businesses focused on long-term SEO strategy.",
                    whoItsFor: [
                        "Ecommerce",
                        "International",
                        "Wide Reach"
                    ],
                    includes: [
                        "SEO Updates",
                        "Continous Support",
                        "Ongoing strategy",
                        "Performance tracking", 
                        "analytics",
                        "monthly reporting"
                    ]
                }
            ]
        },
        {
            title: "Analytics Integration",
            logo: analytics3,
            cta: "Integrate Analytics to Your Site",
            description: [
                "Get insights into how visitors interact with your website.",
                "Integrate advanced analytics tools to track and analyze user behavior.",
                "Turn data into actionable insights to improve your business and marketing decisions."
            ],
            plans: [
                {
                    title: "Basic Analytics Integration",
                    logo: analytics1,
                    description: "Set up Google Analytics with basic tracking and integration with your website or CMS.",
                    brief: "Suitable for small websites or blogs needing standard analytics setup.",
                    whoItsFor: [
                        "Small websites",
                        "Blogs",
                        "Portfolios",
                        "Ecommerce"
                    ],
                    includes: [
                        "Google Analytics",
                        "Goal tracking",
                        "CMS Integration",
                        "Basic dashboard"
                    ]
                },
                {
                    title: "Full Analytics Integration",
                    logo: analytics2,
                    description: "Full analytics integration with advanced tracking, custom dashboards, and multi-channel attribution.",
                    brief: "Best for websites & platforms requiring detailed tracking and analysis.",
                    whoItsFor: [
                        "International",
                        "Large Sites",
                        "Ecommerce"
                    ],
                    includes: [
                        "Google Analytics setup",
                        "Tag Manager",
                        "Advanced tracking",
                        "Multi-channel",
                        "Custom Dashboard"
                    ]
                }
            ]
        }
    ];
    

    return (
        <div className='font-Montserrat bg-dark px-5 2xl:px-48 md:px-20 z-0'>
            <motion.h1 
                className='font-Gloock text-center mt-40 mb-20 text-4xl md:text-6xl'
                initial={{ opacity: 0, x: -500 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 2 }}
            >
                How I can grow your business
            </motion.h1>

            <div className='' ref={ref}>
                {services.map((service, index) => {

                    return (
                        <div className='border-b mt-10 border-neutral-700 pb-10' key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5 }}
                                className='flex justify-center mb-10'
                            >
                                <img className='text-white h-20' src={service.logo} alt={service.title} />
                            </motion.div>

                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className='text-4xl mb-5 text-center font-Gloock'
                            >
                                {service.title}
                            </motion.h3>

                            {service.description.map((description, idx) => (
                                <motion.p
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                                    className='text-center text-neutral-400 text-sm mb-2 md:text-md font-light'
                                >
                                    {description}
                                </motion.p>
                            ))}

                            <div className='flex justify-center'>
                                <button
                                    onClick={() => togglePlans(index)}
                                    className='
                                        my-10 mb-5 py-2 px-6 
                                        border border-orange-200 text-orange-200 rounded-md font-medium 
                                        hover:bg-neutral-300 hover:text-dark transition-all transition'
                                >
                                    {showPlans[index] ? 'Hide Options' : 'View Options'}
                                </button>
                            </div>

                            <AnimatePresence>
                                {showPlans[index] && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.5 }}
                                        className={`grid grid-cols-2 lg:flex lg:flex-row flex-col w-full justify-between my-20 md:border-x gap-y-20 border-neutral-700`}
                                    >
                                        {service.plans.map((plan, idx) => (
                                            <div
                                                key={plan.title}
                                                className={`
                                                    mt-0 flex-1 px-2 lg:px-4 border-neutral-700 text-center flex flex-col flex-grow items-stretch
                                                    ${idx !== 0 ? 'border-l' : ''}
                                                `}
                                            >
                                                <div className='flex justify-center mb-10'>
                                                    <img className='text-white h-20' src={plan.logo} alt={plan.title} />
                                                </div>

                                                <h3 className='text-xl md:text-2xl mb-5 font-Gloock'>{plan.title}</h3>
                                                <p className='text-neutral-400 text-sm mb-10'>{plan.brief}</p>

                                                {/* <ul className='mb-10'>
                                                    <p className='text-lg mb-2 font-Gloock text-orange-200'>Recommended For</p>
                                                    {plan.whoItsFor.map((who, i) => (
                                                        <li key={i} className='text-sm mb-2 font-light text-neutral-400'>{who}</li>
                                                    ))}
                                                </ul> */}

                                                <ul className=''>
                                                    <p className='text-lg font-Gloock mb-2 text-orange-200'>Includes</p>
                                                    {plan.includes.map((include, i) => (
                                                        <li key={i} className='text-sm mb-2 font-light text-neutral-400'>{include}</li>
                                                    ))}
                                                </ul>

                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    )
                    
                })}
            </div>
        </div>
    );
}
