import { React, useRef } from 'react';
import { AboutComponent } from '../components/AboutComponent';
import { ContactComponent } from '../components/ContactComponent';
import { IntroComponent } from '../components/IntroComponent';
import { WorksComponent } from '../components/WorksComponent';
import { WorksSamplesComponent } from '../components/WorksSampleComponent';
import { Navbar } from '../components/Navbar';
import { useInView } from 'framer-motion';
import { ResumeComponent } from '../components/ResumeComponent';
import { Footer } from '../components/Footer';

export const MainPage = () => {

  const introRef = useRef(null)
  const worksRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)
  const resumeRef = useRef(null)

  const introInView = useInView(introRef, {margin: '-250px'})
  const worksInView = useInView(worksRef, {margin: '-250px'})
  const aboutInView = useInView(aboutRef, {margin: '-250px'})
  const contactInView = useInView(contactRef, {margin: '-250px'})
  const resumeInView = useInView(resumeRef, {margin: '-250px'})

  return (
    <div id='MainPage' className='font-Montserrat min-h-screen'>

      <Navbar 
        className='fixed'
        introInView={introInView}
        worksInView={worksInView}
        aboutInView={aboutInView}
        contactInView={contactInView}
        resumeInView={resumeInView}
        />

      <div ref={introRef}>
        <IntroComponent id='Intro'/>
      </div>
      
      <div ref={worksRef}>
        <WorksComponent id='Works'/>
        <WorksSamplesComponent id='Works'/>
      </div>
      
      <div ref={aboutRef}>
        <AboutComponent id='About'/>
      </div>

      <div ref={contactRef}>
        <ContactComponent id='Contact'/>
      </div>

      <div ref={resumeRef}>
        <ResumeComponent id='Resume'/>
      </div>

      <Footer />
      
    </div>

  );
}