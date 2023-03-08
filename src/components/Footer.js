
import { React } from 'react';
import { Link } from 'react-router-dom';


export const Footer = (props) => {

        // run these functions from an event handler or an effect to execute scroll 
        const introScroll = () => props.introClickRef.current.scrollIntoView({behavior: "smooth"})   
        const worksScroll = () => props.worksClickRef.current.scrollIntoView({behavior: "smooth"})
        const aboutScroll = () => props.aboutClickRef.current.scrollIntoView({behavior: "smooth"})
        const contactScroll = () => props.contactClickRef.current.scrollIntoView({behavior: "smooth"})
        const resumeScroll = () => props.resumeClickRef.current.scrollIntoView({behavior: "smooth"})
    

    return (
        <div className='overflow-x-hidden pt-40'>

            {/* Slanted rectangle */}
            <div id='slanted-div' className='w-[200rem] h-60 bg-dark2 -rotate-6 z-10 relative top-20 right-20'>
            </div>

            <div className='flex w-full justify-between flex-between bg-dark2 px-5 xl:px-52 py-10 text-slate-200'>

                    
                <div id='column-1' className='z-20'>
                    <h1 id='title' className='mb-5 text-2xl font-semibold'>Socials</h1>
                    <div id='footer-item' className='mb-2 flex'>
                        <svg xmlns="https://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill='rgb(226,232,240)'><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        <a rel='noreferrer' target='_blank' href='https://www.linkedin.com/in/david-williford-2a20b4222/' className='mx-2 hover:text-orange-300 transition-colors'>LinkedIn</a>
                    </div>
                    <div id='footer-item' className='mb-2 flex'>
                        <svg width="20" height="20" className='overflow-visible' xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='rgb(226,232,240)' fill-rule="evenodd" clip-rule="evenodd"><path d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.238 5-5 5zm-.141-6.333c.63 0 1.141-.512 1.141-1.142v-9.05c0-.63-.511-1.142-1.141-1.142h-13.718c-.63 0-1.141.512-1.141 1.142v9.05c0 .63.511 1.142 1.141 1.142h13.718zm-6.859-4.058l-6.228-4.321-.014 7.712h12.457v-7.712l-6.215 4.321zm5.913-6.609c-1.745 1.215-5.913 4.153-5.913 4.153l-5.947-4.153h11.86z"/></svg>
                        <Link to='/Welcome' className='mx-2 hover:text-orange-300 transition-colors'>Email</Link>
                    </div>
                    <div id='footer-item' className='mb-2 flex'>
                        <svg xmlns="https://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill='rgb(226,232,240)'><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        <a rel='noreferrer' target='_blank' href='https://github.com/davidwilliford99' className='mx-2 hover:text-orange-300 transition-colors'>Github</a>
                    </div>
                    <div id='footer-item' className='mb-2 flex'>
                        <svg width="20" height="20" xmlns="https://www.w3.org/2000/svg" fill='rgb(226,232,240)' viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd"><path d="M2.178 11h-1.178v-2c.488-.001.784-.278.862-.665.637-2.461 3.164-8.335 10-8.335 6.888 0 9.484 6.135 10.294 8.413.15.421.459.584.844.584l.001 2.003h-1.18c.575.459 1.179 1.36 1.179 3.131 0 1.63-.904 3.686-2.877 4.531-2.153 3.445-5.027 5.338-8.123 5.338-3.096 0-5.97-1.893-8.123-5.338-1.974-.845-2.877-2.901-2.877-4.531 0-1.771.603-2.672 1.178-3.131zm12.022 7.459h-4.4c.004.012.626 1.74 2.2 1.74 1.634 0 2.196-1.728 2.2-1.74zm4.517-7.459h-13.435l-.013.515c0 .668-.682 1.114-1.288.844-.169-.075-.43-.073-.617.049-.917.601-.818 3.864 1.425 4.629.916.313 2.364 3.103 3.93.398.542-.934 2.251-1.039 3.281-.297 1.029-.742 2.739-.637 3.28.297 1.566 2.705 3.014-.085 3.931-.398 2.244-.765 2.341-4.028 1.424-4.629-.215-.14-.487-.106-.616-.049-.606.271-1.289-.176-1.289-.844l-.013-.515zm-9.696.996c-.634 0-1.146.62-1.146 1.385s.512 1.385 1.146 1.385c.632 0 1.146-.62 1.146-1.385s-.514-1.385-1.146-1.385zm7.104 1.385c0 .765-.513 1.385-1.146 1.385-.633 0-1.146-.62-1.146-1.385s.513-1.385 1.146-1.385c.633 0 1.146.62 1.146 1.385zm-5.125-11.338c-.735.075-1.4.244-2 .483v3.474c0 .552-.448 1-1 1s-1-.448-1-1v-2.269c-2.153 1.817-2.985 4.513-3.19 5.269h16.395c-.333-1.006-1.189-3.46-3.205-5.177v2.177c0 .552-.448 1-1 1s-1-.448-1-1v-3.406c-.599-.248-1.264-.431-2-.524v2.93c0 .552-.448 1-1 1s-1-.448-1-1v-2.957z"/></svg>
                        <a rel='noreferrer' target='_blank' href='https://app.joinhandshake.com/stu/users/32534819' className='mx-2 hover:text-orange-300 transition-colors'>Handshake</a>
                    </div>
                </div>

                <div id='column-2' className='z-20'>
                    <h1 id='title' className='mb-5 text-2xl font-semibold'>Links</h1>
                    <div id='footer-item' className='mb-2 flex'>
                        <svg xmlns="https://www.w3.org/2000/svg" width="20" height="20" fill='rgb(226,232,240)' viewBox="0 0 24 24"><path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/></svg>
                        <Link to='/Welcome' className='mx-2 hover:text-orange-300 transition-colors'>Home</Link>
                    </div>
                    <div id='footer-item' className='mb-2 flex'>
                        <svg clip-rule="evenodd" fill-rule="evenodd" width="20" height="20" fill='rgb(226,232,240)' stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.25 6c.398 0 .75.352.75.75 0 .414-.336.75-.75.75-1.505 0-7.75 0-7.75 0v12h17v-8.75c0-.414.336-.75.75-.75s.75.336.75.75v9.25c0 .621-.522 1-1 1h-18c-.48 0-1-.379-1-1v-13c0-.481.38-1 1-1zm-2.011 6.526c-1.045 3.003-1.238 3.45-1.238 3.84 0 .441.385.626.627.626.272 0 1.108-.301 3.829-1.249zm.888-.889 3.22 3.22 8.408-8.4c.163-.163.245-.377.245-.592 0-.213-.082-.427-.245-.591-.58-.578-1.458-1.457-2.039-2.036-.163-.163-.377-.245-.591-.245-.213 0-.428.082-.592.245z" fill-rule="nonzero"/></svg>                    
                        <Link to='/Works' className='mx-2 hover:text-orange-300 transition-colors'>Works</Link>
                    </div>
                    <div id='footer-item' className='mb-2 flex'>
                        <svg xmlns="https://www.w3.org/2000/svg" width="20" height="20" fill='rgb(226,232,240)' viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>                    
                        <Link to='/Contact' className='mx-2 hover:text-orange-300 transition-colors'>Contact</Link>
                    </div>
                    <div id='footer-item' className='mb-2 flex'>
                        <svg xmlns="https://www.w3.org/2000/svg" width="20" height="20" fill='rgb(226,232,240)' viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z"/></svg>
                        <Link to='/About' className='mx-2 hover:text-orange-300 transition-colors'>About</Link>
                    </div>
                    <div id='footer-item' className='mb-2 flex'>
                        <svg width="20" height="20" fill='rgb(226,232,240)' viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M22 0h-20v24h14l6-6v-18zm-6 18h4.36l-4.36 4.385v-4.385zm-3 1h-8v1h8v-1zm0-3h-8v1h8v-1zm6-2v-1h-14v1h14zm-7.059-4.968c-1.147-.265-2.214-.497-1.697-1.473 1.573-2.97.417-4.559-1.244-4.559-1.694 0-2.821 1.65-1.244 4.559.532.982-.575 1.214-1.697 1.473-1.024.237-1.062.745-1.059 1.635l.001.333h7.997l.001-.323c.004-.896-.03-1.407-1.058-1.645zm7.059.968h-4v1h4v-1zm0-2v-1h-4v1h4zm0-4h-4v1h4v-1z"/></svg>
                        <Link to='/Resume' className='mx-2 hover:text-orange-300 transition-colors'>Resume</Link>
                    </div>
                </div>

                <div id='column-2' className='z-20'>
                    <h1 id='title' className='mb-5 text-2xl font-semibold'>Primary Skills</h1>
                    <div id='footer-item' className='mb-2 text-neutral-400'>
                        <h2>React</h2>
                    </div>
                    <div id='footer-item' className='mb-2 text-neutral-400'>
                        <h2>Spring Boot</h2>
                    </div>
                    <div id='footer-item' className='mb-2 text-neutral-400'>
                        <h2>AWS/Cloud</h2>
                    </div>
                    <div id='footer-item' className='mb-2 text-neutral-400'>
                        <h2>MySQL</h2>
                    </div>
                    <div id='footer-item' className='mb-2 text-neutral-400'>
                        <h2>C/C++</h2>
                    </div>
                    <div id='footer-item' className='mb-2 text-neutral-400'>
                        <Link to="/Resume" className='invisible lg:visible text-yellow-600 font-semibold hover:text-zinc-900 transition-colors'>Find Out More!</Link>      
                    </div>
                </div>

            </div>
        </div>
        
  
    );
  }