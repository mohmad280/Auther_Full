import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutAthar from './components/AboutAthar'
import AboutManbar from './components/AboutManbar'
import Agenda from './components/Agenda'
import Footer from './components/Footer'
import Countdown from './components/Countdown'
import FAQ from './components/FAQ'
import useReveal from './hooks/useReveal'
import useActiveSection from "./hooks/useActiveSection";

function App() {

        useActiveSection();
        useReveal();


return (
    <>
     <Navbar/>
     <Hero/>
     <AboutAthar/>
     <AboutManbar/>
     <Agenda/>
     <FAQ/>
     <Footer/>
     <Countdown/>
    </>
  )
}

export default App
