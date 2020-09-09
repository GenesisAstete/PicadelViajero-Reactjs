import React, { Fragment } from 'react'
import { auth } from '../firebase'
import { Redirect } from 'react-router';
import Navbar from './Navbar';
import Publicacion from './Publicacion';
import { Footer } from './Footer';

const Muro = () => {

    const [exit, setExit] = React.useState(false)
    const cerrarSesion = () => {
        auth.signOut()
            .then(() => {
                setExit(true)

            })
    }
    return (
        <>
            <Fragment>
                <Navbar />
                <Publicacion />
                <Publicacion />
                <Publicacion />
                <Footer />
            </Fragment>
            {
                exit === false ?
                    (<button
                        className="btn btn-dark"
                        onClick={() => cerrarSesion()}
                    >
                        Cerrar Sesión
                    </button>
                    ) : <Redirect push to="/" />
            }
        </>
    )
}

export default Muro
