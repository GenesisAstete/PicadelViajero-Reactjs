import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.scss';
import Login from './components/Login'
import Registro from './components/Registro'
import Contraseña from './components/Contraseña'
import Muro from './components/Muro'
import Carousel from './components/Carousel'
import {auth, createUserProfileDocument} from './firebase'


const App = () => {

  const [currentUser,setCurrentUser] = useState();
  const [login ,setLogin ] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged( async userAuth => {
      if(userAuth) {
        const user = await createUserProfileDocument(userAuth);
        user.onSnapshot((snapshot) => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
          });
        });
        console.log('entro' )
        setLogin(true);
      }
      setCurrentUser(userAuth);
    })
  },[])

  return (
    <Router>
      <Switch>
        <Route path="/muro">
          <Muro currentUser={currentUser}/>
        </Route>
        <Route path="/contraseña">
          <Contraseña />
        </Route>
        <Route path="/registro">
          <Registro />
        </Route>
        <Route path="/carousel">
          <Carousel />
        </Route>
        <Route path="/" exact>
          <Login />
        </Route>
      </Switch>
    </Router>
  )

}

export default App