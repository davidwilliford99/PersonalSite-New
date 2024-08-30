import React, { useRef } from 'react';
import { useInView } from 'framer-motion';

// projects screenshots 
import acpScreenshot from './../assets/ACP1.png';
import cmScreenshot from './../assets/CM1.png';
import taScreenshot from './../assets/TextArt1.png';
import pwScreenshot from './../assets/pw1.png';
import ajScreenshot from './../assets/AJI1.png';
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
            description: "Where I write articles related to computer science. I primarily write on the topics of web development, ecommerce and general programming. I primarily log niche bug fixes and features of frameworks/languages I may be using.",
            image: blogScreenshot,
            github: "",
            isLive: true,
            link: "https://blog.davidwilliford.dev"
        },
        {
            name: "CardCraft",
            description: "CardCraft utilizes AI to automatically generate flash card sets based on a PDF file upload. Users can store, edit, or delete these flashcards from their account. Currently not live, but feel free to check the github link!",
            image: ccScreenshot,
            github: "https://github.com/davidwilliford99/CardCraft",
            isLive: false,
            link: "",
            isDemo: false
        },
        {
            name: "SnackMajic Subscription",
            description: "SnackMajic is a subset of Aji.com, which is a store for international snacks. They are both an online ecommerce store and a physical store. For this project, I was able to implement a subscription box service, with many variants and shipping around the globe.",
            image: ajScreenshot,
            github: "",
            isLive: true,
            link: "https://sweetaji.com/pages/subscription-boxes"
        },
        {
            name: "BGC Web Application",
            description: "A non-profit repository for surgeons and various medical professionals, providing an unbiased source of bone grafts. BGC implements features such as PayPal payments, SSL security, and a credit system. This website is live on the url, but is in sandbox mode as we await a black-box testing phase from our client's colleagues.",
            image: bgcScreenshot,
            github: "",
            isLive: true,
            link: "https://bonegraftconsortium.com",
            isDemo: true
        },
        {
            name: "TextArt",
            description: "A simple, fun terminal application with a cyberpunk feel. Used to create, animate and edit text art images. If you would like to give it a shot, visit the github link and download the .exe!.",
            image: taScreenshot,
            github: "https://github.com/davidwilliford99/TextArt",
            isLive: false,
            link: ""
        },
        {
            name: "SteamPulse",
            description: "SteamPulse is an analytics web dashboard designed for Steam users. This platform provides a comprehensive overview of both the Steam library and individual Steam accounts. Key features include viewing friends lists, calculating the value of Steam libraries, showcasing rare achievements, and displaying the most played titles and genres. Additionally, the dashboard offers functionality to explore featured games, search for games by ID, and view related titles.",
            image: steamScreenshot,
            github: "https://github.com/davidwilliford99/SteamAnalytics",
            github2: "https://github.com/davidwilliford99/SteamAnalytics-Server",
            isLive: false,
        },
        {
            name: "MajorStatistics",
            description: "A web application that displays statistics on various undergraduate majors. It started with a dataset from Kaggle, which was then imported into a MySQL database. Then I built a REST API using Java Spring Boot, and eventually added a frontend using React and Tailwind.",
            image: cmScreenshot,
            github: "https://github.com/davidwilliford99/CollegeMajors",
            isLive: false,
            link: ""
        },
        // {
        //     name: "Undergrad Predictions Data Analysis",
        //     description: "A final project for a Big Data Analytics course during my senior year. This analysis is based off of a Kaggle data sheet concerning different universities (USA only) and their region, incomes after graduation, school type etc. Two colleagues and I did a full analysis on this data, as well as Random Forest model to predict mid-career salaries based on school name, school type, school region and undergraduate major.",
        //     image: ugPredScreenshot,
        //     github: "https://github.com/davidwilliford99/UndergradPredictions",
        //     isLive: false,
        // },
        // {
        //     name: "ACP Web App",
        //     description: "A web application I participated on during time at Autonomic Solutions. This was my first work experience on a team of developers, giving a realistic setting of the daily work as a software engineer. This application was meant to create self-healing computing models based off of the autonomic nervous system. Sadly this project has since been delayed. During my contributions, I was primarily frontend using Angular, but I also delved into the backend with Spring Boot before departing.",
        //     image: acpScreenshot,
        //     github: "",
        //     isLive: false,
        //     link: ""
        // },
        // {
        //     name: "Sizzlefish Headless Rebuild",
        //     description: "Rebuild of Sizzlefish.com from the ground up, migrating them from a Shopify theme to a custom headless build. This transition has greatly increased performance and SEO, taking them from $10m to $15m in sales per year.",
        //     image: ajScreenshot,
        //     github: "",
        //     isLive: true,
        //     link: "https://sweetaji.com/pages/subscription-boxes"
        // }
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
                        className='bg-dark2 rounded-xl p-5 w-full'
                        style={{
                            transform: isInView ? `translateY(0px)` : `translateY(${index * -300}px)`,
                            transition: "all 3s",
                            transitionDelay: `${1.5 - index * 0.5}s`
                        }}
                    >
                        <div className='w-full flex flex-col lg:flex-row gap-5'>

                            <img 
                                src={work.image}
                                className='w-full lg:w-1/2 h-auto object-contain'
                                alt='works-logo'
                            />

                            <div>
                                <h1 className='font-Gloock text-2xl my-5 w-full lg:w-1/2'>{work.name}</h1>
                                <p className='text-neutral-300'>{work.description}</p>
                                {work.isDemo && (
                                    <div className='bg-neutral-800 p-2 rounded-xl flex gap-2 text-xs mt-2'>
                                        <p className='text-yellow-500'>&#x25B3;</p>
                                        <p className='text-neutral-400'>This project is still in development</p>
                                    </div>
                                )}
                                <div className='flex gap-3'>
                                    {work.isLive && (
                                        <a 
                                            href={work.link}
                                            target='_blank'
                                            rel="noreferrer"
                                            className='my-5 px-5 py-2 text-dark font-semibold bg-purple-500 rounded-lg hover:bg-neutral-900 transition hover:text-offWhite'
                                        >
                                            See It Live
                                        </a>
                                    )}
                                    {work.github && (
                                        <a 
                                            href={work.github}
                                            target='_blank'
                                            rel="noreferrer"
                                            className='my-5 px-5 py-2 text-dark font-semibold bg-orange-500 rounded-lg hover:bg-neutral-900 transition hover:text-offWhite'
                                        >
                                            Github Repo
                                        </a>
                                    )}
                                    {work.github2 && (
                                        <a 
                                            href={work.github2}
                                            target='_blank'
                                            rel="noreferrer"
                                            className='my-5 px-5 py-2 text-dark font-semibold bg-cyan-500 rounded-lg hover:bg-neutral-900 transition hover:text-offWhite'
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
