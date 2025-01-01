import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

export const WritingComponent = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await fetch('https://gql.hashnode.com/', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "x-apollo-operation-name": "FetchData",
                },
                body: JSON.stringify({
                    query: `
                        query RecentBlogs {
                            user(username: "DavidWilliford") {
                                posts(page: 1, pageSize: 6) {
                                    edges {
                                        node {
                                            id
                                            title
                                            slug
                                            brief
                                            publishedAt
                                            coverImage {
                                                url
                                            }
                                        }
                                    }
                                }
                            }
                        }`
                })
            });
            const { data } = await response.json();
            setBlogs(data.user.posts.edges);
        };

        fetchBlogs();
    }, []);

    return (
        <div id='Writing' className='font-Montserrat bg-dark py-40 px-5 2xl:px-48 md:px-20 z-0'>
            <div
                id='writing-section'
                className='flex flex-col justify-center text-neutral-400'
                ref={ref}
            >
                <h3 className='text-3xl md:text-6xl font-Gloock leading-snug my-6 text-center md:text-left text-offWhite'>
                    My Recent Articles:
                </h3>
                <div className='grid grid-cols-3 gap-4'>
                    {blogs.map((blog, index) => (
                        <a
                            key={blog.node.id}
                            target='_blank'
                            href={`https://blog.davidwilliford.dev/${blog.node.slug}`}
                            className='bg-neutral-800 hover:bg-neutral-900 cursor-pointer transition p-4 flex flex-col justify-between gap-5 rounded-lg'
                            style={{
                                transform: isInView ? 'translateX(0)' : `translateX(-100px)`,
                                transition: `opacity 1s ease-out ${index * 0.3}s, transform 1s ease-out ${index * 0.3}s`
                            }}
                        >
                            <div className='flex flex-col gap-3'>
                                <img src={blog.node.coverImage.url} alt={blog.title} className='w-full h-48 object-cover rounded-md' />
                                <h2 className='text-xl text-offWhite font-semibold mt-2'>{blog.node.title}</h2>
                                <p className='text-sm'>{blog.node.brief}</p>
                            </div>
                            <Link to={`https://blog.davidwilliford.dev/${blog.node.slug}`} className='text-blue-500 hover:text-blue-600 mt-auto'>Read More</Link>
                        </a>
                    ))}
                </div>

                <a
                    href='https://blog.davidwilliford.dev'
                    target='_blank'
                    className='font-Montserrat text-dark bg-orange-300 text-xs lg:text-xl rounded-full text-center py-5 px-8 mt-8 transition-all hover:opacity-90 border border-dark2 self-start'
                    style={{
                        opacity: isInView ? 1 : 0,
                        transition: 'opacity 1s ease-out, transform 1s ease-out',
                        transform: isInView ? 'translateY(0)' : 'translateY(100px)'
                    }}
                >
                    Read Some More Articles
                </a>
            </div>
        </div>
    );
};