import React from 'react'
import { auth} from '../firebase'
//import icono from '../img/usercian.png'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import HomeIcon from '@material-ui/icons/Home';
import teal from '@material-ui/core/colors/teal';
import photo from "../img/usercian.png"
import IconButton from '@material-ui/core/IconButton';
import { Redirect } from "react-router-dom";

export const Footer = () => {

    const [exit, setExit] = React.useState(false)

    const cerrarSesion = () => {
        auth.signOut()
            .then(() => {
                setExit(true)
            })
    }


    return (
        <div className="contenedorFooter">
            <HomeIcon style={{ color: teal[50] }} />
            <img src={photo} className="iconoPersona" alt="" />    
        {
            exit === false ?
                    (
                    <IconButton color="primary" aria-label="add to shopping cart" onClick={cerrarSesion}>
                        <PowerSettingsNewIcon style={{ color: teal[50] }}/>
                    </IconButton>
                    ) : <Redirect push to="/" />
        }

        </div>
    )
}
