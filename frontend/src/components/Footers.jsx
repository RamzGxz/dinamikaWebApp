
const Footer = () => {
    return (
        <div>
            <footer className="container p-4 rounded">
                <div className="d-lg-flex justify-content-between">
                    <div>
                        <span>Logo</span>
                    </div>
                    <div className="copyright">
                        <p>developed and maintained by <a href="https://github.com/RamzGxz/dinamikaWebApp">RamzGxZ</a></p>
                    </div>
                    <div>
                        <ul className="d-flex gap-3 list-unstyled">
                            <li><a href="#"><i className="fa-brands fa-facebook fs-3" style={{
                                color: '#8ca0d7',
                            }} /></a></li>
                            <li><a href="https://github.com/RamzGxz/dinamikaWebApp"><i className="fa-brands fa-github fs-3" style={{
                                color: '#8ca0d7',
                            }} /></a></li>
                            <li><a href="#"><i className="fa-brands fa-whatsapp fs-3" style={{
                                color: '#8ca0d7',
                            }}/></a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer