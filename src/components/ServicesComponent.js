import { React, useRef, useState } from 'react';
import { useInView, motion, AnimatePresence } from 'framer-motion';

// experience with logos 
import reactLogo from './../assets/react.png';
import javaLogo from './../assets/java.png';
import springLogo from './../assets/spring.png';
import tailwindLogo from './../assets/tailwind.png';
import mysqlLogo from './../assets/mysql.png';
import awsLogo from './../assets/aws.png';
import githubLogo from './../assets/github.png';
import angularLogo from './../assets/angular.png';
import cLogo from './../assets/c++.png';
import pythonLogo from './../assets/python.png';
import shopifyLogo from './../assets/shopify.png';
import typescriptLogo from './../assets/typescript.png';

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

export const ServicesComponent = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: '-100px', once: true });
    const [showPlans, setShowPlans] = useState({}); // State to track visibility of plans per service

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
                    description: "A simple website build (1-3 pages), using basic components and industry standard tools.",
                    whoItsFor: [
                        "Small businesses",
                        "Personal sites",
                        "Portfolios",
                        "Startups with limited budgets and straightforward needs"
                    ],
                    includes: [
                        "Template customization",
                        "Basic SEO",
                        "Responsive design",
                        "Contact forms",
                        "Basic integrations (e.g., Google Analytics, Calendly Scheduling)"
                    ]
                },
                {
                    title: "Ecommerce Store Build",
                    logo: webdev4,
                    description: "Let's build you a professional ecommerce store! This will set you up to sell products online through Shopify!",
                    whoItsFor: [
                        "Businesses focusing on online retail",
                        "Companies needing a robust and easy-to-manage platform"
                    ],
                    includes: [
                        "Theme customization",
                        "Product setup",
                        "Payment gateway integration",
                        "Basic SEO",
                        "Essential apps/plugins configuration"
                    ]
                },
                {
                    title: "Headless Ecommerce Store",
                    logo: webdev1,
                    description: "Also an ecommerce build, but with a completely custom frontend. Greatly increasing website performance and customization.",
                    whoItsFor: [
                        "Businesses desiring more control over the user experience.",
                        "Companies looking to leverage Shopify’s backend, without being locked into a Shopify template."
                    ],
                    includes: [
                        "Custom React-based front-end",
                        "Integration with Shopify backend",
                        "API development",
                        "Performance optimization",
                        "SEO Optimization"
                    ]
                },
                {
                    title: "Full Custom Build",
                    logo: webdev3,
                    whoItsFor: [
                        "Businesses needing fully customized solutions",
                        "Companies with specific requirements and functionalities",
                        "Those relying mainly on internet traffic for marketing and customer acquisition."
                    ],
                    includes: [
                        "Custom front-end design",
                        "Backend development",
                        "Database setup",
                        "Cloud hosting configuration",
                        "Ongoing maintenance"
                    ]
                }
            ]
        },
        {
            title: "Website Maintenance & Management",
            logo: maintenance3,
            cta: "Upgrade your Site",
            description: [
                "Anything from basic content changes to advanced security and performance optimizations.",
                "We offer a range of website upgrade and maintenance services.",
                "Custom upgrades per owner request.",
            ],
            plans: [
                {
                    title: "Basic Website Updates & Support Plan",
                    logo: maintenance1,
                    whoItsFor: [
                        "Small websites with minimal update needs"
                    ],
                    includes: [
                        "Direct, on-call support with quick response times",
                        "2-5 hours of updates per month",
                        "Basic security monitoring",
                    ]
                },
                {
                    title: "Advanced Website Updates & Support Plan",
                    logo: maintenance2,
                    whoItsFor: [
                        "Ecommerce sites",
                        "High-traffic websites requiring frequent updates"
                    ],
                    includes: [
                        "10-20 hours of updates per month",
                        "Advanced security monitoring",
                        "Performance optimization",
                        "Direct, on-call support with quick response times",
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
                "We ensure fast load times and smooth navigation for your users.",
                "Optimize resources, enhance UX and increase SEO with faster loading."
            ],
            plans: [
                {
                    title: "Basic Performance Upgrade Plan",
                    logo: performance2,
                    whoItsFor: [
                        "Small websites with minor performance issues"
                    ],
                    includes: [
                        "Page speed analysis",
                        "Image optimization",
                        "CMS utilization",
                        "Basic caching setup",
                        "Minification of CSS, JavaScript, and HTML"
                    ]
                },
                {
                    title: "Advanced Performance Upgrade Plan",
                    logo: performance3,
                    whoItsFor: [
                        "Ecommerce or content-heavy websites requiring significant performance improvements"
                    ],
                    includes: [
                        "All services from basic plan",
                        "In-depth performance analysis",
                        "Server-side optimization",
                        "Advanced database tuning",
                        "Lazy loading and deferred loading",
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
                    whoItsFor: [
                        "Small, local businesses not involved in ecommerce",
                        "Personal sites needing targeted SEO"
                    ],
                    includes: [
                        "On-page SEO optimization",
                        "Content strategy & keyword research",
                        "Meta tags and description enhancement"
                    ]
                },
                {
                    title: "Full Project SEO",
                    logo: seo3,
                    description: "A comprehensive SEO overhaul designed for businesses with a broader reach.",
                    whoItsFor: [
                        "Medium to large businesses",
                        "Companies with an international or multi-location presence"
                    ],
                    includes: [
                        "Complete site audit",
                        "Technical SEO optimization",
                        "On-Page & Off-Page SEO practices",
                        "Content strategy and keyword targeting",
                        "Backlink building and outreach",
                    ]
                },
                {
                    title: "Continuous SEO",
                    logo: seo4,
                    description: "Ongoing SEO support to maintain and improve your site’s ranking over time.",
                    whoItsFor: [
                        "Ecommerce stores",
                        "International businesses selling online",
                        "Businesses focused on long-term SEO strategy"
                    ],
                    includes: [
                        "Regular SEO updates and optimization",
                        "Ongoing keyword research and strategy",
                        "Performance tracking, analytics, and monthly reporting"
                    ]
                }
            ]
        },
        {
            title: "Analytics Integration",
            cta: "Integrate Analytics to Your Site",
            description: [
                "Get insights into how visitors interact with your website.",
                "Integrate advanced analytics tools to track and analyze user behavior.",
                "Turn data into actionable insights to improve your business and marketing decisions."
            ],
            plans: [
                {
                    title: "Basic Analytics Integration Plan",
                    logo: "analytics-integration-logo.png",
                    whoItsFor: [
                        "Small websites or blogs needing standard analytics setup"
                    ],
                    includes: [
                        "Google Analytics setup",
                        "Basic goal tracking",
                        "Integration with CMS or website platform",
                        "Basic dashboard setup"
                    ]
                },
                {
                    title: "Advanced Analytics Integration Plan",
                    logo: "analytics-integration-logo.png",
                    whoItsFor: [
                        "Larger websites or ecommerce platforms with complex tracking needs"
                    ],
                    includes: [
                        "Full Google Analytics and Tag Manager setup",
                        "Advanced ecommerce tracking",
                        "Multi-channel attribution",
                        "Custom Data Analysis Dashboard"
                    ]
                }
            ]
        }
    ];

    return (
        <div className='font-Montserrat bg-dark 2xl:px-48 md:px-20 z-0'>
            <h1 className='font-Gloock mt-40 mb-20 text-4xl md:text-6xl'>How I can grow your business...</h1>

            <div className=''>
                {services.map((service, index) => (
                    <div className='border-t border-orange-200 pt-10' key={index}>
                        <div className='flex justify-center mb-10'>
                            <img className='h-20 text-white' src={service.logo} alt={service.title} />
                        </div>

                        <h3 className='text-4xl mb-5 text-center font-Gloock'>{service.title}</h3>

                        {service.description.map((description, idx) => (
                            <p className='text-center text-neutral-400 font-light' key={idx}>{description}</p>
                        ))}

                        <div className='flex justify-center'>
                            <button
                                onClick={() => togglePlans(index)}
                                className='
                                    my-10 mb-5 py-2 px-6 
                                    border border-orange-200 text-orange-200 rounded-md font-medium 
                                    hover:bg-neutral-300 hover:text-dark transition-all transition'
                            >
                                {showPlans[index] ? 'Hide Plans' : 'View Plans'}
                            </button>
                        </div>

                        <AnimatePresence>
                            {showPlans[index] && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className={`flex w-full justify-between mt-10 border-x border-neutral-700`}
                                >
                                    {service.plans.map((plan, idx) => (
                                        <div
                                            key={plan.title}
                                            className={`
                                                flex-1 px-4 border-neutral-700 text-center flex flex-col
                                                ${idx !== 0 ? 'border-l' : ''}`}
                                        >
                                            <div className='flex justify-center mb-10'>
                                                <img className='h-20 text-white' src={plan.logo} alt={plan.title} />
                                            </div>

                                            <h3 className='text-2xl mb-5 font-Gloock'>{plan.title}</h3>

                                            <ul className=''>
                                                <p className='text-lg font-Gloock text-orange-200'>Tailored For</p>
                                                {plan.whoItsFor.map((who, i) => (
                                                    <li key={i} className='text-sm mb-2 font-light text-neutral-400'>{who}</li>
                                                ))}
                                            </ul>

                                            <p className='text-lg font-Gloock mt-5 text-orange-200'>Includes</p>
                                            {plan.includes.map((include, i) => (
                                                <p key={i} className='text-sm mb-2 font-light text-neutral-400'>{include}</p>
                                            ))}
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
}
