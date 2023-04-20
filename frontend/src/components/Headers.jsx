import { useState, useEffect } from "react"


const Headers = (props) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
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
            navbar.classList.remove('bg-transparent');
        } else {
            navbar.classList.add('bg-transparent');
            navbar.classList.remove('bg-dark', 'navbar-dark');
        }
    }, [isScrolled]);
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top" aria-label="Offcanvas navbar large">
                <div className="container-fluid ">
                    <a className="navbar-brand p-0 titleHead" href="/" style={{
                        fontFamily: 'Arvo, serif',
                        fontSize: 30,
                        fontWeight: 900
                    }}>Dinimika Digital Printing</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Menu</h5>
                            <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close" />
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-2 text-uppercase fw-medium">
                                <li className="nav-item">
                                    <a className={`nav-link ${props.act1} rounded-3`} aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link rouded-3`} href="/#contactPage">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${props.act2} rounded-3`} href="/stock">Stock</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link" href="/admin/dashboard">
                                        Admin
                                    </a>
                                </li>
                            </ul>
                            <a href="" className="btn btn-success">LOGIN</a>
                        </div>
                    </div>
                </div>
            </nav>

            
        </div>
    )
}

export default Headers