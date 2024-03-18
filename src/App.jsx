import Navbar from "./components/Navbar/Navbar"
import Testimonials from "./components/Testimonials/Testimonials"
import Footer from "./components/Footer/Footer"
import HeroOtherPage from "./components/Hero/HeroOtherPage"
import PageServices from "./components/PageServices/PageServices"
import ContactPage from "./components/ContactHomepage/ContactPage"
import ProjetsPage from "./components/Projets/ProjetsPage"
import TestHomePageScroll from "./components/TestHomePageScroll/TestHomePageScroll"
import TestHomePageMobile from "./components/TestHomePageScroll/TestHomepageMobile"

import WebPage from "./components/PageServices/WebPage"
import PrintPage from "./components/PageServices/PrintPage"
import GestionRS from "./components/PageServices/GestionRS"
import PublicitesPage from "./components/PageServices/PublicitésPage"

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

        <Route
          path="/services/web"
          element={
            <>
              <Navbar />
              <HeroOtherPage title={"Web et web mobile"}/>
              <WebPage/>
              <Footer/>
            </>
          }
        />

        <Route
          path="/services/print"
          element={
            <>
              <Navbar />
              <HeroOtherPage title={"Logo et supports imprimés"}/>
              <PrintPage/>
              <Footer/>
            </>
          }
        />

        <Route
          path="/services/gestion-rs"
          element={
            <>
              <Navbar />
              <HeroOtherPage title={"Gestion des réseaux sociaux"}/>
              <GestionRS/>
              <Footer/>
            </>
          }
        />

        <Route
          path="/services/publicites"
          element={
            <>
              <Navbar />
              <HeroOtherPage title={"Publicités en ligne"}/>
              <PublicitesPage/>
              <Footer/>
            </>
          }
        />
        
      </Routes>
    </>
  )
}

export default App
