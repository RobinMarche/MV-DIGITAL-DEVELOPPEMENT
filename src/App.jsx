import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Services from "./components/Services/Services"
import Description from "./components/Description/Description"
import Realisations from "./components/Realisations/Realisation"
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
            </>
          } />
      </Routes>
    </>
  )
}

export default App
