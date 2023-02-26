import { React } from 'react';
import { IntroComponent } from '../components/IntroComponent';
import { WorksComponent } from '../components/WorksComponent';
import { WorksSamplesComponent } from '../components/WorksSampleComponent';

export const MainPage = () => {
    return (
      <div id='MainPage' className='font-Montserrat min-h-screen'>
        
        <IntroComponent />
        <WorksComponent />
        <WorksSamplesComponent />
      </div>
  
    );
}