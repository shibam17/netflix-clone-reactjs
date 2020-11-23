import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() =>{
        window.addEventListener("scroll", ()=>{
            if (window.scrollY >100) {
                handleShow(true)
            }else handleShow(false)
            
        });
        return() =>{
            window.removeEventListener("scroll")
        }
    }, [])


    return (
        <div className={`nav ${show &&  "nav__black"}`}>
            <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="Netflix-Logo"/>
            <img className="nav__avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTSaJI_GbtJB_R82YCUaz_-gqZDg4ukHMXkg&usqp=CAU/" alt=""/>
        </div>
    )
}

export default Nav
