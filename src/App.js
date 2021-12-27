import React from 'react'
import './App.css';
import Navbar from "./Components/Navbar";
import Projects from "./Components/Pages/Projects";
import Contact from "./Components/Pages/contact";
import About from "./Components/Pages/About";
import Home  from "./Components/Pages/home";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./Components/footer"


function App() {
  return (
     
    <Router>

      <Navbar />
      
      <Routes>
      <Route path="/Projects" element={<Projects/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/" element={<Home/>} />
       </Routes>
       <div>
         <Footer />
       </div>
         
     </Router>
     
  );  
}

export default App;
 