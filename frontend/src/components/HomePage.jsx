import { useState, useRef } from "react"
import Headers from "./Headers"
import Footer from "./Footers"

const HomePage = () => {
    const [likes, setLikes] = useState(10)
    const [comments, setComments] = useState(5)
    const [likes2, setLikes2] = useState(26)
    const [comments2, setComments2] = useState(15)

    return (
        <div>
            <Headers act1='text-bg-success text-center active' />

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
                    <div className="container titleHomePage">
                        <h1 className="wel" style={{
                            fontSize: 100
                        }}>Welcome To</h1>
                        <h1 className="din" style={{
                            fontSize: 50
                        }}>Dinamika Digital Printing</h1>
                        <h4 className="font-monospace" style={{
                            letterSpacing: 10
                        }}>Web For Calulating</h4>
                        <button className="pt-0 pb-0 btnLanding d-flex justify-content-center align-items-center" style={{
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

            <div className="py-5 my-5 container d-flex align-items-center pageAbout" id="aboutPage">
                <div className="image d-flex justify-content-center align-items-center">
                    <img src="https://img.freepik.com/premium-photo/showing-peace-sign-beautiful-asian-woman-isolated-white-background_9028-10895.jpg?w=740" alt="" className="imageAbout" style={{
                        width: 500
                    }} />
                </div>
                <div className="w-100 px-5 content">
                    <h5 className="text-black-50">Who Us?</h5>
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
                    <h5 className="text-black-50">What I Do?</h5>
                    <h1 style={{
                        color: '#8ca0d7',
                        fontFamily: 'Arvo, serif'
                    }}>Service</h1>
                </div>
                <div className="py-5 container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3 py-5 d-flex justify-content-center align-items-center flex-column  container">
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
                        <div className="col-sm-6 col-lg-3 py-5 d-flex justify-content-center align-items-center flex-column  container">
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
                        <div className="col-sm-6 col-lg-3 py-5 d-flex justify-content-center align-items-center flex-column  container">
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
                        <div className="col-sm-6 col-lg-3 py-5 d-flex justify-content-center align-items-center flex-column  container">
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
                    <h5 className="text-black-50">What I Did?</h5>
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
                                <img src="https://img.freepik.com/free-photo/overhead-view-stationeries-laptop-beige-background_23-2147879802.jpg?w=740&t=st=1681498829~exp=1681499429~hmac=11bd5bd5a440271417c910eccbe6d2948bad963e4b322da5856706b6b6be4d5d" alt={true} width={350} className="rounded-3" />
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
                                    backgroundImage: 'linear-gradient(to top, #e1dfed 0%, rgba(225, 223, 237, 0.7) 99%, rgba(225, 223, 237, 0.8) 100%)'
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
                                <img src="https://img.freepik.com/free-photo/overhead-view-stationeries-laptop-beige-background_23-2147879802.jpg?w=740&t=st=1681498829~exp=1681499429~hmac=11bd5bd5a440271417c910eccbe6d2948bad963e4b322da5856706b6b6be4d5d" alt={true} width={350} className="rounded-3" />
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
                                    backgroundImage: 'linear-gradient(to top, #e1dfed 0%, rgba(225, 223, 237, 0.7) 99%, rgba(225, 223, 237, 0.8) 100%)'
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
                                <img src="https://img.freepik.com/free-photo/overhead-view-stationeries-laptop-beige-background_23-2147879802.jpg?w=740&t=st=1681498829~exp=1681499429~hmac=11bd5bd5a440271417c910eccbe6d2948bad963e4b322da5856706b6b6be4d5d" alt={true} width={350} className="rounded-3" />
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
                                    backgroundImage: 'linear-gradient(to top, #e1dfed 0%, rgba(225, 223, 237, 0.7) 99%, rgba(225, 223, 237, 0.8) 100%)'
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

            <div className="w-100 d-flex justify-content-center align-items-center flex-column" style={{
                backgroundColor: '#8ca0d7'
            }}>
                <h1 style={{ fontFamily: 'Arvo, serif', color: 'white' }} className="p-3">Wanna Join ?</h1>
                <a href="" className="btn btn-light btn-lg fw-bolder mb-3">Hire me!</a>
            </div>

            <div className="py-5 my-5 container d-flex justify-content-center align-items-center flex-column">
                <div className="title text-center">
                    <h5 className="text-black-50">What They Say?</h5>
                    <h1 style={{
                        color: '#8ca0d7',
                        fontFamily: 'Arvo, serif'
                    }}>Testimonial</h1>
                </div>

                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 colTesti">
                            <div className="container d-flex justify-content-center align-items-center position-relative py-2 w-75" style={{
                                border: '1px solid grey'
                            }}>
                                <div className="image rounded-circle" style={{
                                    backgroundImage: 'url(https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg)',
                                    backgroundPosition: 'top',
                                    backgroundSize: 'cover',
                                    width: 95,
                                    height: 95,
                                    position: 'absolute',
                                    left: -55
                                }}></div>
                                <div className="ps-5">
                                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic error, voluptates recusandae incidunt, sint nam nesciunt quidem dignissimos omnis provident debitis natus veniam, iste officia fugit at? Non, neque quam!</p>
                                    <h3 style={{
                                        color: '#8ca0d7',
                                        fontWeight: 900,
                                    }} className="mb-0 mt-0">Mark Seith</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div className="container d-flex justify-content-center align-items-center position-relative py-2 w-75" style={{
                                border: '1px solid grey'
                            }}>
                                <div className="image rounded-circle" style={{
                                    backgroundImage: 'url(https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg)',
                                    backgroundPosition: 'top',
                                    backgroundSize: 'cover',
                                    width: 95,
                                    height: 95,
                                    position: 'absolute',
                                    left: -55
                                }}></div>
                                <div className="ps-5">
                                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic error, voluptates recusandae incidunt, sint nam nesciunt quidem dignissimos omnis provident debitis natus veniam, iste officia fugit at? Non, neque quam!</p>
                                    <h3 style={{
                                        color: '#8ca0d7',
                                        fontWeight: 900,
                                    }} className="mb-0 mt-0">Mark Seith</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="py-5 my-5 container d-flex justify-content-center align-items-center flex-column">
                <div className="title text-center">
                    <h5 className="text-black-50">Recent Post</h5>
                    <h1 style={{
                        color: '#8ca0d7',
                        fontFamily: 'Arvo, serif'
                    }}>Blog</h1>
                </div>
                <div className="row my-3 container d-flex justify-content-center align-items-center">
                    <div className="col-12 mb-3">
                        <div className="card d-flex flex-row cardBlog">
                            <img src="https://img.freepik.com/free-photo/asian-woman-holding-laptop-computer-while-looking-camera-gray-background_231208-2169.jpg?w=1060&t=st=1681585400~exp=1681586000~hmac=89d64ae61190e213a61d8543408122a2e0a539922845594ddc55c172208727ac" alt="" width={400} className=" imageBlog p-2" />
                            <div className="card-body p-4">
                                <h4 className="card-title mb-2" style={{
                                    color: '#8ca0d7',
                                    fontFamily: 'Arvo, serif',
                                    fontWeight: 900
                                }}>Special title treatment</h4>
                                <div className="d-flex justify-content-start align-items-center w-50 my-3 likes">
                                    <p className=" mb-0">By: Ramzi</p>
                                    <button className="btn" onClick={() => setLikes(likes + 1)}>
                                        <i className="fa-solid fa-heart mt-0 me-2 text-danger" />
                                        {likes}
                                    </button>
                                    <button className="btn" onClick={() => setComments(comments + 1)}>
                                        <i className="fa-solid fa-comments me-2" />
                                        {comments}
                                    </button>
                                </div>
                                <p className="card-text text-black-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut iste rerum saepe omnis non ipsum sint, fugit cupiditate quas aliquam nobis labore, alias recusandae consequatur hic cumque repudiandae iusto reiciendis dolores. Quas voluptatem, laboriosam ducimus nisi quos dolores, maxime quae voluptatibus aliquam ullam quidem vero! Nulla libero repudiandae eius autem!</p>
                                <a href="#" className="btn align-items-center readMore">Read More
                                    <i className="fa-solid fa-angles-right ms-2" style={{
                                        fontSize: 13
                                    }} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mb-3">
                        <div className="card d-flex flex-row cardBlog">
                            <img src="https://img.freepik.com/free-photo/asian-woman-holding-laptop-computer-while-looking-camera-gray-background_231208-2169.jpg?w=1060&t=st=1681585400~exp=1681586000~hmac=89d64ae61190e213a61d8543408122a2e0a539922845594ddc55c172208727ac" alt="" width={400} className=" imageBlog p-2" />
                            <div className="card-body p-4">
                                <h4 className="card-title mb-2" style={{
                                    color: '#8ca0d7',
                                    fontFamily: 'Arvo, serif',
                                    fontWeight: 900
                                }}>Special title treatment</h4>
                                <div className="d-flex justify-content-start align-items-center w-50 my-3 likes">
                                    <p className=" mb-0">By: Ramzi</p>
                                    <button className="btn" onClick={() => setLikes2(likes2 + 1)}>
                                        <i className="fa-solid fa-heart mt-0 me-2 text-danger" />
                                        {likes2}
                                    </button>
                                    <button className="btn" onClick={() => setComments2(comments2 + 1)}>
                                        <i className="fa-solid fa-comments me-2" />
                                        {comments2}
                                    </button>
                                </div>
                                <p className="card-text text-black-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut iste rerum saepe omnis non ipsum sint, fugit cupiditate quas aliquam nobis labore, alias recusandae consequatur hic cumque repudiandae iusto reiciendis dolores. Quas voluptatem, laboriosam ducimus nisi quos dolores, maxime quae voluptatibus aliquam ullam quidem vero! Nulla libero repudiandae eius autem!</p>
                                <a href="#" className="btn align-items-center readMore">Read More
                                    <i className="fa-solid fa-angles-right ms-2" style={{
                                        fontSize: 13
                                    }} />
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="py-5 my-5 container d-flex justify-content-center align-items-center flex-column" id="contactPage">
                <div className="title text-center">
                    <h5 className="text-black-50">Where I Should Contact?</h5>
                    <h1 style={{
                        color: '#8ca0d7',
                        fontFamily: 'Arvo, serif'
                    }}>Contact Me</h1>
                </div>
                <div className="container w-75 py-5">
                    <form action="" id="contactForm">
                        <div className="inputForm container">
                            <div className="row">
                                <div className="col-lg-6 col-sm-12 my-2">
                                    <input type="text" className="form-control" placeholder="Your Name" />
                                </div>
                                <div className="col-lg-6 col-sm-12 my-2">
                                    <input type="email" className="form-control" placeholder="Your Email" />
                                </div>
                            </div>
                        </div>
                        <div className="textArea mt-5">
                            <textarea name="" id="" className="form-control" placeholder="Write Something..." style={{
                                height: '30vh'
                            }}></textarea>
                        </div>

                        <div className="w-50 btnSend m-auto mt-4">
                            <button style={{
                                width: '100%'
                            }} type="submit" className="btn btn-success fs-3 font-monospace">Send</button>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default HomePage