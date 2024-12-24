import React, { useRef } from 'react';
import { useInView } from 'framer-motion';

// projects screenshots 
import acpScreenshot from './../assets/ACP1.png';
import cmScreenshot from './../assets/CM1.png';
import taScreenshot from './../assets/TextArt1.png';
import pwScreenshot from './../assets/pw1.png';
import sfScreenshot from './../assets/SF1.png';
import bgcScreenshot from './../assets/BGC1.png';
import blogScreenshot from './../assets/Blog-ss.png';
import steamScreenshot from './../assets/SteamAn.png';
import ugPredScreenshot from './../assets/UGpreds.png';
import ccScreenshot from './../assets/CardCraftSS.png';

export const WorksSamplesComponent = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: '-100px', once: true });

    const worksSamples = [
        {
            name: "My Blog",
            description: "Where I write articles related to my expertise. I primarily write about ecommerce based web solutions. I log niche bug fixes and features of frameworks/languages I may be using.",
            image: blogScreenshot,
            features: [
                "Web Development",
                "Ecommerce",
                "Bug Fixes",
                "Programming",
                "Problem Solving"
            ],
            github: "",
            isLive: true,
            link: "https://blog.davidwilliford.dev"
        },
        {
            name: "CardCraft",
            description: "Utilize AI to automatically generate flash cards from PDF notes. Users can store, edit, or delete these flashcards from their account. This was my senior capstone project at ECU.",
            image: ccScreenshot,
            features: [
                "LLM Integration",
                "Google Cloud Platform",
                "Auth",
                "PostgreSQL",
                "Next.Js",
                "Django API"
            ],
            github: "https://github.com/davidwilliford99/CardCraft",
            isLive: false,
            link: "",
            isDemo: false
        },
        {
            name: "Sizzlefish Headless Rebuild",
            description: "An upgraded headless rebuild of Sizzlefish.com (planned to go live in 2025). Taking their frontend to something more scalable and higher-performance was my primary project during my employment here. Contains robusts capabilities including a fill-your-own-box subscription service, product reviews, loyalty & referrals, discounts and more (all of the functionalities they currently have).",
            image: sfScreenshot,
            features: [
                "Shopify APIs",
                "GraphQL",
                "Hydrogen & Oxygen",
                "Recharge Subscriptions",
                "Yotpo",
                "AWS Lambda",
                "Remix",
                "Stripe"
            ],
            github: "",
            isLive: false
        },
        {
            name: "Bone Graft Consortium",
            description: "A non-profit repository to provide medical professionals an unbiased source of bone grafts. Currently undergoing black-box demos from select surgeons and surgical techs.",
            image: bgcScreenshot,
            github: "",
            isLive: true,
            link: "https://bonegraftconsortium.com",
            features: [
                "PostgreSQL",
                "Amazon Web Services",
                "Django",
                "Vanilla React",
                "Paypal Payments API"
            ],
            isDemo: true
        },
        {
            name: "TextArt",
            description: "A simple, just-for-fun terminal application with a cyberpunk feel. Used to create, animate and edit text art images. Utilizes low-level computation, written in C/C++. Visit the github link and download the .exe!.",
            image: taScreenshot,
            github: "https://github.com/davidwilliford99/TextArt",
            features: [
                "C++",
                "Feature-Rich",
                "Terminal-Based GUI",
                "Animation Support",
                "Save/Edit/Upload"
            ],
            isLive: false,
            link: ""
        },
        {
            name: "SteamPulse",
            description: "An analytics web dashboard designed for Steam users. Provides a comprehensive overview of both the Steam library and individual accounts. The analytics and account details go much farther into detail than steam's application.",
            image: steamScreenshot,
            features: [
                "Data Analyitics",
                "SQLite",
                "Next.js",
                "Flask",
                "Steam APIs"
            ],
            github: "https://github.com/davidwilliford99/SteamAnalytics",
            github2: "https://github.com/davidwilliford99/SteamAnalytics-Server",
            isLive: false,
        },
        {
            name: "MajorStatistics",
            description: "Displays statistics on various undergraduate majors. Started as a dataset from Kaggle, then imported into a MySQL database. Afterwards, a REST API using Java Spring Boot and a frontend using React was built.",
            image: cmScreenshot,
            features: [
                "Spring Boot",
                "MySQL",
                "React",
                "Data Analytics",
                "Kaggle Dataset"
            ],
            github: "https://github.com/davidwilliford99/CollegeMajors",
            isLive: false,
            link: ""
        },
        {
            name: "Undergrad Predictions Data Analysis",
            description: "A final project for a Big Data Analytics course during my senior year. This analysis is based off of a Kaggle data sheet concerning different universities (USA only) and their region, incomes after graduation, school type etc. Two colleagues and I did a full analysis on this data, as well as Random Forest model to predict mid-career salaries based on school name, school type, school region and undergraduate major.",
            image: ugPredScreenshot,
            features: [
                "Random Forest",
                "Python",
                "Apache Spark",
                "Jupyter Notebook",
                "Kaggle",
                "pandas",
                "scikit-learn",
                "pyspark",
                "matplotlib"
            ],
            github: "https://github.com/davidwilliford99/UndergradPredictions",
            isLive: false,
        },
        // {
        //     name: "ACP Web App",
        //     description: "A web application I participated on during time at Autonomic Solutions. This was my first work experience on a team of developers, giving a realistic setting of the daily work as a software engineer. This application was meant to create self-healing computing models based off of the autonomic nervous system. Sadly this project has since been delayed. During my contributions, I was primarily frontend using Angular, but I also delved into the backend with Spring Boot before departing.",
        //     image: acpScreenshot,
        //     github: "",
        //     isLive: false,
        //     link: ""
        // },
    ];

    return (
        <div className='font-Montserrat bg-dark px-5 md:px-20 2xl:px-48 mt-52 md:mt-72 text-offWhite z-0 flex flex-col items-center md:items-start'>
            <div 
                id='welcome-text' 
                className='flex items-center justify-center md:justify-start'
                ref={ref}
                style={{
                    opacity: isInView ? 1 : 0,
                    transition: "all 2s"
                }}
            >
                {/* Line SVG */}
                <svg height="3" width="50">
                    <line x1="0" y1="0" x2="50" y2="0" className='stroke-neutral-300'/>
                </svg>
                  
                <h3 className='text-3xl md:text-xl mx-5 py-6 text-orange-300 tracking-widest'>MY WORKS</h3>

                {/* Line SVG  (only appears on mobile)*/}
                <svg height="3" width="50">
                    <line x1="0" y1="0" x2="50" y2="0" className='md:invisible stroke-neutral-300'/>
                </svg>
            </div>

            <h3 
                className='text-3xl md:text-6xl font-Gloock leading-snug my-6 my-20 text-center md:text-left'
                style={{
                    opacity: isInView ? 1 : 0,
                    transition: "all 3s"
                }}
            >
                Here are some samples of my work ...
            </h3>

            {/* My works examples are dynamically generated */}
            <ul className='flex flex-col md:flex-row md:flex-wrap gap-5'>
                {worksSamples.map((work, index) => (
                    <li
                        key={index} 
                        className='w-full py-10 border-t bg-dark border-neutral-700'
                        style={{
                            transform: isInView ? `translateY(0px)` : `translateY(${index * -300}px)`,
                            transition: "all 3s",
                            transitionDelay: `${1.5 - index * 0.5}s`
                        }}
                    >
                        
                        <div className='w-full flex flex-col lg:flex-row-reverse gap-5'>

                            <img 
                                src={work.image}
                                className='w-full lg:w-1/2 h-auto object-contain'
                                alt='works-logo'
                            />

                            <div>
                                <h1 className='font-Gloock text-2xl lg:text-4xl my-5 w-full'>{work.name}</h1>
                                <p className='text-neutral-400'>{work.description}</p>
                                {work.isDemo && (
                                    <div className='bg-neutral-800 p-2 rounded-xl flex gap-2 text-xs mt-2'>
                                        <p className='text-yellow-500'>&#x25B3;</p>
                                        <p className='text-neutral-400'>This project is still in development</p>
                                    </div>
                                )}



                                {work.features && (
                                    <ul className='flex flex-wrap gap-2 py-10'>
                                        {work.features.map((feat) => {
                                        return (
                                            <a className='bg-neutral-800 text-orange-300 text-xs px-5 py-1 rounded-sm'>{feat}</a>
                                        )
                                    })}
                                    </ul>
                                )}


                                <div className='flex gap-3'>
                                    {work.isLive && (
                                        <a 
                                            href={work.link}
                                            target='_blank'
                                            rel="noreferrer"
                                            className='my-5 px-8 py-3 text-dark border border-orange-300 text-orange-300 rounded-3xl hover:border-offWhite transition hover:text-offWhite'
                                        >
                                            See It Live
                                        </a>
                                    )}
                                    {work.github && (
                                        <a 
                                            href={work.github}
                                            target='_blank'
                                            rel="noreferrer"
                                            className='my-5 px-8 py-3 text-dark border border-orange-300 text-orange-300 rounded-3xl hover:border-offWhite transition hover:text-offWhite'
                                        >
                                            Github Repo
                                        </a>
                                    )}
                                    {work.github2 && (
                                        <a 
                                            href={work.github2}
                                            target='_blank'
                                            rel="noreferrer"
                                            className='my-5 px-8 py-3 text-dark border border-orange-300 text-orange-300 rounded-3xl hover:border-offWhite transition hover:text-offWhite'
                                        >
                                            Github Repo 2
                                        </a>
                                    )}
                                </div>
                            </div>

                        </div>
                        
                        
                        
                        
                    </li>
                ))}
            </ul>
        </div>
    );
};
