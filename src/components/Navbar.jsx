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
                <div className="botonesNavUno">  <Link to="./ruta" ><button className="colorUno" value="Ruta" >Ruta</button></Link></div>
                <div className="botonesNav">  <Link to="./hospedaje"><button className="colorDos" value="Hospedaje" >Hospedaje</button> </Link></div>
                <div className="botonesNavUno">  <Link to="./comida"><button className="colorUno" value="Comida" >Comida</button> </Link></div>
                <div className="botonesNav">   <Link to="./clima"> <button className="colorDos" value="Clima" >Clima</button> </Link></div>
                <div className="botonesNavUno"> <Link to="./transporte"><button className="colorUno" value="Trasnporte" >Transporte</button></Link></div>
                <div className="botonesNav"><Link to="./tour">  <button className="colorDos" value="Tour" >Tour</button> </Link></div>
            </div>

        </div>
    )
}

export default Navbar
