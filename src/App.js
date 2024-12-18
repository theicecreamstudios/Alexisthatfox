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
import Footer from './components/Footer/Footer';
import { Box } from '@mui/material';
import SoundBath from './pages/SoundBath/SoundBath';
import SocialClub from './pages/SocialClub/SocialClub';
import Events from './pages/Events/Events';


function App() {
  const [activeLink, setActiveLink] = useState('/');

  return (
    <div className="App">
      <BrowserRouter>
      <Box sx={{display:'flex',flexDirection:'column'}}>
        <Box>
        <Navbar activeLink={activeLink} setActiveLink={setActiveLink}/>
        </Box>

        <Box sx={{flexGrow:1}}>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="meet-me" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="retreats" element={<Retreats />} />
        <Route path="events" element={<Events />} />
        <Route path="shop" element={<Shop/>} />
        <Route path="podcast" element={<Podcast/>} />
        <Route path="cacao-healer" element={<CacaoCircle/>} />
        <Route path="sound-bath" element={<SoundBath/>} />
        <Route path="social-club" element={<SocialClub/>} />
        <Route path="sensual-dance" element={<SensualDance/>} />
        {/* No Page found */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
        </Box>
        <Box>
        <Footer/>
        </Box>
      </Box>
  </BrowserRouter>
    </div>
  );
}

export default App;
