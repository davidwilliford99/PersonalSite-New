import React from 'react';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export const TestimonialComponent = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const testimonials = [
        {
            quote: "David's professionalism, attention to detail and communication skills are all first class! He was able to take my ideas and translate them into a fully functional site that matched my vision for our company.",
            name: "Michael W.",
        },
        {
            quote: "Working with David is easy. He provides confidence, clarity, and easily adapts to my needs. All with quick response times to any questions and requests I have.",
            name: "Yadira A.",
        }
    ];

    return (
        <div id='Testimonials' 
             ref={ref}
             className="font-Montserrat pb-20 px-5 md:px-20 2xl:px-48 bg-dark text-offWhite"
        >
            <h2 className="text-4xl md:text-5xl font-Gloock mb-10">Testimonials from Satisfied Clients</h2>
            <div className="grid md:grid-cols-2 gap-8 relative">
                {testimonials.map((testimonial, index) => (
                    <div 
                        key={index}
                        className="flex flex-col justify-between bg-dark px-20 py-10 rounded-3xl w-full relative"
                        style={{
                            opacity: isInView ? 1 : 0,
                            transform: isInView ? "none" : "translateY(50px)",
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) " + (index * 0.2) + "s"
                        }}
                    >
                        <span className="absolute top-5 left-5 text-7xl text-orange-300 opacity-50 font-serif">"</span>
                        <p className="text-xl text-neutral-400 mb-4 italic relative z-0">{testimonial.quote}</p>
                        <span className="absolute bottom-5 right-5 text-7xl text-orange-300 opacity-50 font-serif">"</span>
                        <div className="flex items-center relative z-0 mt-10">
                            <p className="font-semibold">- {testimonial.name}</p>
                        </div>
                    </div>
                ))}

                {/* Divider */}
                <div className="absolute inset-y-0 hidden lg:block left-1/2 border-l border-neutral-700"></div>


            </div>
        </div>
    );
}