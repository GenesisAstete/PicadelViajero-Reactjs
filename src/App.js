import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.scss';
import Login from './components/Login'
import Registro from './components/Registro'
import Contraseña from './components/Contraseña'
import Muro from './components/Muro'
import Carousel from './components/Carousel'
import './style/style.css'


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/muro">
          <Muro />
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