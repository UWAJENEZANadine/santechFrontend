import React from "react";
import Header from "./components/header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Footer from "./components/footer";
import GoToTop from "./components/GoToTop";
import About from "./pages/about";
import Story from "./pages/story";
import Contact from "./pages/contact";


function App() {
  return (
    <>
    
      <Header />
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="story" element={<Story />} />
        <Route path="contact" element={<Contact />} />
       
      </Routes>
      <GoToTop />
      <Footer />
    </>
  );
}

export default App;
