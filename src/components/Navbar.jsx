import React from 'react'
import logo from '../img/logo.jpg'
import { Link } from 'react-router-dom'
import '../sass/navbar.scss'

const Navbar = () => {
    const [filtro, setFiltro] = React.useState("");
    return (
        <div className="contenedorNavbar">
            <Link to="./muro">  <img src={logo} alt="" className="imagenLogo" /> </Link>
            <div className="contenedorBotones">
                <Link to="./ruta"><button className="colorUno" value="Ruta" >Ruta</button></Link>
                <Link to="./hospedaje"><button className="colorDos" value="Hospedaje" >Hospedaje</button> </Link>
                <button className="colorUno" value="Comida" >Comida</button>
                <button className="colorDos" value="Clima" >Clima</button>
                <button className="colorUno" value="Trasnporte" >Transporte</button>
                <button className="colorDos" value="Tour" >Tour</button>
            </div>

        </div>
    )
}

export default Navbar
