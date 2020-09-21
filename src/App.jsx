import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Registro from './components/Registro'
import Contraseña from './components/Contraseña'
import Muro from './components/Muro'
import Carousel from './components/Carousel'
import Ruta from './components/Ruta';
import Hospedaje from './components/Hospedaje'
import Clima from './components/Clima';
import Comida from './components/Comida';
import Transporte from './components/Transporte';
import Tour from './components/Tour';
import Password from './components/Password';

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
        <Route path="/password">
          <Password />
        </Route>
        <Route path="/carousel">
          <Carousel />
        </Route>
        <Route path="/ruta">
          <Ruta />
        </Route>
        <Route path="/hospedaje">
          <Hospedaje />
        </Route>
        <Route path="/clima">
          <Clima />
        </Route >
        <Route path="/comida">
          <Comida />
        </Route>
        <Route path="/transporte">
          <Transporte />
        </Route>
        <Route path="/tour">
          <Tour />
        </Route>
        <Route path="/" exact>
          <Login />
        </Route>
      </Switch>
    </Router>
  )

}

export default App