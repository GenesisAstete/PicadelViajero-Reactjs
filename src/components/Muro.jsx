import React from 'react'
import {auth} from '../firebase'
import { Redirect } from 'react-router';

const Muro = () => {

    const [exit, setExit] = React.useState(false)
    const cerrarSesion = () => {
        auth.signOut()
            .then(() => {
                setExit(true)
                
            })
    }
    return (
        <div>
            <h1>Soy el Muro</h1>
            {
                exit === false?
           ( <button 
                className="btn btn-dark" 
                onClick={() => cerrarSesion()}
              >
                Cerrar Sesión
            </button>
         ):<Redirect push to="/" />
        }
        </div>
    )
}

export default Muro
