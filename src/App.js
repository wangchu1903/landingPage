import GlobalStyle from './globalStyle.js';
import React, { useState } from 'react'
import Navbar from './components/Navbar.js';
// import Hero from './components/Hero.js';
import Menu from './components/Menu.js';
// import Info from './components/Info.js';

// import { SliderData } from './data/SliderData';
// import { InfoData } from './data/InfoData.js';
// import Contact from './components/Contact.js';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Gallery from './pages/Gallery.js';
import Footer from './components/Footer.js';
import Contact from './pages/Contact.js';
import About from './pages/About.js';



function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>

      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Menu isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/customer' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />


    </>

  );
}

export default App;
