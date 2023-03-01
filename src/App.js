import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainPage } from "./pages/MainPage"
import './App.css'


function App() {

  return (
    <div className="bg-dark">
      <BrowserRouter>

        {/* 
            Navbar is now implemented in each page component seperately,
            This is much easier to record the state this way 
        */}

        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>

      </BrowserRouter>
    </div>



  );
}

export default App;
