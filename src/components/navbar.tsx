export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-sm bg-body-tertiary">
            <div className='container-fluid'>
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className='nav-item'>
                        <a className="nav-link active" href="/">
                            Home
                        </a>
                    </li>
                    <li className='nav-item me-auto'>
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