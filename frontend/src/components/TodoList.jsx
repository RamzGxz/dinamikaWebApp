import { useCallback, useEffect, useRef, useState } from "react"
import moment from 'moment'

const TodoList = () => {
    const [todoData, setTodoData] = useState([])
    const backTodo = ['bg-dark', 'bg-primary', 'bg-info', 'bg-success', 'bg-info', 'bg-warning']
    const shuffledBackTodo = backTodo.sort(() => 0.5 - Math.random())
    
    const fetchData = useCallback(async () => {
        try {
            const res = await fetch('http://localhost:4444/getTodo')
            const data = await res.json()
            setTodoData(data)
        } catch (error) {
            console.log(error)
        }
    })


    useEffect(() => {
        fetchData()
    }, [])


    const text = useRef(null)
    const handleSubmit = useCallback(async () => {
        e.preventDefault()
        const textVal = text.current.value
        if (!textVal) {
            alert('Text tidak boleh kosong!')
        } else {
            try {
                const res = await fetch('http://localhost:4444/addTodo', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        text: textVal
                    })
                })

                const data = await res.json()
                console.log(`data: ${data}`)
            } catch (error) {
                console.log(error)
            }
        }
    })
   

    const handleChangeText = (id) => {
        const timeWrapper = document.getElementById(`timeWrapper${id}`)
        const text = document.getElementById(`text${id}`)
        const btnDel = document.getElementById(`del${id}`)
        const checkbox = document.getElementById(`checkbox${id}`)

        if (checkbox.checked) {
            timeWrapper.classList.add('d-none')
            text.classList.add('text-decoration-line-through')
            btnDel.classList.remove('d-none')
        } else {
            timeWrapper.classList.remove('d-none')
            text.classList.remove('text-decoration-line-through')
            btnDel.classList.add('d-none')
        }
    }

    const delTodo = (id) => {
        const conf = confirm('are you sure to delete this todo list?')
        if (conf) {
            fetch(`http://localhost:4444/delTodo/${id}`, {
                method: 'DELETE'
            })
                .then(res => {
                    if (res.ok) {
                        alert('todolist deleted')
                        location.reload()
                    } else {
                        alert('kesahalan pada fetch')
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            alert('be careful today!')
        }
    }

    return (
        <div className="">
            <div className="">
                <div className="bg-light rounded-3 py-3">
                    <div className="titleTodo d-flex align-items-center px-3 justify-content-between">
                        <div className="d-flex align-items-center">
                            <i className="fa-solid fa-clipboard-list me-2"></i>
                            <h5 className="mb-0">To Do List</h5>
                        </div>
                        <div>
                            <nav aria-label="Page navigation example">
                                <ul className="pagination pagination-sm mb-0">
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">«</span>
                                        </a>
                                    </li>
                                    <li className="page-item"><a className="page-link active">1</a></li>
                                    <li className="page-item"><a className="page-link">2</a></li>
                                    <li className="page-item"><a className="page-link">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">»</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <hr />
                    <div className="" style={{}}>
                        <div className="container">
                            {todoData.map(data => {
                                const timeAgo = moment(data.waktu).fromNow()
                                const bgColor = shuffledBackTodo[Math.floor(Math.random() * shuffledBackTodo.length)]
                                return (
                                    <div className="mb-2 container rounded-3 py-2 d-flex align-items-center justify-content-md-between" style={{
                                        border: '1px solid #3333',
                                        backgroundColor: '#e5e5e5'
                                    }}>
                                        <div className="d-flex align-items-center">
                                            <div className="d-flex align-items-center">
                                                <i className="fa-solid fa-arrows-to-dot fs-3"></i>
                                                <input type="checkbox" className="form-check-input form-check-inline ms-3 mt-0 p-3" onChange={() => handleChangeText(data.id)} id={`checkbox${data.id}`} />
                                            </div>
                                            <div className="textTodo">
                                                <p className="mb-0 textTodo fs-6 textTodo" id={`text${data.id}`}>{data.text}</p>
                                            </div>
                                        </div>
                                        <div className={`d-flex align-items-center justify-content-center px-2 py-1 rounded-3 ${bgColor}`} id={`timeWrapper${data.id}`}>
                                            <i class="fa-regular fa-clock mb-0 fw-medium text-white" style={{ fontSize: '13px' }}></i>
                                            <p className="mb-0 ms-1 fw-medium text-white" style={{ fontSize: '14px' }}>{timeAgo}</p>
                                        </div>
                                        <button className="btn btn-sm btn-danger btnDel d-none" id={`del${data.id}`} onClick={() => delTodo(data.id)}>
                                            <i className="fa-solid fa-trash"></i>
                                        </button>
                                    </div>
                                )
                            })}

                            <form onSubmit={handleSubmit} className="d-flex justify-content-between align-items-center pt-4">
                                <input ref={text} type="text" className="form-control me-2" placeholder="input text here" />
                                <button type="sumbit" className="btn btn-sm btn-success">
                                    <i className="fa-solid fa-plus"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoList