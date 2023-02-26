import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainPage } from "./pages/MainPage"
import { Navbar } from "./components/Navbar";
import './App.css';


function App() {



  return (
    <div className="bg-dark">
      <BrowserRouter>
        <Navbar className='sticky top-0 z-50'/>

        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>

      </BrowserRouter>
    </div>



  );
}

export default App;
