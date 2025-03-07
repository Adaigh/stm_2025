import STM_logo from '../assets/STMlogo.png'

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark" data-bs-theme="dark">
            <div className='container-fluid'>
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className='nav-item'>
                        <a className="nav-link active" href="/">
                        <figure>
                            <img src={STM_logo} alt="STM Tuning, European import automotive mechanics."/>
                        </figure>
                            {/* Home */}
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className="nav-link" href="#about">
                            About Us
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className="nav-link" href="#shop">
                            Info
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}