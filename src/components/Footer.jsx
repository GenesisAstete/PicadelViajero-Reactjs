import React from 'react'
//import icono from '../img/usercian.png'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import HomeIcon from '@material-ui/icons/Home';
import teal from '@material-ui/core/colors/teal';

export const Footer = ({currentUser}) => {
    return (
        <div className="contenedorFooter">
            <HomeIcon style={{ color: teal[50] }} />
            <img src={currentUser} className="iconoPersona" alt="" />
            <PowerSettingsNewIcon style={{ color: teal[50] }} />

        </div>
    )
}
