import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Services from "./components/Services/Services"
import Description from "./components/Description/Description"
import Realisations from "./components/Realisations/Realisation"
import ContactHomepage from "./components/ContactHomepage/ContactHomepage"
import Testimonials from "./components/Testimonials/Testimonials"
import Footer from "./components/Footer/Footer"
import HeroOtherPage from "./components/Hero/HeroOtherPage"
import PageServices from "./components/PageServices/PageServices"
import Projets from "./components/Projets/Projets"
import RealisationPage from "./components/Realisations/RealisationPage"
import ContactPage from "./components/ContactHomepage/ContactPage"
import ProjetsPage from "./components/Projets/ProjetsPage"
import TestHomePageScroll from "./components/TestHomePageScroll/TestHomePageScroll"
import TestHomePageMobile from "./components/TestHomePageScroll/TestHomepageMobile"

import Equipe from "./components/Equipe/Equipe"

import { Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"


function App() {

  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 1020px)").matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1020px)");
    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    // Ajoute un écouteur d'événements pour les changements de taille d'écran
    mediaQuery.addListener(handleResize);

    // Retire l'écouteur d'événements lors du démontage du composant
    return () => {
      mediaQuery.removeListener(handleResize);
    };
  }, []);


  return (
    <>
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Navbar />
              {isMobile ? <><TestHomePageMobile /><Footer/></> : <TestHomePageScroll />}
            </>
          } 
        />

        <Route
          path="/equipe"
          element={
            <>
              <Navbar />
              <HeroOtherPage title={"Notre Equipe"}/>
              <Equipe/>
              <Footer/>
            </>
          }
        />

        <Route
          path="/services"
          element={
            <>
              <Navbar />
              <HeroOtherPage title={"Nos Services"}/>
              <PageServices/>
              <Testimonials/>
              <Footer/>
            </>
          }
        />

        <Route
          path="/projets"
          element={
            <>
              <Navbar />
              <HeroOtherPage title={"Nos Projets"}/>
              <ProjetsPage/>
              <Footer/>
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <HeroOtherPage title={"Contactez-nous"}/>
              <ContactPage />
              <Footer/>
            </>
          }
        />
        
      </Routes>
    </>
  )
}

export default App
