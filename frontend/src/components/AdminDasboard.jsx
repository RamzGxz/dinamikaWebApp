import React, { useCallback, useEffect, useRef, useState } from "react"
import Sidebar from "./Sidebar"
import TableStock from "./TableStock"

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

    return (
        <div>
            <Sidebar />
            <div className="contentWrapper py-4" style={{
                marginLeft: 240,
                backgroundColor: '#c8e0f4'
            }}>
                <div className="w-100 d-flex justify-content-between align-items-center mb-3 container">
                    <h1 className="fw-bolder">Dashboard</h1>
                    <h5>
                        <a href="/" className="text-decoration-none">Home  </a>
                        / Dashboard
                    </h5>
                </div>
                <div className="iconTitle d-flex container justify-content-between align-items-center m-auto mb-3">
                    <div className="d-flex align-items-center flex-row rounded-3 justify-content-between p-2" style={{
                        backgroundColor: 'white',
                        width: '23%',
                    }}>
                        <div className="d-flex justify-content-center align-items-center flex-column ms-3">
                            {jumlahStock.map((data) => {
                                return (
                                    <h2 className="mb-0" style={{
                                        fontFamily: 'Arvo, serif',
                                        color: '#8ca0d7'
                                    }}>{data.total}</h2>
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
                    <div className="d-flex align-items-center flex-row rounded-3 justify-content-between p-2" style={{
                        backgroundColor: 'white',
                        width: '23%',
                    }}>
                        <div className="d-flex justify-content-center align-items-center flex-column ms-3">
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
                    <div className="d-flex align-items-center flex-row rounded-3 justify-content-between p-2" style={{
                        backgroundColor: 'white',
                        width: '23%',
                    }}>
                        <div className="d-flex justify-content-center align-items-center flex-column ms-3">
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
                    <div className="d-flex align-items-center flex-row rounded-3 justify-content-between p-2" style={{
                        backgroundColor: 'white',
                        width: '23%',
                    }}>
                        <div className="d-flex justify-content-center align-items-center flex-column ms-3">
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
                <TableStock />

            </div>
        </div>
    )
}

export default AdminDashboard