/**
 * App.tsx
 * This file serves as the main layout component for the app,
 * contorlling the rendering of the navigation bar and various sections
 * including Hero, Affiliates, About, and Contact components.
 * 
 * Author: Alexander Daigh
 * Date: 06-10-2025
 * Version: 1.0.0
 */

import NavBar from "./components/navbar"
import Hero from "./components/hero"
import About from "./components/about"
import Contact from "./components/contact"
import Affiliates from "./components/affiliates"
import TopButton from "./components/topbutton"

export default function App() {

  return (
    <div>
      <NavBar />
      <TopButton />
      <Sections />
    </div>
  )
}


function Sections() {

  return (
    <>
      <div className="card-light">
          <Hero />
          <Affiliates />
      </div>
      <div className="card-blue">
          <About />
      </div>
      <div className="card-light">
          <Contact />
      </div>
    </>
  )

}
