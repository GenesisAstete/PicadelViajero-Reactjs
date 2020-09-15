import React, { Fragment } from 'react';
import Navbar from './Navbar';
import Publicacion from './Publicacion';
import { Footer } from './Footer';
import firebase from 'firebase';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const Muro = () => {
    const [tarea, setTarea] = React.useState("")
   /* const [tipo, setTipo] = React.useState("") */
    
    const agregarComentario = async (e) => {
        e.preventDefault()
        console.log(tarea)
        if (!tarea.trim()) {
            console.log("esta vacio!!!")
        }
        try {
            const db = firebase.firestore()
            const user = firebase.auth().currentUser;
            const nuevaTarea = {
                fechaCreacion: Date.now(),
                displayName: user.displayName,
                photoURL: user.photoURL, 
                uid: user.uid,
                comentario: tarea,
                likes: []
            }
            await db.collection("post").add(nuevaTarea)
            setTarea("")
        } catch (error) {
            console.log(error)
        }
    }
    return (
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
                <Footer />
            </Fragment>

    )
}
export default Muro