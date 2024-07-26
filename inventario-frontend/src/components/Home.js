// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import logo from "../images/logo.png";

function Home() {
  return (
    <>
      {/* Barra de Navegación */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/equipos">
                  Inventario
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Contenido Principal */}
      <div className="container mt-5">
        <main>
          <img src={logo}></img>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <div className="container">
          <p>&copy; 2024 SOLILOSOFTWARE. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
}

export default Home;
