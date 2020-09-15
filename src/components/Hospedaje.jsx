import React, { Fragment } from 'react'
import Publicacion from './Publicacion'
import { Footer } from './Footer'
import Navbar from './Navbar'
import Filtrados from './Filtrados'

const Hospedaje = () => {
    const tipo = "Hospedaje";
    return (
        <div>
            <Fragment>
                <Navbar />
                <Filtrados filtro={tipo} />
                <Footer />
            </Fragment>
        </div>
    )
}

export default Hospedaje
