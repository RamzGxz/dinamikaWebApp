import { useCallback, useEffect, useState } from "react"
import Footer from "./Footers"
import Headers from "./Headers"


const StockPage = () => {
    const [stockData, setStockData] = useState([])

    const fetchData = useCallback(async () => {
        try {
            const res = await fetch('http://localhost:4444/getStock')
            const data = await res.json()
            setStockData(data)
        } catch (error) {
            console.log(error)
            alert(error)
            location.reload()
        }
    })

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <Headers act2='text-bg-success text-center active' />

            <div className="vh-100 d-flex justify-content-center align-items-center flex-column" style={{
                backgroundImage: 'url(https://img.freepik.com/free-vector/gradient-background-vector-spring-colors_53876-117271.jpg?w=1060&t=st=1681668894~exp=1681669494~hmac=08c49fe7fa79e2214d864892e2b862e8183a7c9113ee5b69fcf2c7bc02e4857f)',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                opacity: 0.8,
                backgroundColor: 'black',
            }}>
                <div className="landing d-flex justify-content-start flex-column" style={{
                    fontFamily: 'Arvo, serif',
                }}>
                    <div className="container titleStockPage">
                        <h1 className="wel" style={{
                            fontSize: 100
                        }}>Stock Page</h1>
                        <h1 className="din" style={{
                            fontSize: 50
                        }}>Dinamika Digital Printing</h1>
                        <p className="text-black-50 fw-light font-monospace">Stock page is a page to view our stock produts</p>
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
                            <a href="#stockPage" className="text-white text-decoration-none">View</a>
                        </button>
                    </div>
                </div>
            </div>

            <section className="py-5 text-center container" id="stockPage">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-Bolder" style={{
                            fontFamily: 'Arvo, serif',
                            color: '#8ca0d7'
                        }}>Stock Table</h1>
                        <p className="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                    </div>
                </div>

                <div className="stockTable table-responsive" style={{
                    maxHeight: '55vh',
                    overflowY: 'scroll',
                }}>
                    <table className="table">
                        <thead style={{
                            backgroundColor: '#8ca0d7',
                            fontFamily: 'Arvo, serif'
                        }} className="fw-bolder text-white sticky-top">
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Kode Barang</th>
                                <th scope="col">Nama Barang</th>
                                <th scope="col">Harga Barang</th>
                                <th scope="col">Jumlah Barang</th>
                                <th scope="col">Tanggal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stockData.map((data, index) => {
                                return (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{data.kodeBrg}</td>
                                        <td className="text-capitalize">{data.namaBrg}</td>
                                        <td>Rp. {data.hargaBrg}</td>
                                        <td>{data.jumlahBrg}</td>
                                        <td>{data.tanggal}</td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </section>

            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-Bolder" style={{
                            fontFamily: 'Arvo, serif',
                            color: '#8ca0d7'
                        }}>News</h1>
                        <p className="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                    </div>
                </div>

                <div className=""></div>
            </section>

            <Footer />
        </div>
    )
}

export default StockPage