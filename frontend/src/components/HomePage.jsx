import { useState, useRef } from "react"
import Headers from "./Headers"

const HomePage = () =>{
    
    return(
        <div>
            <Headers act1='text-bg-primary'/>

            <div className="vh-100" style={{
                backgroundImage: 'url(/assets/back.jpg)',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}>
                
            </div>
        </div>
    )
}

export default HomePage