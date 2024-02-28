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

import Equipe from "./components/Equipe/Equipe"

import { Route, Routes } from "react-router-dom"


function App() {

  return (
    <>
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Navbar />
              <Hero />
              <Description/>
              <Services />
              <Realisations />
              <ContactHomepage />
              <Testimonials />
              <Footer />
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
              <RealisationPage/>
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
