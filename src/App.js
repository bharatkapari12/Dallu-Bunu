import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/HeroSection/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/contact/Contact';
import Footer from './Components/Footer/Footer';
import Chatbot from './Components/Chatbot/Chatbot';
import Signup from "./Components/Registra/Signup.jsx"
import Login from "./Components/Registra/Login.jsx"
import Education from './Components/Reg/Education';
import Employment from './Components/Reg/Employment';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ 
          <>
            <Navbar />
            <Hero />
            <div className='container'>
              <Title subTitle='OUR COURSES' title='What We Offer' />
              <Programs />
              <About />
              <Title subTitle='BLOG' title='What People Says' />
              <Testimonials />
              <Title subTitle='CONTACT US' title='Get In Touch' />
              <Contact />
              <Chatbot />
              <Footer />
            </div>
          </>
        } />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login  />} />
        <Route path="/education" element={<Education  />} /> 
        <Route path="/employment" element={<Employment  />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;