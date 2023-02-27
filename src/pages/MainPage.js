import { React } from 'react';
import { AboutComponent } from '../components/AboutComponent';
import { ContactComponent } from '../components/ContactComponent';
import { IntroComponent } from '../components/IntroComponent';
import { WorksComponent } from '../components/WorksComponent';
import { WorksSamplesComponent } from '../components/WorksSampleComponent';

export const MainPage = () => {
    return (
      <div id='MainPage' className='font-Montserrat min-h-screen'>
        
        <IntroComponent />
        <WorksComponent />
        <WorksSamplesComponent />
        <AboutComponent />
        <ContactComponent />
      </div>
  
    );
}