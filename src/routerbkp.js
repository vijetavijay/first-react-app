import * as React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./home";
import About  from "./about";

// build the router
export default function Mainrouter() {
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      </BrowserRouter>
      );
    }
  
  

  