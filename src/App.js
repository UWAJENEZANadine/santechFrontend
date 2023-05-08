import React from "react";
import Header from "./components/header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
