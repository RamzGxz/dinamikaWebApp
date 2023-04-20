const Sidebar = () => {

    return (
        <div>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark vh-100 sideBar position-fixed" style={{ width: 240 }}>
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <i className="fa-solid fa-skull fs-3"></i>
                    <span className="fs-3 ms-3">Dinamika</span>
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li>
                        <a href="#" className="nav-link text-white fs-5 active">
                            <i className="fa-solid fa-gauge-high me-2" />
                            Dashboard
                        </a>
                    </li>
                    <li>

                        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle fs-5 nav-link" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa-solid fa-table me-2" />
                            Recap
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                            <li><a className="dropdown-item" href="#">Recap Harian</a></li>
                            <li><a className="dropdown-item" href="#">Recap Mingguan</a></li>
                            <li><a className="dropdown-item" href="#">Recap Tahunan</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="/" className="nav-link text-white fs-5">
                            <i className="fa-solid fa-arrow-left me-2"></i>
                            Back To Home
                        </a>
                    </li>
                </ul>
                <hr />
                <div className="dropdown">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt width={32} height={32} className="rounded-circle me-2" />
                        <strong>mdo</strong>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default Sidebar