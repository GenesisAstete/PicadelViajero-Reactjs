import React, { Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { auth, db } from '../firebase'
import Carousel from './Carousel'
import '../sass/login.scss'

const Login = (props) => {

    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [error, setError] = React.useState(null)
    const [validation, setValidation] = React.useState(false)

    const procesarDatos = e => {
        e.preventDefault()

        if(!email.trim()){
            console.log('Datos vacíos email!')
            setError('Datos vacíos email!')
            return
        }
        if(!pass.trim()){
            console.log('Datos vacíos pass!')
            setError('Datos vacíos pass!')
            return
        }
        if(pass.length < 6){
            console.log('6 o más carácteres')
            setError('6 o más carácteres en pass')
            return
        }
        console.log('correcto...')
        setError(null)
    }

const login = React.useCallback(async () => {
        try {
            const res = await auth.signInWithEmailAndPassword(email, pass)
            setEmail('')
            setPass('')
            setError(null)
            db.collection("usuarios").doc(res.user.uid).get().then((snap) => {
                const user = snap.data();
                console.log('entro', user)
                setValidation(true)
            })
        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                setError('Usuario o contraseña incorrecta')
            }
            if (error.code === 'auth/wrong-password') {
               setError('Usuario o contraseña incorrecta')
            }
            console.log(error.code)
            console.log(error.message)
        }
    }, [email, pass])

    return (
        <Fragment>
            {
                validation === false ?
                    (<Fragment>
                        <div className="contenedorMayorLogin">
                            <div className="contenedorIngreso">
                                <form onSubmit={procesarDatos} >
                                    <div className="alert alert-danger">
                                        {error}
                                    </div>
                                    <div>   <input
                                        className="inputIngreso"
                                        placeholder="Correo electronico"
                                        type="email"
                                        onChange={e => setEmail(e.target.value)}
                                        value={email} /></div>
                                    <div>     <input
                                        className="inputIngreso"
                                        placeholder="Contraseña"
                                        type="password"
                                        onChange={e => setPass(e.target.value)}
                                        value={pass}
                                    /> </div>
                                    <button
                                        className="inputIngreso"
                                        onClick={() => login()}
                                    >Iniciar sesion</button>

                                    <p id="textoOlvido">¿Olvidó su Contraseña? </p>
                                    <button id="btngoogle">Iniciar Sesión con Google</button>
                                    <p id="pTres">¿Aún no eres parte?</p>
                                    <Link to='/registro' ><button id="botonRegistrate"> Registrate</button></Link>

                                </form>
                            </div>
                        </div>
                        <Carousel />
                    </Fragment>
                    )
                    : <Redirect push to="/muro" />
            }
        </Fragment>
    )
}

export default Login
