import React, { Fragment } from 'react'
import { db, auth } from '../firebase'
import { Redirect } from 'react-router';
import logo from '../img/logo.jpg';
import { Link } from 'react-router-dom';


const Registro = () => {

    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [error, setError] = React.useState(null)
    const [validation, setValidation] = React.useState(false)

    const procesarDatos = e => {
        e.preventDefault()
        if (!email.trim()) {
            setError('Datos vacíos email!')
            return
        }
        if (!pass.trim()) {
            setError('Datos vacíos pass!')
            return
        }
        if (pass.length < 6) {
            setError('6 o más carácteres en pass')
            return
        }
        console.log('correcto...')
        setError(null)
    }

    const register = React.useCallback(async () => {
        try {
            const res = await auth.createUserWithEmailAndPassword(email, pass)
            console.log(res.user)
            await db.collection('users').doc(res.user.uid).set({
                fechaCreacion: Date.now(),
                displayName: res.user.displayName,
                photoURL: res.user.photoURL,
                email: res.user.email,
                uid: res.user.uid
            })
            setEmail('')
            setPass('')
            setError(null)
            db.collection("users").doc(res.user.uid).get().then((snap) => {
                const user = snap.data();
                console.log('entro', user)
                setValidation(true)
            })
        } catch (error) {
            console.log(error)
            // setError(error.message)
            if (error.code === 'auth/email-already-in-use') {
                setError('Usuario ya registrado...')
                return
            }
            if (error.code === 'auth/invalid-email') {
                setError('Email no válido')
                return
            }
        }
    }, [email, pass])

    return (
        <Fragment>

            {
                validation === false ?
                    (
                        <div className="contenedorRegistrar">
                            <Link to="./"> <img
                                className="logoR"
                                alt="logo"
                                src={logo}
                            /></Link>
                            <p className="textoRegistro">Registro</p>
                            <form onSubmit={procesarDatos} className="registrarContenedor">
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                                <input
                                    className="inputIngreso"
                                    placeholder="Correo electronico"
                                    type="email"
                                    onChange={e => setEmail(e.target.value)}
                                    value={email} />
                                <input
                                    className="inputIngreso"
                                    placeholder="Contraseña"
                                    type="password"
                                    onChange={e => setPass(e.target.value)}
                                    value={pass}
                                />
                                <button
                                    className="botonInputIngresoRegistro"
                                    onClick={() => register()}
                                >Registrar</button>
                            </form>
                        </div>
                    ) : <Redirect push to="/muro" />

            }


        </Fragment>
    )
}

export default Registro
