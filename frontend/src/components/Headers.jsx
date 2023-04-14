import { useState, useEffect } from "react"


const Headers = (props) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 100);
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    useEffect(() => {
      const navbar = document.querySelector('.navbar');
      if (isScrolled) {
        navbar.classList.add('bg-dark', 'navbar-dark');
      } else {
        navbar.classList.remove('bg-dark', 'navbar-dark');
      }
    }, [isScrolled]);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top" aria-label="Offcanvas navbar large" style={{
                borderBottom: '1px solid grey'
            }}>
                <div className="container-fluid">
                    <a className="navbar-brand text-" href="#">Dinimika Digital Printing</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Menu</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" />
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-5 text-uppercase fw-medium">
                                <li className="nav-item">
                                    <a className={`nav-link ${props.act1} rounded-3`} aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${props.act2}`} href="#">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${props.act3} `} href="#">Stock</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Admin
                                    </a>
                                    <ul className="dropdown-menu text-capitalize">
                                        <li><a className="dropdown-item" href="#">Dasboard</a></li>
                                        <li><a className="dropdown-item" href="#">Recap</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <a href="" className="btn btn-primary me-3">Login</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Headers