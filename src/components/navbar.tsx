import STM_logo from '../assets/STMlogo.png'

export default function NavBar() {
    return (
        <div className="base-div">

            <nav className="navbar flex-column flex-md-row align-items-center justify-content-start" data-bs-theme="dark">
                    <a className="navbar-brand me-md-auto" href="/">
                        <img src={STM_logo} alt="STM Tuning, European import automotive mechanics." width="272" height="80"/>
                    </a>
                    <a className="nav-link text-center mx-5" href="#about">
                        About Us
                    </a>
                    <a className="nav-link text-center mx-5" href="#shop">
                        Info
                    </a>
            </nav>
        </div>
    )
}