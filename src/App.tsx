// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import NavBar from "./components/navbar"
import Main from "./components/main"
import About from "./components/about"
import Contact from "./components/contact"
import Affiliates from "./components/affiliates"

export default function App() {

  return (
    <div className="">
      <NavBar />
      <Sections />
    </div>
  )
}


function Sections() {

  return (
    <>
      <div className="card-light">
        {/* <div className="section"> */}
          <Main />
          <Affiliates />
        {/* </div> */}
      </div>
      <div className="card-blue">
        {/* <div className="section"> */}
          <About />
        {/* </div> */}
      </div>
      <div className="card-light">
        {/* <div className="section"> */}
          <Contact />
        {/* </div> */}
      </div>
    </>
  )

}
