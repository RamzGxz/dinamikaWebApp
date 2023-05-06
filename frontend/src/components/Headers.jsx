import { useState, useEffect, useRef, useCallback } from "react"
import { Link } from "react-router-dom";
import Alerts from "./Alerts";


const Headers = (props) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        const navbar = document.querySelector('.navbar');
        const btnLogout = document.querySelector('.btnLogout')
        if (isScrolled) {
            navbar.classList.add('bg-dark', 'navbar-dark')
            navbar.classList.remove('bg-transparent')
            if (btnLogout) {
                btnLogout.classList.remove('btn-outline-danger')
                btnLogout.classList.add('btn-danger')
            }
        } else {
            navbar.classList.add('bg-transparent')
            navbar.classList.remove('bg-dark', 'navbar-dark')
            if (btnLogout) {
                btnLogout.classList.remove('btn-danger')
                btnLogout.classList.add('btn-outline-danger')
            }
        }
    }, [isScrolled]);

    const username = useRef(null)
    const password = useRef(null)
    const [isLogin, setIsLogin] = useState(
        localStorage.getItem('isLoggedIn') === 'true'
    )
    const [user, setUser] = useState({})

    useEffect(() => {
        localStorage.setItem('isLoggedIn', isLogin)
    }, [isLogin])

    useEffect(() => {
        const storedUser = localStorage.getItem('user')
        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }
    }, [])

    const handleClickLogout = () => {
        const conn = confirm('are you sure want to leave?')
        if(conn){
            setIsLogin(false)
        }
    }

    const handleClose = () => {
        const form = document.getElementById('formLogin')
        const wrap = document.getElementById('loginForm')
        wrap.style.opacity = '0'
        setTimeout(() => {
            wrap.style.visibility = 'hidden'
        }, 750)
        form.reset()
    }

    const handleSubmit = useCallback(async (e) => {
        const form = document.getElementById('formLogin')
        const wrap = document.getElementById('loginForm')
        e.preventDefault()
        const usernameVal = username.current.value
        const passwordVal = password.current.value
        fetch('http://localhost:4444/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: usernameVal,
                password: passwordVal
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else if (res.status === 401) {
                    alert('maaf username atau password salah!')
                    form.reset()
                    setIsLogin(false)
                } else {
                    setIsLogin(false)
                    throw new Error('Network response failed')
                }
            })
            .then(result => {
                alert(`login succesfully welcome ${result.data[0].username}`)
                wrap.style.opacity = '0'
                setTimeout(() => {
                    wrap.style.visibility = 'hidden'
                }, 750)
                setIsLogin(true)
                const user = { username: result.data[0].username }
                localStorage.setItem('user', JSON.stringify(user))
                setUser(user)
            })
            .catch(err => console.log(err))
    })

    let clicked = 0
    const handleViewPass = () => {
        const input = document.getElementById('passwordLogin')
        const icon1 = document.getElementById('i1')
        const icon2 = document.getElementById('i2')
        clicked++
        if (clicked === 1) {
            input.setAttribute('type', 'text')
            icon2.classList.remove('d-none')
            icon1.classList.add('d-none')

        } else {
            input.setAttribute('type', 'password')
            icon2.classList.add('d-none')
            icon1.classList.remove('d-none')
            clicked = 0
        }
    }

    const hideOffcanvas = () => {
        const offcanvas = document.querySelector('.offcanvas')
        const backdrop = document.querySelector('.offcanvas-backdrop')
        if (offcanvas && backdrop) {
            offcanvas.classList.remove('show')
            backdrop.classList.remove('show')
        }
    }

    const handleClickLogin = () => {
        const wrap = document.getElementById('loginForm')
        wrap.style.opacity = '1'
        wrap.style.visibility = 'visible'

        wrap.addEventListener('wheel', (e) => {
            e.preventDefault()
        })
        hideOffcanvas()
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top" aria-label="Offcanvas navbar large">
                <div className="container-fluid ">
                    <Link to='/' className="navbar-brand p-0 titleHead" style={{
                        fontFamily: 'Arvo, serif',
                        fontSize: 30,
                        fontWeight: 900
                    }}>Dinimika Digital Printing</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="offcanvas offcanvas-end offcanvas-lg" tabIndex={-1} id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label" data-bs-scroll="true">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Menu</h5>
                            <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close" />
                        </div>
                        <div className="offcanvas-body position-relative">
                            <ul className="navbar-nav justify-content-end flex-grow-1 text-uppercase fw-medium">
                                <li className="nav-item">
                                    <Link to='/' className={`nav-link ${props.act1} rounded-3`} onClick={hideOffcanvas}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <a href='/#contactPage' className={`nav-link rouded-3`} onClick={hideOffcanvas}>Contact</a>
                                </li>
                                <li className="nav-item">
                                    <Link to='/stock' className={`nav-link ${props.act2} rounded-3`} onClick={hideOffcanvas}>Stock</Link>
                                </li>
                                <li className="nav-item ">
                                    {isLogin ? (
                                        <Link to='/admin/dashboard' className={`nav-link rounded-3`} onClick={hideOffcanvas}>Admin</Link>
                                    ) : (
                                        <a href='#' className={`nav-link rounded-3`} onClick={() => alert('please login first!')}>Admin</a>
                                    )}
                                </li>
                                {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu kwkw" style={{
                                        zIndex: 99999999,
                                        position: 'absolute'
                                    }}>
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li> */}
                                {user && isLogin ? (
                                    <li className="nav-item">
                                        <button className="btn btn-outline-danger text-capitalize btnLogout" onClick={() => handleClickLogout()}>
                                            <i className="fa-solid fa-right-from-bracket me-1"></i>
                                            {user.username}
                                        </button>
                                    </li>
                                ) : (
                                    <li className="nav-item">
                                        <button className="btn btn-success" onClick={() => handleClickLogin()}>LOGIN</button>
                                    </li>
                                )}
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>

            <div className="loginForm d-flex justify-content-between align-items-center" id="loginForm" >
                <div className="formWrapper container row rounded-3 py-3 position-fixed">
                    <button className="btn btn-close btn-lg" style={{
                        position: 'absolute',
                        top: 10,
                        right: 10
                    }} onClick={() => handleClose()}></button>
                    <div className="d-flex justify-content-center align-items-center container col-lg-6 col-sm-12">
                        <img src="https://img.freepik.com/free-vector/working-characters-flat-design-web-banner_1308-128001.jpg?w=740&t=st=1682517692~exp=1682518292~hmac=cfefad1ec05b4a0fcb4bf88736f24bb633bcc289197a65dc0af821b1c101b843" alt="" className="img-fluid w-75" />
                    </div>
                    <div className="d-flex justify-content-center align-items-center container flex-column col-lg-6 col-sm-12">
                        <form action="" className="d-flex flex-column w-100" id="formLogin" onSubmit={(e) => handleSubmit(e)}>
                            <h1 className="mb-4" style={{
                                fontWeight: 700
                            }}>Login</h1>
                            <div className="d-flex align-items-center py-1 border-bottom border-black border-1 mb-4">
                                <i className="fa-solid fa-user-secret fs-3 me-2"></i>
                                <input type="text" className=" w-100 px-2 border-0 " placeholder="username" ref={username} />
                            </div>
                            <div className="d-flex align-items-center py-1 border-bottom border-black border-1 mb-4">
                                <i className="fa-solid fa-unlock-keyhole fs-3 me-2"></i>
                                <input type="password" className=" w-100 px-2 border-0 " placeholder="password" ref={password} id="passwordLogin" />
                                <i className="fa-solid fa-eye-slash visiblePass" onClick={() => handleViewPass()} id="i1"></i>
                                <i className="fa-solid fa-eye d-none visiblePass" onClick={() => handleViewPass()} id="i2"></i>
                            </div>
                            <button className="btn btn-outline-dark w-75 m-auto fw-bolder fs-4 mt-5" type="submit">LOGIN</button>
                        </form>
                    </div>
                </div>
            </div>

            <Alerts/>
        </div>
    )
}

export default Headers