import { HashRouter, Route, Routes } from "react-router-dom"
import { MainPage } from "./pages/MainPage"
import './App.css'
import { ThankYouPage } from "./pages/ThankYouPage";
import { BlogMain } from "./pages/BlogMain";


function App() {

  return (
    <div className="bg-dark">
      <HashRouter>

        {/* 
            Navbar is now implemented in each page component seperately,
            This is much easier to record the state this way 
        */}

        <Routes>

          <Route exact path="/PersonalSite-New" element={<MainPage />} />
          <Route exact path="/ThankYou" element={<ThankYouPage />} />

          <Route exact path='/' element={ <MainPage /> }/>
        </Routes>

      </HashRouter>
    </div>



  );
}

export default App;
