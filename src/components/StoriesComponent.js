import { React, useRef, useState,  useEffect } from 'react';
import { useInView, motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export const StoriesComponent = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: '-100px', once: true });

    const stories = [
        {
            id: 0,
            title: "Joe's E-Commerce Store",
            client: "Joe runs an e-commerce store selling dog toys.",
            objective: "Joe wants to add a subscription service to his website, allowing customers to select 5-7 different dog toys each month to be shipped to them.",
            solution: [
                "Build and integrate custom subscription service.",
                "Allow customers to handpick monthly items.",
                "Notify Joe to prepare and ship boxes."
            ],
            result: [
                "Consistent, low-effort recurring revenue.",
                "Attracts loyal customers.",
                "Reduces manual work.",
                "Creates scalable income stream."
            ],
            image: "https://images.pexels.com/photos/6169650/pexels-photo-6169650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 1,
            title: "Jeremy’s Auto Repair Shop",
            client: "Jeremy owns multiple automotive repair shops.",
            objective: "Jeremy wants to attract more new customers by simplifying the process of distributing repair estimates.",
            solution: [
                "Build online form for website.",
                "Allow photo uploads and damage details.",
                "Secure login for form details.",
                "Generate and send estimates via email."
            ],
            result: [
                "Increases number of leads.",
                "Ease of obtaining estimates.",
                "Saves time for Jeremy and customers.",
                "Improves customer experience.",
                "Greatly increases revenue."
            ],
            image: "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 2,
            title: "Nathan’s HVAC Service",
            client: "Nathan runs an HVAC repair service with a team that visits clients’ homes.",
            objective: "Nathan is frustrated by the manual scheduling process and frequent miscommunications between clients and his crew.",
            solution: [
                "Develop automated scheduling system.",
                "Describe repair needs and select appliances.",
                "Choose time slots based on crew’s calendar."
            ],
            result: [
                "Fully-automated scheduling system.",
                "Eliminates manual intervention.",
                "Organized daily schedule.",
                "Minimizes downtime and confusion.",
                "Saves hours of time daily."
            ],
            image: "https://images.pexels.com/photos/5463581/pexels-photo-5463581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 3,
            title: "Sarah’s Fitness App",
            client: "Sarah owns a mobile app that provides curated health and fitness content, such as workout routines and meal plans.",
            objective: "Sarah wants to track user interactions to guide them toward the most relevant content and improve overall engagement on her platform.",
            solution: [
                "Integrate advanced analytics platform.",
                "Create personalized dashboards.",
                "Recommend content based on user behavior."
            ],
            result: [
                "Detailed insights into user interactions.",
                "Suggests new workouts or meal plans.",
                "Increases user retention.",
                "Improves user satisfaction."
            ],
            image: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 4,
            title: "Mike’s Home Inspection",
            client: "Mike is a home inspector using applications like HomeGauge.",
            objective: "Mike wants to streamline client interactions & report generation, eliminating the need for manual communication, including payment collection and report distribution.",
            solution: [
                "Integrate HomeGauge into website.",
                "Generate and upload inspection reports.",
                "Create booking form with payment gateway.",
                "Schedule inspections and submit property details."
            ],
            result: [
                "Fully automated workflow.",
                "Clients book, pay, and access reports.",
                "Focus on inspecting homes.",
                "Increases productivity and income."
            ],
            image: "https://images.pexels.com/photos/28101526/pexels-photo-28101526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 5,
            title: "Emily’s Law Firm",
            client: "Emily is a partner at a local law firm.",
            objective: "Emily’s firm deals with high volumes of client contracts and legal documents that need to be reviewed, signed, and stored securely. Manual document handling is slow and prone to errors, and keeping track of clients’ cases is becoming difficult.",
            solution: [
                "Automate document generation process.",
                "Integrate custom CRM system.",
                "Create templates for contracts.",
                "Integrate e-signature functionality.",
                "Automate secure document storage.",
                "Track client communications and case progress."
            ],
            result: [
                "Drastically reduced administrative load.",
                "Contracts generated and signed quickly.",
                "Clear view of ongoing cases.",
                "Meet deadlines and improve client satisfaction."
            ],
            image: "https://images.pexels.com/photos/4427556/pexels-photo-4427556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 6,
            title: "Sarah’s Education Platform",
            client: "Sarah runs an online education platform that offers courses in coding and data science.",
            objective: "Sarah’s platform is growing, but managing course enrollments, tracking student progress, and delivering personalized content has become cumbersome, leading to a poor user experience.",
            solution: [
                "Integrate Learning Management System (LMS).",
                "Automate course enrollment and progress tracking.",
                "Deliver personalized content.",
                "Capture testimonials after course completion."
            ],
            result: [
                "Seamless learning experience.",
                "Courses and progress tracking automated.",
                "Monitor student engagement.",
                "Improve curriculum and increase retention."
            ],
            image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 7,
            title: "Lisa’s Travel Agency",
            client: "Lisa owns a travel agency that specializes in high-end custom vacations.",
            objective: "Lisa’s agency spends hours manually creating custom itineraries, managing bookings, and following up with clients to finalize details. She wants to automate the booking process and improve client communication.",
            solution: [
                "Build automated booking system.",
                "Create custom itinerary generator.",
                "Develop web platform for vacation packages.",
                "Generate detailed itineraries automatically."
            ],
            result: [
                "Clients book vacations quickly.",
                "Custom itineraries within minutes.",
                "Reduces manual work.",
                "Improves customer satisfaction."
            ],
            image: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 8,
            title: "Jake’s Construction Firm",
            client: "Jake owns a construction company that handles multiple residential and commercial projects simultaneously.",
            objective: "Jake wants to streamline project management, reduce miscommunication between his team and clients, and automate scheduling and budgeting tasks to improve efficiency.",
            solution: [
                "Create custom project management platform.",
                "Automate scheduling and track progress.",
                "Manage client communication.",
                "Clients view progress updates.",
                "Receive automated budget and timeline reports."
            ],
            result: [
                "Clear view of project status.",
                "Reduces miscommunication and delays.",
                "Automated scheduling and budgeting.",
                "Projects stay on track.",
                "Clients up to date with progress."
            ],
            image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 9,
            title: "Andy's Solar Business",
            client: "GreenPower Solar is a company that installs solar panels for residential and commercial properties.",
            objective: "GreenPower Solar handles a lot of manual tasks, like scheduling site surveys, preparing installation quotes, tracking project progress, and managing customer communications. They want to reduce the time spent on these repetitive tasks and improve overall efficiency.",
            solution: [
                "Automate workflow with custom systems.",
                "Integrate website with CRM and project management.",
                "Request site surveys via online form.",
                "Automatically schedule site visits.",
                "Generate quotes using predefined models.",
                "Automate project tracking and email notifications."
            ],
            result: [
                "Saves time by reducing manual input.",
                "Customers request surveys easily.",
                "Receive quotes without delays.",
                "Improves customer experience.",
                "Focus on installations and business growth.",
                "Faster project turnarounds.",
                "Higher customer satisfaction."
            ],
            image: "https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ];

    const [selectedStory, setSelectedStory] = useState(stories[0]);
    const [isMdScreen, setIsMdScreen] = useState(window.innerWidth >= 768);
    
    // for mobile dropdown
    const handleSelectChange = (event) => {
        const storyId = parseInt(event.target.value, 10);
        setSelectedStory(stories.find(story => story.id === storyId));
    };

    // Function to update isMdScreen based on window resize
    const handleResize = () => {
        setIsMdScreen(window.innerWidth >= 768);
    };

    // Add event listener on window resize to handle screen size changes
    useEffect(() => {
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);
    

    return (
        <div 
            className='font-Montserrat bg-dark px-5 2xl:px-48 md:px-20 z-0 lg:py-40'
            ref={ref}>
            <motion.h1
                className='font-Gloock mt-40 mb-8 text-4xl md:text-6xl'
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1 }}
            >
                How I can help clients in your niche
            </motion.h1>
    


            <div   
                className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4`} 
            >


                {/* Desktop Story Title Menu */}
                <div 
                    style={{ display: isMdScreen ? 'block' : 'none'}}
                    className='bg-neutral-800'
                >
                    {stories.map((story, index) => {
                        return (
                            <button 
                                className={`
                                    ${selectedStory.id === story.id ? 'bg-dark': 'bg-neutral-800'} p-4 text-offWhite text-md text-left w-full hover:bg-neutral-700 transition duration-300 font-light rounded-lg
                                `}
                                onClick={() => {setSelectedStory(story)}}
                            >
                                {story.title}
                            </button>
                        )
                    })}
                </div>


                
                {/* Mobile Story Title Menu */}
                <div className="mb-5 md:hidden">
                    <select 
                        className="bg-neutral-800 text-offWhite p-4 w-full rounded-md" 
                        value={selectedStory.id}
                        onChange={handleSelectChange}
                    >
                        {stories.map(story => (
                            <option key={story.id} value={story.id}>
                                {story.title}
                            </option>
                        ))}
                    </select>
                </div>



                {/* Displaying Selected Story */}
                <AnimatePresence exitBeforeEnter>
                    <motion.div 
                        key={selectedStory.id}
                        className='md:col-span-2 lg:col-span-3 text-offWhite rounded-md'
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.img 
                            src={selectedStory.image} 
                            alt={selectedStory.title} 
                            className='w-full h-60 object-cover'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        />

                        <motion.div 
                            className='md:px-6 py-6'
                        >
                            <motion.h3 className="text-2xl font-bold mb-4">{selectedStory.title}</motion.h3>
                            
                            {/* Client Section */}
                            <div className='mb-4'>
                                <p className="text-orange-300">{selectedStory.client}</p>
                            </div>

                            {/* Objective Section */}
                            <div className='mb-4'>
                                <h4 className="text-lg mb-1">Objective</h4>
                                <p className="text-neutral-400">{selectedStory.objective}</p>
                            </div>

                            {/* Solution Section */}
                            <div className='mb-4'>
                                <h4 className="text-lg mb-1">Solution</h4>
                                <ul className="ml-5 text-neutral-400">
                                    {selectedStory.solution.map((point, index) => (
                                        <li key={index} className="flex items-start mt-2">
                                            <span className="mr-2">&#9679;</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Result Section */}
                            <div className='mb-4'>
                                <h4 className="text-lg mb-1">Result</h4>
                                <ul className="ml-5 text-neutral-400">
                                    {selectedStory.result.map((point, index) => (
                                        <li key={index} className="flex items-start mt-2">
                                            <span className="mr-2">&#9679;</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                    </motion.div>
                </AnimatePresence>



            </div>
            



        </div>
    );
    
}
