import React from "react";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div id="main">
            <Navbar/>
            <Landing/>
            <About/>
            <Projects/>
            <Skills/>
            <Contact/>
            <Footer/>
        </div>
        
    )
}