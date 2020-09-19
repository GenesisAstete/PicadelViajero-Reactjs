import React, { Fragment } from 'react'
import foto1 from '../img/fotos1.jpg'
/* import icono from '../img/usercian.png' */
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import teal from '@material-ui/core/colors/teal';
import firebase from 'firebase'
import moment from 'moment'
import 'moment/locale/es' // Pasar a español

const Filtrados = (props) => {
    console.log("en publicacion", props.filtro)
    const [filtro, setFiltro] = React.useState(props.filtro)
    const [leer, setLeer] = React.useState([])

    React.useEffect(() => {
        const obtenerDatos = async () => {

            try {
                const db = firebase.firestore()
                const data = await db.collection('post').get()
                const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                console.log(arrayData)
                let filtrarDatos = arrayData.filter(arrayData => arrayData.tipo === filtro);
                setLeer(filtrarDatos)
                //  console.log("filtradooos", filtrarDatos)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerDatos()


    }, [filtro])

    return (
        <Fragment>
            {
                leer.map(item => (
                    <div className="contenedorPublicacion" key={item.id}>
                        <div className="nombrePublicacion" >
                            <img src={item.photoURL} alt="" width='12%' /> <div>{item.displayName}</div>
                            <div>{moment(item.fechaCreacion).format('L')}</div>
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

export default Filtrados
