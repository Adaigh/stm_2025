// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import NavBar from "./components/navbar"
import Main from "./components/main"
import About from "./components/about"
import Contact from "./components/contact"
import { ReactNode } from "react"

export default function App() {

  return (
    <div className="bg-dark">
      <NavBar />
      <Sections />
    </div>
  )
}


function Sections() {
  const included: ReactNode[] = [<Main />, <About />, <Contact />];

  return (
    <>
      {included.map((item) => {
        return (
          <div className="gradient">
            <div className="section">
              {item}
            </div>
          </div>
        )
      })}
    </>
  )

}
