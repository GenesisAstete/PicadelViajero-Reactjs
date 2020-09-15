import React, { Fragment } from 'react'
import foto1 from '../img/fotos1.jpg'
/* import icono from '../img/usercian.png' */
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import teal from '@material-ui/core/colors/teal';
import firebase from 'firebase'
import moment from 'moment'
import 'moment/locale/es' // Pasar a español



const Publicacion = () => {
    const [leer, setLeer] = React.useState([])
    React.useEffect(() => {
        const obtenerDatos = async () => {

            try {
                const db = firebase.firestore()
                const data = await db.collection('post').get()

                console.log(data.docs)
                const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                console.log(arrayData)
                setLeer(arrayData)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerDatos()

    }, [])
    return (
        <Fragment>
            {
                leer.map(item => (
                    <div className="contenedorPublicacion" key={item.id}>
                        <div className="nombrePublicacion" >
                         <img src={item.photoURL} alt="" width='12%'/> <div>{item.displayName}</div>
                        <div>{ moment(item.fechaCreacion).subtract(10, 'days').calendar()}</div>
                        </div>
                        <div className="contenedorFoto">
                            <img src={foto1} className="imagenPublicacion" alt=""></img>
                        </div>
                        <div className="textoPublicacion">{item.comentario}</div>
                        <div className="botonesPublicacion">
                            <DeleteIcon style={{ color: teal[50] }} />
                            <EditIcon style={{ color: teal[50] }} />
                        </div>
                    </div>
                ))
            }
        </Fragment >
    )
}

export default Publicacion
