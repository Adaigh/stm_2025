// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import NavBar from "./components/navbar"
import Main from "./components/main"
import About from "./components/about"
import Contact from "./components/contact"

export default function App() {
  return (
    <div className="bg-dark">
      <NavBar />
      <Main />
      <About />
      <Contact />
    </div>
  )
}
