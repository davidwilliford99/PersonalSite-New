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
            solution: "Joe hires me to build and integrate a custom subscription service into his e-commerce platform. The system allows customers to handpick their monthly items through a seamless user interface, and once selections are made, Joe is automatically notified to prepare and ship the boxes.",
            result: "Joe now enjoys a consistent, low-effort source of recurring revenue. The subscription service attracts loyal customers, and Joe’s only task is to pack the boxes, reducing his manual work and creating a scalable income stream.",
            image: "https://images.pexels.com/photos/6169650/pexels-photo-6169650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 1,
            title: "Jeremy’s Auto Repair Shop",
            client: "Jeremy owns multiple automotive repair shops.",
            objective: "Jeremy wants to attract more new customers by simplifying the process of distributing repair estimates.",
            solution: "Jeremy hires me to build an online form that integrates with his website. The form allows potential customers to upload photos and provide details of the damage to their vehicle. Jeremy receives the form details through a secure login and can generate and send estimates via email directly to the customer.",
            result: "The new system significantly increases the number of leads Jeremy receives, as potential customers appreciate the ease of obtaining estimates without having to visit the shop. It saves time for both Jeremy and his customers, improving the customer experience and greatly increasing revenue.",
            image: "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 2,
            title: "Nathan’s HVAC Service",
            client: "Nathan runs an HVAC repair service with a team that visits clients’ homes.",
            objective: "Nathan is frustrated by the manual scheduling process and frequent miscommunications between clients and his crew.",
            solution: "Nathan hires me to develop an automated scheduling system for his website. The system allows customers to describe their repair needs, select which appliances require servicing, and choose from available time slots based on the crew’s calendar.",
            result: "Nathan now has a fully-automated scheduling system that eliminates the need for manual intervention. His crew’s daily schedule is organized in advance, minimizing downtime and confusion. Nathan saves hours of time every day, allowing him to focus on his business and deal with owner-level tasks.",
            image: "https://images.pexels.com/photos/5463581/pexels-photo-5463581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 3,
            title: "Sarah’s Fitness App",
            client: "Sarah owns a mobile app that provides curated health and fitness content, such as workout routines and meal plans.",
            objective: "Sarah wants to track user interactions to guide them toward the most relevant content and improve overall engagement on her platform.",
            solution: "Sarah hires me to integrate an advanced analytics platform, such as Google Analytics or Mixpanel, into her web app. I also create personalized dashboards and integrate machine learning algorithms to recommend the most relevant content based on user behavior.",
            result: "Sarah can now see detailed insights into how users interact with her content. The system automatically suggests new workouts or meal plans based on the user’s history and engagement, increasing user retention and satisfaction.",
            image: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 4,
            title: "Mike’s Home Inspection",
            client: "Mike is a home inspector using applications like HomeGauge.",
            objective: "Mike wants to streamline client interactions & report generation, eliminating the need for manual communication, including payment collection and report distribution.",
            solution: "I integrate HomeGauge into Mike’s website, automatically generating & uploading inspection reports to a secure client portal. I also create a booking form with an integrated payment gateway, allowing clients to schedule inspections, submit property details, and pay upfront.",
            result: "Mike’s workflow is fully automated, allowing clients to book, pay, and access reports without needing direct communication. Now Mike can solely focus on inspecting homes, greatly increasing his productivity and income.",
            image: "https://images.pexels.com/photos/28101526/pexels-photo-28101526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 5,
            title: "Emily’s Law Firm",
            client: "Emily is a partner at a local law firm.",
            objective: "Emily’s firm deals with high volumes of client contracts and legal documents that need to be reviewed, signed, and stored securely. Manual document handling is slow and prone to errors, and keeping track of clients’ cases is becoming difficult.",
            solution: "Emily hires me to automate the document generation process and integrate a custom CRM system. I create templates for frequently used contracts, integrate e-signature functionality, and automate secure document storage. Additionally, I set up a CRM that tracks all client communications, case progress, and deadlines.",
            result: "The firm’s administrative load is drastically reduced, with contracts now generated and signed within minutes. The CRM provides the team with a clear view of ongoing cases, helping them meet deadlines and improve client satisfaction.",
            image: "https://images.pexels.com/photos/4427556/pexels-photo-4427556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 6,
            title: "Sarah’s Education Platform",
            client: "Sarah runs an online education platform that offers courses in coding and data science.",
            objective: "Sarah’s platform is growing, but managing course enrollments, tracking student progress, and delivering personalized content has become cumbersome, leading to a poor user experience.",
            solution: "Sarah hires me to integrate a Learning Management System (LMS) that automates course enrollment, progress tracking, and personalized content delivery. I also integrate a feedback loop that captures testimonials after course completion.",
            result: "Students now enjoy a seamless learning experience, with courses and progress tracking automatically handled by the system. Sarah can easily monitor student engagement and course completion, allowing her to improve the curriculum and increase student retention.",
            image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 7,
            title: "Lisa’s Travel Agency",
            client: "Lisa owns a travel agency that specializes in high-end custom vacations.",
            objective: "Lisa’s agency spends hours manually creating custom itineraries, managing bookings, and following up with clients to finalize details. She wants to automate the booking process and improve client communication.",
            solution: "Lisa hires me to build an automated booking system with a custom itinerary generator. I develop a web platform where clients can select their desired vacation packages, customize their preferences, and book directly through the website. The system then automatically generates a detailed itinerary based on a customer questionnaire.",
            result: "Lisa’s clients can now book vacations and receive custom itineraries within minutes, drastically reducing manual work for her team. The follow-up system keeps clients engaged and informed, improving customer satisfaction.",
            image: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 8,
            title: "Jake’s Construction Firm",
            client: "Jake owns a construction company that handles multiple residential and commercial projects simultaneously.",
            objective: "Jake wants to streamline project management, reduce miscommunication between his team and clients, and automate scheduling and budgeting tasks to improve efficiency.",
            solution: "Jake hires me to create a custom project management platform that automates scheduling, tracks project progress, and manages client communication. Clients can log in to view progress updates, communicate directly with the team, and receive automated reports on budget and timeline changes.",
            result: "Jake’s team now operates with a clear view of each project’s status, reducing miscommunication and delays. The automated scheduling and budgeting system ensures that projects stay on track, and clients are always up to date with progress reports. Jake’s company can now take on more projects while maintaining high levels of customer satisfaction.",
            image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 9,
            title: "Andy's Solar Business",
            client: "GreenPower Solar is a company that installs solar panels for residential and commercial properties.",
            objective: "GreenPower Solar handles a lot of manual tasks, like scheduling site surveys, preparing installation quotes, tracking project progress, and managing customer communications. They want to reduce the time spent on these repetitive tasks and improve overall efficiency.",
            solution: "GreenPower Solar hires me to automate their workflow. I develop custom automation systems that integrate their website with a CRM and project management tool. The system allows potential customers to request site surveys via an online form, automatically schedules site visits based on availability, and generates quotes using predefined pricing models. Additionally, I set up automated project tracking and email notifications to keep customers informed at every stage, from site survey to installation completion.",
            result: "The automated system saves GreenPower Solar tons of time by reducing manual input and tracking. Customers can easily request surveys and receive quotes without delays, improving the overall customer experience. The team can now focus on the actual installations and growing the business rather than handling repetitive tasks, leading to faster project turnarounds and higher customer satisfaction.",
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
            className='font-Montserrat bg-dark px-5 2xl:px-48 md:px-20 z-0 py-40'
            ref={ref}>
            <motion.h1
                className='font-Gloock mt-40 lg:mb-8 text-4xl md:text-6xl'
                initial={{ opacity: 0, y: 100 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1 }}
            >
                Example Client Stories
            </motion.h1>

            {/* <motion.p 
                className='mb-10 mt-2 text-neutral-400'
                initial={{ opacity: 0, y: 100 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1 }}
            >
                Read some examples of how I can assist different types of businesses.<br/> 
                <span className='text-orange-300'>Many of my integrations generate a ROI in less than 1 month!</span>
            </motion.p> */}
    


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
                                <p className="text-neutral-400">{selectedStory.solution}</p>
                            </div>

                            {/* Result Section */}
                            <div className='mb-4'>
                                <h4 className="text-lg mb-1">Result</h4>
                                <p className="text-neutral-400">{selectedStory.result}</p>
                            </div>
                        </motion.div>

                    </motion.div>
                </AnimatePresence>



            </div>
            



        </div>
    );
    
}
