import React, { Fragment } from 'react'
import foto1 from '../img/fotos1.jpg'
import icono from '../img/usercian.png'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import teal from '@material-ui/core/colors/teal';

const Publicacion = () => {
    return (
        <Fragment>
            <div className="contenedorPublicacion">
                <div className="nombrePublicacion"> <img src={icono} alt="" /> <div >Pancho saavedra</div></div>
                <div className="contenedorFoto">  <img src={foto1} className="imagenPublicacion" alt="" /></div>
                <div className="textoPublicacion">texto</div>
                <div className="botonesPublicacion">
                    <DeleteIcon style={{ color: teal[50] }} />
                    <EditIcon style={{ color: teal[50] }} />
                </div>
            </div>
        </Fragment >

    )
}

export default Publicacion
