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
import Blogs from "./components/dashboard/blogs";
import Testmonials from "./components/dashboard/testmoniasl";
import SignIn from "./pages/signIn";
import SingleTechBlog from "./pages/singleTechBlog";
import SlideShow from "./components/dashboard/slideShow";
import OurPartners from "./components/dashboard/ourPartners";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/story" element={<Story />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/post/:id" element={<SingleTechBlog />} />
      </Routes>

      <Routes>
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashblog" element={<Blogs />} />
          <Route path="testmonials" element={<Testmonials />} />
          <Route path="slideshow" element={<SlideShow />} />
          <Route path="partners" element={<OurPartners />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
