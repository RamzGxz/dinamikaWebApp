import React, { useCallback, useEffect, useRef, useState } from "react"
import Sidebar from "./Sidebar"
import TableStock from "./TableStock"
import TodoList from "./TodoList"
import { Link } from "react-router-dom"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'


const AdminDashboard = () => {
    const [jumlahStock, setJumlahStock] = useState([])

    const fetchJumlahStock = useCallback(async () => {
        try {
            const res = await fetch('http://localhost:4444/getJumlahStock')
            const data = await res.json()
            setJumlahStock(data)
        } catch (err) {
            console.log(err)
        }
    })

    

    useEffect(() => {
        fetchJumlahStock()
    }, [])

    let sideClick = 0
    const handleClickSideBar = () => {
        const sideElement = document.querySelectorAll('.sideBar')
        const contentElement = document.querySelectorAll('.contentWrapper')
        const textSide = document.querySelectorAll('.text')
        const iconSide = document.querySelectorAll('.iconSide')
        
        sideClick++
        
        if (sideClick === 1) {
            sideElement.forEach((el) => {
                el.style.width = '0px'
                setTimeout(()=>{
                    el.classList.add('d-none')
                }, 300)
            })
            contentElement.forEach((el) => {
                el.style.marginLeft = '0px'
            })
            textSide.forEach((el) => {
                el.classList.add('d-none')
            })
            iconSide.forEach((el) => {
                el.classList.remove('fs-6')
                el.classList.add('fs-4')
            })

        } else {
            sideElement.forEach((el) => {
                el.style.width = '240px'
                el.classList.remove('d-none')
               
            })
            contentElement.forEach((el) => {
                el.style.marginLeft = '240px'
            })
            textSide.forEach((el) => {
                setTimeout(()=>{
                    el.classList.remove('d-none')
                }, 300)
            })
            iconSide.forEach((el) => {
                el.classList.add('fs-6')
                el.classList.remove('fs-4')
            })
            sideClick = 0
        }
    }

    return (
        <div>
            <Sidebar sideAct1='active' />
            <div className="contentWrapper py-4" style={{
                marginLeft: 240,
                backgroundColor: '#c8e0f4'
            }}>
                <div className="w-100 d-flex justify-content-between align-items-center mb-3 container titleLink">
                    <div className="d-flex justify-content-center align-items-center">
                        <i className="fa-solid fa-bars me-3" onClick={handleClickSideBar} id="iconToggle" style={{
                            transition: 'all .2s'
                        }}></i>
                        <h1 className="fw-bolder mb-0 ">Dashboard</h1>
                    </div>
                    <h5 className="mb-0">
                        <Link to="/" className="text-decoration-none">Home  </Link>
                        / Dashboard
                    </h5>
                </div>
                <div className="iconTitle d-flex container justify-content-between align-items-center m-auto mb-3">
                    <div className="d-flex align-items-center flex-row rounded-3 justify-content-between p-2 iconDash" style={{
                        backgroundColor: 'white',
                        width: '23%',
                    }}>
                        <div className="d-flex justify-content-center align-items-center flex-column amount w-50">   
                            {jumlahStock.map((data) => {
                                return (
                                    <h2 className="mb-0" style={{
                                        fontFamily: 'Arvo, serif',
                                        color: '#8ca0d7'
                                    }} key={data.id}>{data.total}</h2>
                                )
                            })}
                            <p className="mb-0">Stock</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center flex-column p-3">
                            <div className="rounded-circle" style={{
                                backgroundColor: '#c8e0f4'
                            }}>
                                <i className="fa-solid fa-layer-group p-2 fs-1" style={{
                                    color: '#293241'
                                }}></i>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center flex-row rounded-3 justify-content-between p-2 iconDash" style={{
                        backgroundColor: 'white',
                        width: '23%',
                    }}>
                        <div className="d-flex justify-content-center align-items-center flex-column amount w-50"   >
                            <h2 className="mb-0" style={{
                                fontFamily: 'Arvo, serif',
                                color: '#8ca0d7'
                            }}>589</h2>
                            <p className="mb-0">Recap Harian</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center flex-column p-3">
                            <div className="rounded-circle" style={{
                                backgroundColor: '#c8e0f4'
                            }}>
                                <i className="fa-solid fa-calendar-day p-2 fs-1" style={{
                                    color: '#293241'
                                }}></i>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center flex-row rounded-3 justify-content-between p-2 iconDash" style={{
                        backgroundColor: 'white',
                        width: '23%',
                    }}>
                        <div className="d-flex justify-content-center align-items-center flex-column amount w-50"   >
                            <h2 className="mb-0" style={{
                                fontFamily: 'Arvo, serif',
                                color: '#8ca0d7'
                            }}>800</h2>
                            <p className="mb-0">Recap Mingguan</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center flex-column p-3">
                            <div className="rounded-circle" style={{
                                backgroundColor: '#c8e0f4'
                            }}>
                                <i className="fa-sharp fa-solid fa-calendar-week p-2 fs-1" style={{
                                    color: '#293241'
                                }}></i>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center flex-row rounded-3 justify-content-between p-2 iconDash" style={{
                        backgroundColor: 'white',
                        width: '23%',
                    }}>
                        <div className="d-flex justify-content-center align-items-center flex-column amount w-50"   >
                            <h2 className="mb-0" style={{
                                fontFamily: 'Arvo, serif',
                                color: '#8ca0d7'
                            }}>600</h2>
                            <p className="mb-0">Recap Bulanan</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center flex-column p-3">
                            <div className="rounded-circle" style={{
                                backgroundColor: '#c8e0f4'
                            }}>
                                <i className="fa-solid fa-calendar-check p-2 fs-1" style={{
                                    color: '#293241'
                                }}></i>
                            </div>
                        </div>
                    </div>
                </div>
                <TableStock searchWrapper='searchWrapper'/>

                <div className="row container m-auto">
                    <div className="col-sm-12 col-lg-6 " style={{
                        marginBottom: 10
                    }}>
                        <TodoList />
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <Calendar className={`myCalendar rounded-3`}/>
                    </div>
                </div>

                <div className="container">
                    
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard