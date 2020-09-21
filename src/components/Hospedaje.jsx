import React, { Fragment } from 'react'
/* import Publicacion from './Publicacion' */
import Footer from './Footer'
import Navbar from './Navbar'
import Filtrados from './Filtrados'

const Hospedaje = () => {
    const tipo = "Hospedaje";
    return (
        <Fragment>
            <Navbar />
            <Filtrados filtro={tipo} />
            <Footer />
        </Fragment>
    )
}

export default Hospedaje
