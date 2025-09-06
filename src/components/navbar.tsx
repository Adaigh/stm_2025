/**
 * NavBar.tsx
 * This file serves as the Navigation Bar component for the app,
 * containing the logo and navigation links to the About and Shop sections.
 * 
 * Author: Alexander Daigh
 * Date: 06-10-2025
 * Version: 1.0.0
 */

import STM_logo from '/images/STMlogo.webp'

export default function NavBar() {
    return (
        <div className="base-div">

            <nav className="navbar flex-column flex-md-row align-items-center justify-content-start" data-bs-theme="dark">
                    <div className="navbar-brand me-md-auto my-3">
                        <img src={STM_logo} alt="STM Tuning, European import automotive mechanics." width="272" height="80"/>
                    </div>
                    <div className='d-flex '>
                    <a className="nav-link text-center mx-5 my-3" href="#about">
                        About Us
                    </a>
                    <a className="nav-link text-center mx-5 my-3" href="#shop">
                        Info
                    </a>
                    </div>
            </nav>
        </div>
    )
}