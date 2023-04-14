import { useState, useRef } from "react"
import Headers from "./Headers"
import Footer from "./Footers"

const HomePage = () => {

    return (
        <div>
            <Headers act1='text-bg-success text-center' />

            <div className="vh-100 d-flex justify-content-center align-items-center flex-column" style={{
                backgroundImage: 'url(https://marketplace.canva.com/EAD2962NKnQ/2/0/1600w/canva-rainbow-gradient-pink-and-purple-virtual-background-_Tcjok-d9b4.jpg)',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                opacity: 0.8,
                backgroundColor: 'black',
            }}>
                <div className="landing d-flex justify-content-start flex-column" style={{
                    fontFamily: 'Arvo, serif',
                }}>
                    <div className="container">
                        <h1 className="" style={{
                            fontSize: 100
                        }}>Welcome To</h1>
                        <h1 style={{
                            fontSize: 50
                        }}>Dinamika Digital Printing</h1>
                        <h4 className="font-monospace" style={{
                            letterSpacing: 10
                        }}>Web For Calulating</h4>
                        <button className="pt-0 pb-0 btnLanding" style={{
                            width: 200,
                            height: 50,
                            backgroundColor: '#8ca0d7',
                            border: 'none',
                            borderRadius: 30,
                            marginTop: 50,
                            fontSize: 30,
                            transition: 'all .3s',
                        }}>
                            <a href="#aboutPage" className="text-white text-decoration-none">About Me</a>
                        </button>
                    </div>
                </div>
            </div>

            <div className="py-5 my-5 container d-flex justify-content-between align-items-center flex-sm-column flex-lg-row" id="aboutPage">
                <div className="image d-flex justify-content-center align-items-center">
                    <img src="https://img.freepik.com/premium-photo/showing-peace-sign-beautiful-asian-woman-isolated-white-background_9028-10895.jpg?w=740" alt="" style={{
                        width: 500
                    }} />
                </div>
                <div style={{
                }} className="w-100 px-5">
                    <h5>Who Us?</h5>
                    <h1 style={{
                        color: '#8ca0d7',
                        fontFamily: 'Arvo, serif'
                    }}>About Me</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quisquam quam necessitatibus voluptatum magni neque eos, ea dolore nisi dolorem rerum molestias illo totam? Amet velit voluptate animi culpa aut fugit omnis ipsam inventore. Dolore impedit non hic. Animi, officia voluptate culpa rem amet aliquam vel illum <br /> laborum voluptatem esse cupiditate? Porro quam enim distinctio voluptate perferendis. Explicabo accusantium sequi dicta commodi corporis facilis molestias veritatis voluptate vero voluptatibus, qui iste natus ullam rem reprehenderit laudantium corrupti magni totam quo similique, optio necessitatibus quia minus ipsum! Aspernatur, explicabo! Nihil aperiam pariatur vero corrupti et rerum. Provident aut non quisquam totam!</p>
                    <button className="btnCV" style={{
                        color: '#8ca0d7',
                        border: '1px solid #8ca0d7',
                        padding: 10,
                        borderRadius: 30,
                        backgroundColor: 'transparent',
                        transition: 'all .3s'
                    }}>Download CV</button>
                </div>
            </div>

            <div className="py-5 my-5 container d-flex justify-content-center align-items-center flex-column">
                <div className="title text-center">
                    <h5>What I Do?</h5>
                    <h1 style={{
                        color: '#8ca0d7',
                        fontFamily: 'Arvo, serif'
                    }}>Service</h1>
                </div>
                <div className="py-5 container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3 py-5 d-flex justify-content-center align-items-center flex-column  container" style={{

                        }}>
                            <div className="container p-5 columnService" style={{
                                border: '1px solid #8ca0d7',
                                transition: 'all, .5s',
                                borderRadius: 5,
                                position: 'relative'
                            }}>
                                <div className="icons d-flex justify-content-center align-items-center flex-column" style={{
                                    transition: 'all .5s'
                                }}>
                                    <i className="fa-solid fa-umbrella-beach " style={{
                                        fontSize: 70
                                    }} />
                                    <h2 className="mt-3" style={{
                                        color: '#8ca0d7',
                                        fontFamily: 'Arvo, serif'
                                    }}>Advestising</h2>
                                </div>
                                <p style={{
                                    opacity: 0,
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    transition: 'opacity 0.3s ease',
                                    padding: '10px',
                                    textAlign: 'center'
                                }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia obcaecati accusamus atque illum itaque. Iste totam perspiciatis soluta placeat fugit, itaque facilis</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 py-5 d-flex justify-content-center align-items-center flex-column  container" style={{

                        }}>
                            <div className="container p-5 columnService" style={{
                                border: '1px solid #8ca0d7',
                                transition: 'all, .5s',
                                borderRadius: 5,
                                position: 'relative'
                            }}>
                                <div className="icons d-flex justify-content-center align-items-center flex-column" style={{
                                    transition: 'all .5s'
                                }}>
                                    <i className="fa-solid fa-umbrella-beach " style={{
                                        fontSize: 70
                                    }} />
                                    <h2 className="mt-3" style={{
                                        color: '#8ca0d7',
                                        fontFamily: 'Arvo, serif'
                                    }}>Advestising</h2>
                                </div>
                                <p style={{
                                    opacity: 0,
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    transition: 'opacity 0.3s ease',
                                    padding: '10px',
                                    textAlign: 'center'
                                }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia obcaecati accusamus atque illum itaque. Iste totam perspiciatis soluta placeat fugit, itaque facilis</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 py-5 d-flex justify-content-center align-items-center flex-column  container" style={{

                        }}>
                            <div className="container p-5 columnService" style={{
                                border: '1px solid #8ca0d7',
                                transition: 'all, .5s',
                                borderRadius: 5,
                                position: 'relative'
                            }}>
                                <div className="icons d-flex justify-content-center align-items-center flex-column" style={{
                                    transition: 'all .5s'
                                }}>
                                    <i className="fa-solid fa-umbrella-beach " style={{
                                        fontSize: 70
                                    }} />
                                    <h2 className="mt-3" style={{
                                        color: '#8ca0d7',
                                        fontFamily: 'Arvo, serif'
                                    }}>Advestising</h2>
                                </div>
                                <p style={{
                                    opacity: 0,
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    transition: 'opacity 0.3s ease',
                                    padding: '10px',
                                    textAlign: 'center'
                                }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia obcaecati accusamus atque illum itaque. Iste totam perspiciatis soluta placeat fugit, itaque facilis</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 py-5 d-flex justify-content-center align-items-center flex-column  container" style={{

                        }}>
                            <div className="container p-5 columnService" style={{
                                border: '1px solid #8ca0d7',
                                transition: 'all, .5s',
                                borderRadius: 5,
                                position: 'relative'
                            }}>
                                <div className="icons d-flex justify-content-center align-items-center flex-column" style={{
                                    transition: 'all .5s'
                                }}>
                                    <i className="fa-solid fa-umbrella-beach " style={{
                                        fontSize: 70
                                    }} />
                                    <h2 className="mt-3" style={{
                                        color: '#8ca0d7',
                                        fontFamily: 'Arvo, serif'
                                    }}>Advestising</h2>
                                </div>
                                <p style={{
                                    opacity: 0,
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    transition: 'opacity 0.3s ease',
                                    padding: '10px',
                                    textAlign: 'center'
                                }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia obcaecati accusamus atque illum itaque. Iste totam perspiciatis soluta placeat fugit, itaque facilis</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-5 my-5 container d-flex justify-content-center align-items-center flex-column">
                <div className="title text-center">
                    <h5>What I Did?</h5>
                    <h1 style={{
                        color: '#8ca0d7',
                        fontFamily: 'Arvo, serif'
                    }}>Portfolio</h1>
                </div>
                <div className="py-5 container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-4 py-5 d-flex justify-content-center align-items-center flex-column  container" style={{

                        }}>
                            <div className="hoverPort" style={{
                                position: 'relative'
                            }}>
                                <img src="https://img.freepik.com/free-photo/overhead-view-stationeries-laptop-beige-background_23-2147879802.jpg?w=740&t=st=1681498829~exp=1681499429~hmac=11bd5bd5a440271417c910eccbe6d2948bad963e4b322da5856706b6b6be4d5d" alt={true} width={350}  className="rounded-3"/>
                                <div className="textHover d-flex justify-content-center align-items-center flex-column rounded-3" style={{
                                    opacity: 0,
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    transition: 'opacity 0.3s ease',
                                    padding: '10px',
                                    textAlign: 'center',
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(140, 160, 215, 0.7)'
                                }}>
                                    <h1 className="fw-bolder" style={{
                                        fontFamily: 'Arvo, serif',
                                        color: '#f20089',
                                    }}>Photocopy</h1>
                                    <h5>Category: Services</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 py-5 d-flex justify-content-center align-items-center flex-column  container" style={{

                        }}>
                            <div className="hoverPort" style={{
                                position: 'relative'
                            }}>
                                <img src="https://img.freepik.com/free-photo/overhead-view-stationeries-laptop-beige-background_23-2147879802.jpg?w=740&t=st=1681498829~exp=1681499429~hmac=11bd5bd5a440271417c910eccbe6d2948bad963e4b322da5856706b6b6be4d5d" alt={true} width={350}  className="rounded-3"/>
                                <div className="textHover d-flex justify-content-center align-items-center flex-column rounded-3" style={{
                                    opacity: 0,
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    transition: 'opacity 0.3s ease',
                                    padding: '10px',
                                    textAlign: 'center',
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(140, 160, 215, 0.7)'
                                }}>
                                    <h1 className="fw-bolder" style={{
                                        fontFamily: 'Arvo, serif',
                                        color: '#f20089',
                                    }}>Photocopy</h1>
                                    <h5>Category: Services</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 py-5 d-flex justify-content-center align-items-center flex-column  container" style={{

                        }}>
                            <div className="hoverPort" style={{
                                position: 'relative'
                            }}>
                                <img src="https://img.freepik.com/free-photo/overhead-view-stationeries-laptop-beige-background_23-2147879802.jpg?w=740&t=st=1681498829~exp=1681499429~hmac=11bd5bd5a440271417c910eccbe6d2948bad963e4b322da5856706b6b6be4d5d" alt={true} width={350}  className="rounded-3"/>
                                <div className="textHover d-flex justify-content-center align-items-center flex-column rounded-3" style={{
                                    opacity: 0,
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    transition: 'opacity 0.3s ease',
                                    padding: '10px',
                                    textAlign: 'center',
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(140, 160, 215, 0.7)'
                                }}>
                                    <h1 className="fw-bolder" style={{
                                        fontFamily: 'Arvo, serif',
                                        color: '#f20089',
                                    }}>Photocopy</h1>
                                    <h5>Category: Services</h5>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default HomePage