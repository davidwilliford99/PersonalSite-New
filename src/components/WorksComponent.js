import { React, useRef } from 'react';
import { useInView } from 'framer-motion';

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
import junitLogo from './../assets/junit.png';
import typescriptLogo from './../assets/typescript.png';


export const WorksComponent = () => {


    const ref = useRef(null)
    const isInView = useInView(ref, {margin: '-100px', once: true})

    const familiarWith = [
        {
            name: "React", image: reactLogo
        },
        {
            name: "Java", image: javaLogo
        },
        {
            name: "Spring Boot", image: springLogo
        },
        {
            name: "Tailwind", image: tailwindLogo
        },
        {
            name: "SQL", image: mysqlLogo
        },
        {
            name: "Cloud Computing", image: awsLogo
        },
        {
            name: "Github", image: githubLogo
        },
        {
            name: "Angular", image: angularLogo
        },
        {
            name: "C/C++", image: cLogo
        },
        {
            name: "Python", image: pythonLogo
        },
        // {
        //     name: "Junit", image: junitLogo
        // },
        {
            name: "Typescript", image: typescriptLogo
        },
    ]


    return (

        <div className='font-Montserrat bg-dark 2xl:px-48 z-0'>


            {/* "Exeprience With" Section */}

            <div 
                id='experience-with'
                className='flex flex-col px-5 md:px-20 mt-40 md:mt-40'
                ref={ref}
                style={{
                    opacity: isInView ? 1 : 0,
                    transition: "all 1s",
                }}
            >
                <h1 
                    className='font-Roboto text-lg md:text-2xl md:tracking-widest text-offWhite'

                    >
                        Some technologies that I am comfortable with ... 
                    </h1>

                <ul className='flex flex-wrap gap-5 mt-10'>
                    {
                        familiarWith.map((tech) => {
                            return (
                            <li className='flex items-center justify-center bg-dark2 p-1 md:p-2 rounded-lg'>
                                <img src={tech.image} alt="tech logo" className='h-6 md:h-8'/>
                                <h1 className='text-center text-lg md:text-xl text-offWhite mx-5'>{tech.name}</h1>
                            </li>
                            )
                        })
                    }
                </ul>


            </div>
        </div>
    );
}