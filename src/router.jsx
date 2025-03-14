import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Playground from "./pages/Playground";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
};

export default AppRouter;
