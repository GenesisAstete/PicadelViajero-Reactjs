import React, { Fragment } from 'react'
import icono from '../img/usercian.png'
import firebase from 'firebase'
import moment from 'moment'
import 'moment/locale/es'
import DeletePost from './DeletePost';
import EditPost from './EditPost'
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import teal from '@material-ui/core/colors/teal';

const Publicacion = () => {

    const [leer, setLeer] = React.useState([])
    const [idPost, setIdPost] = React.useState("")
    const [modoEdicion, setModoEdicion] = React.useState(false)

    React.useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const db = firebase.firestore()
                await db.collection('post').orderBy("fechaCreacion", "desc").onSnapshot(
                    (snap => {
                        const arrayData = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                        setLeer(arrayData);
                    }));
            } catch (error) { console.log(error) }
        }
        obtenerDatos()
    }, [])


    const edit = (item) => {
        setModoEdicion(true)
        setIdPost(item.id)
    }

    const updateModoEdicion = () => {
        setModoEdicion(false)
    }
    return (
        <Fragment>
            {
                leer.map(item => (
                    <div className="contenedorPublicacion" key={item.id}>
                        <div className="nombrePublicacion" >
                            <div className="contImg">
                                <img src={item.photoURL || icono} alt="" className="imgPublic" /> 
                            </div>
                            <div className="contName">
                                <p id="name">{item.displayName || 'NO ME GUARDARON NOMBRE'}</p>
                                <p id="date">{moment(item.fechaCreacion).format('L')}</p>
                            </div>
                        </div>
                        <div className="contenedorFoto">
                            <img src={item.photoPost} className="imagenPublicacion" alt=""></img>
                        </div>
                        {
                            modoEdicion === true && idPost === item.id ?
                                (
                                    <EditPost postId={idPost} post={item.comentario} ModoEdicion={updateModoEdicion} />
                                ) : (
                                    <>
                                        <div className="textoPublicacion">{item.comentario}</div>
                                        <div className="botonesPublicacion">
                                            <DeletePost posts={item.id} dataPost={leer} />
                                            <IconButton aria-label="edit">
                                                <EditIcon style={{ color: teal[50] }} onClick={() => edit(item)} value={item.id} />
                                            </IconButton>
                                        </div>
                                    </>
                                )
                        }
                    </div>
                ))
            }
        </Fragment >
    )
}

export default Publicacion
