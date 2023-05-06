const Alerts = (props) => {
    return (
        <div id={`${props.id}`} className="d-flex justify-content-center align-items-center" style={{
            position: 'fixed',
            height: '100vh',
            top: '-50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0,0,0,0.3)',
            zIndex: '99999',
            width: '100%'
        }}>
            <div className="alerts pb-4 rounded-3" style={{
                width: '40%',
                backgroundColor: 'white'
            }}>
                <div className="icons d-flex justify-content-center align items-center rounded-top-3 py-2" style={{
                    backgroundColor: '#f02d3a'
                }}>
                    <i className="fa-solid fa-triangle-exclamation text-white" style={{
                        fontSize: '100px'
                    }}></i>
                </div>
                <div className="textAlerts container">
                    <h1 className="text-center mt-3 font-monospace fw-bolder" style={{
                        fontSize: '50px'
                    }}>Warning!</h1>
                    <h5 className="text-center mt-3" style={{
                        color: ''
                    }}>You Mus Login to See </h5>
                    <div className="pt-3 d-flex justify-content-center align-items-center">
                        <button className="btn btn-danger fs-4">DISMISS</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Alerts
