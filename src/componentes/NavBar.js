import React from 'react'
import '../css/navBar.css';
import logo from '../img/logo-removebg-preview.png';


export const NavBar = () => {
  return (
    <div id='navBar'>
      <nav className="navbar navbar-expand-lg  navBar bg-dark">
        <div className="container">
          <a className="navbar-brand color-text" href="/"><img src={logo} className='logo-nav'></img></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active color-text" aria-current="page" href="/">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link color-text" href="/nosotros">Nosotros</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle color-text" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Porfolio
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className='dropdown-divider'></hr></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled color-text">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Ingrese su busqueda.." aria-label="Search"></input>
              <button className="btn btn-outline-primary" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar