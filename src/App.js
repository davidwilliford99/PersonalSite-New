import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainPage } from "./pages/MainPage"
import { Navbar } from "./components/Navbar";
import './App.css';


function App() {



  return (
    <div className="bg-dark">
      <BrowserRouter>
        <Navbar className='fixed'/>

        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>

      </BrowserRouter>
    </div>



  );
}

export default App;
