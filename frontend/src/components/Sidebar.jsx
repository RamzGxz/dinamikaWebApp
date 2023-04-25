import { Link } from "react-router-dom"

const Sidebar = (props) => {

    return (
        <div>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark vh-100 sideBar position-fixed" style={{ width: 240 }}>
                <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none text">
                    <i className="fa-solid fa-skull fs-3"></i>
                    <span className="fs-3 ms-3 text">Dinamika</span>
                </Link>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li>
                        <Link to="/admin/dashboard" className={`nav-link text-white fs-6 text ${props.sideAct1} d-flex align-items-center iconSide`}>
                            <i className="fa-solid fa-gauge-high me-2" />
                            <p className="mb-0 ">Dashboard</p>
                        </Link>
                    </li>
                    <li>

                        <Link to="#" className={`d-flex align-items-center text text-white text-decoration-none dropdown-toggle fs-6 nav-link ${props.sideAct2} iconSide`} data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa-solid fa-table me-2" />
                            <p className="mb-0 ">Recap</p>
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                            <li><Link className={`dropdown-item ${props.sideAct2}`} to="#">Recap Harian</Link></li>
                            <li><Link className={`dropdown-item ${props.sideAct3}`} to="#">Recap Mingguan</Link></li>
                            <li><Link className={`dropdown-item ${props.sideAct4}`} to="#">Recap Tahunan</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/" className="nav-link text text-white fs-6 d-flex align-items-center iconSide">
                            <i className="fa-solid fa-arrow-left me-2"></i>
                            <p className="mb-0 ">Back To Home</p>
                        </Link>
                    </li>
                </ul>
                <hr />
                <div className="dropdown text">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt width={32} height={32} className="rounded-circle me-2" />
                        <strong className="">mdo</strong>
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