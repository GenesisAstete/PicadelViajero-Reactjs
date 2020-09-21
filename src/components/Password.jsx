import React from 'react'
import { auth } from '../firebase'
import logo from '../img/logo.jpg';
import { Link } from 'react-router-dom';

const Password = () => {

    const [email, setEmail] = React.useState('')
    const [error, setError] = React.useState(null)
    
    const procesarDatos = e => {
        e.preventDefault()
        if (!email.trim()) {
            console.log('Datos vacíos email!')
            setError('Datos vacíos email!')
            return
        }
         console.log('correcto...')
        setError(null)
    }

    const recover = () => {
        auth.sendPasswordResetEmail(email)
        .then(() => {
        alert('Correo electrónico de restablecimiento de contraseña enviado.');
        setEmail("")
        })
        .catch(function(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === 'auth/invalid-email') {
            alert(errorMessage);
            } else if (errorCode === 'auth/user-not-found') {
            alert(errorMessage);
            }
            console.log(error);
        });
    }

    return (
        <>
            <div className="contenedorPassword">
                <Link to="./"> <img
                    className="logo"
                    alt="logo"
                    src={logo}
                /></Link>
                <p className="textoRegistro" style={{marginTop: '168px'}}>Recuperar Contraseña</p>
            <form onSubmit={procesarDatos} className="registrarContenedor">
                <div className="alert alert-danger">
                    {error}
                </div>
                <input
                    className="inputIngreso"
                    placeholder="Correo electronico"
                    type="email"
                    onChange={e => setEmail(e.target.value)}
                    value={email} 
                />
                <button
                    className="botonInputIngresoRegistro"
                    onClick={() => recover()}
                >Recuperar</button>
            </form>
            </div>
        </>
    )
}

export default Password
