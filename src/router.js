import * as React from "react";
import {
    Routes, Route
  } from "react-router-dom";
import Layout from "./layout";
import Home from "./home";
import About  from "./about";
// import Contact from "./contact";

// build the router
// function Router() {
//     return( <Routes>
//  <Route path="/" element={<Layout />} />
//  <Route path="about" element={<About />} />
//  <Route path="home" element={<Home />} />
// </Routes>)
 
// export default Router;

export default function Router() {
    return (
        <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="about" element={<About />} />
        <Route path="home" element={<Home />} />
       </Routes>
    );
  }




  
  

  