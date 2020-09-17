import React from 'react'
import logo from '../img/logo.jpg'
import { Link } from 'react-router-dom'
import '../sass/navbar.scss'

const Navbar = () => {
    /*     const [filtro, setFiltro] = React.useState(""); */
    return (
        <div className="contenedorNavbar">
            <Link to="./muro">  <img src={logo} alt="" className="imagenLogo" /> </Link>
            <div className="contenedorBotones">
                <Link to="./ruta" ><button className="colorUno" value="Ruta" >Ruta</button></Link>
                <Link to="./hospedaje"><button className="colorDos" value="Hospedaje" >Hospedaje</button> </Link>
                <Link to="./comida"><button className="colorUno" value="Comida" >Comida</button> </Link>
                <Link to="./clima"> <button className="colorDos" value="Clima" >Clima</button> </Link>
                <Link to="./transporte"><button className="colorUno" value="Trasnporte" >Transporte</button></Link>
                <Link to="./tour">  <button className="colorDos" value="Tour" >Tour</button> </Link>
            </div>

        </div>
    )
}

export default Navbar
