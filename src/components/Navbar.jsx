import React from 'react'
import logo from '../img/logo.jpg'
import '../sass/navbar.scss'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
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
