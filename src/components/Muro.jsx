import React, { Fragment } from 'react';
import Navbar from './Navbar';
import Publicacion from './Publicacion';
import { Footer } from './Footer';
import firebase from 'firebase';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
/* import PhotoPost from './PhotoPost'; */
import ImageUpload from './ImageUpload';
/* import { Link, Redirect } from 'react-router-dom' */


const Muro = () => {
    const [tarea, setTarea] = React.useState("")
    const [tipo, setTipo] = React.useState("")
    const [url, setUrl] = React.useState(0)
    /*     const [filtro, setFiltro] = React.useState("") */
    const filtro = ''

    const agregarComentario = async (e) => {
        e.preventDefault()
        console.log(tarea)
        console.log(tipo)
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
                photoPost: url,
                likes: [],
                tipo: tipo
            }
            const data = await db.collection("post").add(nuevaTarea)
            setTarea([...tarea,
            { ...nuevaTarea, id: data.id }
            ])
            setTarea("");

        } catch (error) {
            console.log(error)
        }
    }

    const urlPost = (urlStorage) => {
        setUrl(urlStorage)
    }
    /*  const cambio = (e) => {
          console.log(e.target.value)
          const nuevoFiltro = (e.target.value);
          setFiltro(nuevoFiltro)
          console.log("en muro ", filtro)
  
      }*/
    return (
        <Fragment>

            <Navbar />
            <div className="contenedorGeneralMuro">
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
                        <select onChange={e => setTipo(e.target.value)}>
                            <option value="" >Option</option>
                            <option value="Ruta" >Ruta</option>
                            <option value="Hospedaje">Hospedaje</option>
                            <option value="Comida"> Comida</option>
                            <option value="Clima">Clima</option>
                            <option value="Transporte">Transporte</option>
                            <option value="Tour">Tour</option>
                        </select>
                        {/* <PhotoPost /> */}
                        <ImageUpload urlPost={urlPost} />
                        <Button variant="contained" color="primary" type="submit">
                            Publicar
                        </Button>
                    </form>
                </div>
                <Publicacion filtro={filtro} />
                <Footer />
            </div>
        </Fragment >

    )
}
export default Muro