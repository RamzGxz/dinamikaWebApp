import React, { useCallback, useEffect, useRef, useState } from "react"

const TableStock = (props) => {
    // setStockTable
    const [stockaTable, setStockTable] = useState([])

    // setResultSearchScrollStock
    const [isSearchResultsVisible, setIsSearchResultsVisible] = useState(false)
    const [searchResultStock, setSearchResultStock] = useState([])
    const tableRefStock = useRef()


    // refrensi input untuk update stock
    const stockKodeRefUpdate = useRef(null)
    const stockNamaRefUpdate = useRef(null)
    const stockHargaRefUpdate = useRef(null)
    const stockJumlahRefUpdate = useRef(null)

    // refrensi input untuk add stock
    const stockKodeRefAdd = useRef(null)
    const stockNamaRefAdd = useRef(null)
    const stockHargaRefAdd = useRef(null)
    const stockJumlahRefAdd = useRef(null)


    const fetchStockTable = useCallback(async () => {
        try {
            const res = await fetch('http://localhost:4444/getStock')
            const data = await res.json()
            setStockTable(data)
        } catch (error) {
            console.log(error)
        }
    })



    // use effect fetching
    useEffect(() => {
        fetchStockTable()
    }, [])



    const updateStock = (id) => {
        const formWrapper = document.getElementById('formUpdateStock')
        const closeForm = document.getElementById('closeFormStock')

        formWrapper.addEventListener('wheel', (e) => {
            e.preventDefault()
        })

        formWrapper.style.opacity = '1'
        formWrapper.style.visibility = 'visible'
        closeForm.addEventListener('click', () => {
            formWrapper.style.opacity = '0'
            setTimeout(() => {
                formWrapper.style.visibility = 'hidden'
            }, 500)
        })

        fetch(`http://localhost:4444/getStock/${id}`)
            .then(res => res.json())
            .then(data => {
                stockKodeRefUpdate.current.value = data[0]['kodeBrg']
                stockNamaRefUpdate.current.value = data[0]['namaBrg']
                stockHargaRefUpdate.current.value = data[0]['hargaBrg']
                stockJumlahRefUpdate.current.value = data[0]['jumlahBrg']
            })

        const submit = document.getElementById('formStockData')
        submit.addEventListener('submit', (e) => {
            const kodeVal = stockKodeRefUpdate.current.value
            const namaVal = stockNamaRefUpdate.current.value
            const hargaVal = stockHargaRefUpdate.current.value
            const jumlahVal = stockJumlahRefUpdate.current.value

            e.preventDefault()
            fetch(`http://localhost:4444/updateStock/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    kodeBrg: kodeVal,
                    namaBrg: namaVal,
                    hargaBrg: hargaVal,
                    jumlahBrg: jumlahVal
                })
            })
                .then(res => {
                    if (res.ok) {
                        alert('data has been updated')
                        e.target.reset()
                        location.reload()
                    } else {
                        alert('terjadi kesalahan saat fetch')
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        })
    }

    const deleteStock = (id) => {
        fetch(`http://localhost:4444/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => {
                if (res.ok) {
                    alert('delete succesfully')
                    location.reload()
                }
            })
            .catch((err) => {
                alert(err)
            })
    }

    const addStock = () => {
        const formWrapper = document.getElementById('formAddStock')
        const closeForm = document.getElementById('closeFormAddStock')

        formWrapper.addEventListener('wheel', (e) => {
            e.preventDefault()
        })

        formWrapper.style.opacity = '1'
        formWrapper.style.visibility = 'visible'
        closeForm.addEventListener('click', () => {
            formWrapper.style.opacity = '0'
            setTimeout(() => {
                formWrapper.style.visibility = 'hidden'
            }, 500)
        })

        formWrapper.addEventListener('submit', (e) => {
            e.preventDefault()
            const addKodeval = stockKodeRefAdd.current.value
            const addNamaval = stockNamaRefAdd.current.value
            const addHargaval = stockHargaRefAdd.current.value
            const addJumlahval = stockJumlahRefAdd.current.value
            fetch('http://localhost:4444/addStock', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    kodeBrg: addKodeval,
                    namaBrg: addNamaval,
                    hargaBrg: addHargaval,
                    jumlahBrg: addJumlahval
                })
            })
                .then(res => {
                    if (res.ok) {
                        alert('data has been posted!')
                        location.reload()
                    } else {
                        alert('terjadi error query atau fetch')
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        })
    }

    const handleSearch = (e) => {
        const keyword = e.target.value.toLowerCase();
        const filteredStocks = stockaTable.filter(data => data.namaBrg.toLowerCase().includes(keyword));
        setSearchResultStock(filteredStocks)
        setIsSearchResultsVisible(filteredStocks.length > 0);

        if (filteredStocks.length > 0) {
            document.getElementById('search-results').style.overflowY = 'hidden !important'
        } else {
            document.getElementById('search-results').style.overflowY = 'scroll !important'
        }

        if (keyword === '') {
            setIsSearchResultsVisible(false);
            setSearchResultStock([]);
        }
    }

    const viewDataScrollStock = (id) => {
        const el = document.getElementById(`dataStock${id}`);
        location.href = `#dataStock${id}`
        el.classList.add('selected')
        const inputSeacrhStock = document.getElementById('inputSeacrhStock')
        inputSeacrhStock.addEventListener('blur', () => {
            el.classList.remove('selected')
        })
    }

    const reload = (e) => {
        e.preventDefault()
        location.reload()
    }

    return (
        <div className="">
            <div className="tableStockDashboard container mt-5 mb-5">
                <div className={`w-100 container justify-content-between d-flex align-items-center mb-3 ${props.searchWrapper}`}>
                    <h4 className="mb-0">Stock Table</h4>

                    <div className="formSearch position-relative" onSubmit={reload}>
                        <form className="d-flex">
                            <input
                                className="form-control w-auto rounded-start-5 rounded-end-0 m-0"
                                type="search"
                                placeholder="Cari Nama Barang"
                                aria-label="Search"
                                onChange={(e) => handleSearch(e)}
                                id="inputSeacrhStock"
                            />
                            <button className="btn btn-dark rounded-end-5 rounded-start-0">
                                <i className="fa-solid fa-arrows-rotate"></i>
                            </button>
                        </form>
                        {isSearchResultsVisible && (
                            <div className="search-results rounded-3 p-1" id="search-results">
                                <div className="d-flex justify-content-between align-content-center flex-column">
                                    {searchResultStock.map((result, index) => {
                                        return (
                                            <button
                                                className={`btn btn-light mb-1 btn-sm`}
                                                onClick={(e) => viewDataScrollStock(result.id)}
                                            >{result.namaBrg}</button>
                                        )
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                    <button className="btn btn-dark" onClick={() => {
                        addStock()
                    }}>Add Stock</button>
                </div>

                <div className="stockTable table-responsive container table-responsive-sm bg-body rounded-3 px-0" ref={tableRefStock} style={{
                    maxHeight: '60vh',
                    overflowY: 'auto',
                    scrollBehavior: 'smooth'
                }}>
                    <table className="table text-black table-sm text-center table-hover tableStock">
                        <thead className="fw-bolder text-white bg-body-tertiary sticky-top" style={{
                        }}>
                            <tr className="text-black">
                                <th scope="col">No</th>
                                <th scope="col">Kode Barang</th>
                                <th scope="col">Nama Barang</th>
                                <th scope="col">Harga Barang</th>
                                <th scope="col">Jumlah Barang</th>
                                <th scope="col">Tanggal</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {stockaTable.map((data, index) => {
                                return (
                                    <tr
                                        id={`dataStock${data.id}`}
                                        className="mt-5"
                                        key={data.id}
                                    >
                                        <th scope="row" key={data.id}>{index + 1}</th>
                                        <td>{data.kodeBrg}</td>
                                        <td className="text-capitalize">{data.namaBrg}</td>
                                        <td>Rp. {data.hargaBrg}</td>
                                        <td>{data.jumlahBrg}</td>
                                        <td>{data.tanggal}</td>
                                        <td>
                                            <div className="btn-group btn-group-sm" role="group" aria-label="Basic mixed styles example">
                                                <button type="button" className="btn btn-outline-success" onClick={() => updateStock(data.id)}>
                                                    <i className="fa-solid fa-pen-to-square"></i>
                                                </button>
                                                <button type="button" className="btn btn-outline-danger" onClick={() => { deleteStock(data.id) }}>
                                                    <i className="fa-solid fa-trash"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* formUpdateStock */}
            <div id="formUpdateStock" className="formUpdate">
                <form className="container" id="formStockData">
                    <i className="fa-solid fa-xmark fs-4" id="closeFormStock"></i>
                    <h1 style={{
                        fontFamily: 'Arvo, serif',
                        color: '#8ca0d7'
                    }} className="pt-4 pb-2">Form Update Stock</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro modi officiis.</p>
                    <input type="text" placeholder="Kode Barang" className="form-control  mb-3" ref={stockKodeRefUpdate} />
                    <input type="text" placeholder="Nama Barang" className="form-control  mb-3" ref={stockNamaRefUpdate} />
                    <input type="number" placeholder="Harga Barang" className="form-control  mb-3" ref={stockHargaRefUpdate} />
                    <input type="number" placeholder="Jumlah Barang" className="form-control " ref={stockJumlahRefUpdate} />
                    <button className="btn btn-outline-success mt-3 w-25" type="submit">Send
                    </button>
                </form>
            </div>
            {/* endForm */}

            {/* formAddStock */}
            <div id="formAddStock" className="formUpdate">
                <form className="container" id="formStockData">
                    <i className="fa-solid fa-xmark fs-4" id="closeFormAddStock"></i>
                    <h1 style={{
                        fontFamily: 'Arvo, serif',
                        color: '#8ca0d7'
                    }} className="pt-4 pb-2">Form Add Stock</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro modi officiis.</p>
                    <input type="text" placeholder="Kode Barang" className="form-control  mb-3" ref={stockKodeRefAdd} />
                    <input type="text" placeholder="Nama Barang" className="form-control  mb-3" ref={stockNamaRefAdd} />
                    <input type="number" placeholder="Harga Barang" className="form-control  mb-3" ref={stockHargaRefAdd} />
                    <input type="number" placeholder="Jumlah Barang" className="form-control " ref={stockJumlahRefAdd} />
                    <button className="btn btn-outline-success mt-3 w-25" type="submit">Send
                    </button>
                </form>
            </div>
            {/* endForm */}
        </div>
    )
}


export default TableStock