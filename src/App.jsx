import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Services from "./components/Services/Services"
import Description from "./components/Description/Description"
import Realisations from "./components/Realisations/Realisation"
import ContactHomepage from "./components/ContactHomepage/ContactHomepage"
import Testimonials from "./components/Testimonials/Testimonials"
import Footer from "./components/Footer/Footer"
import HeroOtherPage from "./components/Hero/HeroOtherPage"
import Timeline from "./components/Equipe/Timeline"

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
              <Timeline/>
              <Footer/>
            </>
          }
        />
        
      </Routes>
    </>
  )
}

export default App
