import STM_logo from '../assets/STMlogo.png'

export default function NavBar() {
    return (
        <div className="base-div">

            <nav className="navbar bg-dark" data-bs-theme="dark">
                <div className='container-fluid'>
                    <a className="navbar-brand" href="/">
                        <img src={STM_logo} alt="STM Tuning, European import automotive mechanics." />
                    </a>
                    <a className="nav-link" href="#about">
                        About Us
                    </a>
                    <a className="nav-link" href="#shop">
                        Info
                    </a>
                </div>
            </nav>
        </div>
    )
}