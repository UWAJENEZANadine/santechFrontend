import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Story from "./pages/story";
import Contact from "./pages/contact";
import Gallery from "./pages/gallery";
import Layout from "./components/dashboard/layout";
import Dashboard from "./components/dashboard/dashboard";
import Blogs from "./components/dashboard/blogs";
import Technology from "./components/dashboard/technology";
import Testmonials from "./components/dashboard/testmoniasl";
import SignIn from "./pages/signIn";


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
        <Route path="dashSignIn" element={<SignIn />} />
        
      
      </Routes>

      <Routes>
        <Route path="/dashboard" element={<Layout/>}>
          <Route index element={<Dashboard />} />
          <Route path="blog" element={<Blogs />} />
          <Route path="technology" element={<Technology />} />
          <Route path="testmonials" element={<Testmonials />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
