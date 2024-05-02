import React, {useState} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";
import About from './pages/About/About';
import Navbar from './components/Navbar/Navbar';
import Contact from "./pages/Contact/Contact" 
import Retreats from "./pages/Retreats/Retreats";
import Shop from "./pages/Shop/Shop";
import Podcast from "./pages/Podcast/Podcast";
import CacaoCircle from "./pages/CacaoCircles/CacaoCircles";
import SensualDance from "./pages/SensualDance/SensualDance";
import NoMatch from "./pages/NoMatch/NoMatch"


function App() {
  const [activeLink, setActiveLink] = useState('/');

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar activeLink={activeLink} setActiveLink={setActiveLink}/>
      
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="meet-me" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="retreats-event" element={<Retreats />} />
        <Route path="shop" element={<Shop/>} />
        <Route path="podcast" element={<Podcast/>} />
        <Route path="cacao-circles" element={<CacaoCircle/>} />
        <Route path="sensual-dance" element={<SensualDance/>} />
        {/* No Page found */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
