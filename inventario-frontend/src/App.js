// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import EquiposList from './components/equipos/EquiposList';
import EquipoForm from './components/equipos/EquipoForm';
import EquipoDetail from './components/equipos/EquipoDetail';

function App() {
    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/" exact element={<Home/>} />
                    <Route path="/equipos" exact element={<EquiposList/>} />
                    <Route path="/equipos/new" element={<EquipoForm/>} />
                    <Route path="/equipos/edit/:id" element={<EquipoForm/>} />
                    <Route path="/equipos/:id" element={<EquipoDetail/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

