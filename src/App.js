import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Story from "./pages/story";
import Contact from "./pages/contact";
import Gallery from "./pages/gallery";
import Blog from "./pages/TechBlog";
import Layout from "./components/dashboard/layout";
import Dashboard from "./components/dashboard/dashboard";


function App() {
  return (
    <>
    
 
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="story" element={<Story />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="blog" element={<Blog />} />
       
      </Routes>
      


      <Routes>
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Dashboard />} />
            
          </Route>
          
        </Routes>
    </>
  );
}

export default App;
