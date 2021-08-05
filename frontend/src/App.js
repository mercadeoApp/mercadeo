import React from 'react';
import Empresa from './components/Empresa'
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from "react-router-dom"
import ErrorBoundary from './components/errores/ErrorBoundary'
import './App.css';

function EmpresaComponent() {
  return (<Empresa entity="empresa" key="empresa"/>)
}


function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid" >
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="bi bi-house-fill"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="nav flex-column" >
                <li className="nav-item m-1">
                  <NavLink to="/empresa" className="btn btn-secondary" >
                    Empresa
                  </NavLink>
                </li>
                <li className="nav-item m-1" >
                  <NavLink to="/CargarTrabajo" className="btn btn-secondary" >
                    Producto
                  </NavLink>
                </li>
                <li className="nav-item dropdown m-1" >
                  <p href="#" className="btn btn-secondary" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </p>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><NavLink to="/" className="btn btn-secondary">Tablero</NavLink></li>
                    <li><NavLink to="/" className="btn btn-secondary">Prue</NavLink></li>
                    <li><NavLink to="/" className="btn btn-secondary">Prue2</NavLink></li>
                    <li><NavLink to="/" className="btn btn-secondary">Prue3</NavLink></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <hr />
        <Switch>
          <Route path="/empresa" component={EmpresaComponent} />
          <Route path="/error" component={ErrorBoundary}/>
          <Redirect to="/" />
        </Switch>
      </div >
    </Router >
  );
}

export default App;