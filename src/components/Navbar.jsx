import React from 'react'
import logo from '../img/logo.jpg'
import '../sass/navbar.scss'

const Navbar = () => {
    return (
        <div className="contenedorNavbar">
            <img src={logo} alt="" className="imagenLogo" />
            <div className="contenedorBotones">
                <button className="colorUno">Ruta</button>
                <button className="colorDos">Hospedaje</button>
                <button className="colorUno">Comida</button>
                <button className="colorDos">Clima</button>
                <button className="colorUno">Transporte</button>
                <button className="colorDos">Tour</button>
            </div>

        </div>
    )
}

export default Navbar
