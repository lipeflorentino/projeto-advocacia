// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize

// Importando css e scss files
import './css/navbar.scss';
// Importando js files
import "./js/click-to-navigate.js";
// Importando Logo
import logo from './img/logo.png';

const icon = (
  <span className="logo">
    <img src={logo} height="45" width="90" title="BIG-soluções-digitais" alt="<BIG/>" />
  </span>
);
//navbar
const Nav = () => (
  
    <div className="nav">
      <input type="checkbox" id="nav-check"></input>
      <div className="nav-header">
        <div className="nav-title">
          <a href="/">{icon}</a>
        </div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      
      <div className="nav-links">
        <a href="/">Serviços</a>
        <a href="/">Empresa</a>
        <a href="/">Benefícios</a>
        <a href="/">Clientes</a>
        <a href="/">Contato</a>
      </div>
    </div> 
);

export default Nav;