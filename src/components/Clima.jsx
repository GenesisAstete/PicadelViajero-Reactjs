import React, { Fragment } from 'react'
/* import Publicacion from './Publicacion' */
import { Footer } from './Footer'
import Navbar from './Navbar'
import Filtrados from './Filtrados'
const Clima = () => {
    const tipo = "Clima";
    return (

        <Fragment>
            <Navbar />
            <Filtrados filtro={tipo} />
            <Footer />
        </Fragment>

    )
}

export default Clima
