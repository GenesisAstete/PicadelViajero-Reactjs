import React, { Fragment } from 'react'
import { auth } from '../firebase'
import { Redirect } from 'react-router';
import Navbar from './Navbar';
import Publicacion from './Publicacion';
import { Footer } from './Footer';
import firebase from 'firebase';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Muro = () => {
    const [tarea, setTarea] = React.useState("")
    const [exit, setExit] = React.useState(false)
    const [tipo, setTipo] = React.useState("")
    const cerrarSesion = () => {
        auth.signOut()
            .then(() => {
                setExit(true)

            })
    }

    const agregarComentario = async (e) => {
        e.preventDefault()
        console.log(tarea)
        if (!tarea.trim()) {
            console.log("esta vacio!!!")
        }

        try {
            const db = firebase.firestore()
            const nuevaTarea = {
                comentario: tarea
            }
            const data = await db.collection("usuarios").add(nuevaTarea)
            setTarea("")
        } catch (error) {
            console.log(error)
            console.log("salio malena")
        }
    }

    return (
        <>
            <Fragment>
                <Navbar />
                <div className="contenedorFormulario" >
                    <form onSubmit={agregarComentario} >
                        <TextField
                            onChange={e => setTarea(e.target.value)}
                            value={tarea}
                            id="outlined-multiline-static"
                            label="Deja tu picada aquí"
                            multiline
                            rows={4}
                            defaultValue="Default Value"
                            variant="outlined"
                        />
                        <Button variant="contained" color="primary" type="submit">
                            Publicar
                    </Button>

                    </form>
                </div>
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
