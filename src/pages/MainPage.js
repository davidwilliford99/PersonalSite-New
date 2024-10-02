import { React, useRef } from 'react';
import { AboutComponent } from '../components/AboutComponent';
import { ContactComponent } from '../components/ContactComponent';
import { IntroComponent } from '../components/IntroComponent';
import { ServicesComponent } from '../components/ServicesComponent';
import { WorksSamplesComponent } from '../components/WorksSampleComponent';
import { StoriesComponent } from '../components/StoriesComponent';
import { Navbar } from '../components/Navbar';
import { useInView } from 'framer-motion';
import { ResumeComponent } from '../components/ResumeComponent';
import { Footer } from '../components/Footer';
import { MobileNavbar } from '../components/MobileNavbar';


export const MainPage = () => {

  // ref for clicked component
  const aboutClickRef = useRef(null)
  const introClickRef = useRef(null)
  const worksClickRef = useRef(null)
  const contactClickRef = useRef(null)
  const servicesClickRef = useRef(null)
  const storiesClickRef = useRef(null)

  // Refs for scroll location
  const introRef = useRef(null)
  const worksRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)
  const servicesRef = useRef(null)
  const storiesRef = useRef(null)

  // View States for scroll location
  const introInView = useInView(introRef, {margin: '-250px'})
  const worksInView = useInView(worksRef, {margin: '-250px'})
  const aboutInView = useInView(aboutRef, {margin: '-250px'})
  const contactInView = useInView(contactRef, {margin: '-250px'})
  const servicesInView = useInView(servicesRef, {margin: '-250px'})
  const storiesInView = useInView(storiesRef, { margin: '-250px' })

  return (
    <div id='MainPage' className='max-w-screen-2xl mx-auto font-Montserrat min-h-screen'>

      <Navbar 
        className='fixed'
        introInView={introInView}
        worksInView={worksInView}
        aboutInView={aboutInView}
        contactInView={contactInView}
        servicesInView={servicesInView}
        storiesInView={storiesInView}

        aboutClickRef={aboutClickRef}
        introClickRef={introClickRef}
        worksClickRef={worksClickRef}
        contactClickRef={contactClickRef}
        servicesClickRef={servicesClickRef}
        storiesClickRef={storiesClickRef}
      />

      <MobileNavbar 
        className='fixed'
        introInView={introInView}
        worksInView={worksInView}
        aboutInView={aboutInView}
        contactInView={contactInView}
        servicesInView={servicesInView}
        storiesInView={storiesInView}

        aboutClickRef={aboutClickRef}
        introClickRef={introClickRef}
        worksClickRef={worksClickRef}
        contactClickRef={contactClickRef}
        servicesClickRef={servicesClickRef}
        storiesClickRef={storiesClickRef}
      />


      <div ref={introRef}>
        <div ref={introClickRef}>
          <IntroComponent 
            id='Intro' 
            contactClickRef={contactClickRef}
          />
        </div>
      </div>

      <div ref={aboutRef}>
        <div ref={aboutClickRef}>
          <AboutComponent id='About'/>
        </div>
      </div> 

      <div ref={servicesRef}>
        <div ref={servicesClickRef}>
          <ServicesComponent id='Services'/>
        </div>
      </div>

      <div ref={storiesRef}>
        <div ref={storiesClickRef}>
          <StoriesComponent id='Stories' />
        </div>
      </div>

      <div ref={contactRef}>
        <div ref={contactClickRef}>
          <ContactComponent id='Contact'/>
        </div>
      </div>

      {/* <div ref={worksRef}>
        <div ref={worksClickRef}>
          <WorksSamplesComponent id='Works'/>
        </div>
      </div> */}

      <Footer 
        aboutClickRef={aboutClickRef}
        introClickRef={introClickRef}
        worksClickRef={worksClickRef}
        contactClickRef={contactClickRef}
        servicesClickRef={servicesClickRef}
      />
      
    </div>

  );
}