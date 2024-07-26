// src/components/Equipos/EquipoDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getEquipo } from '../../services/api';

function EquipoDetail() {
    const [equipo, setEquipo] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetchEquipo();
    }, []);

    const fetchEquipo = async () => {
        const response = await getEquipo(id);
        setEquipo(response.data);
    };

    return (
        <div className="container mt-5">
            <h1>Detalle del Equipo</h1>
            <div className="card">
                <div className="card-body">
                    <p><strong>ID:</strong> {equipo.id}</p>
                    <p><strong>Nombre:</strong> {equipo.nombre}</p>
                    <p><strong>Marca:</strong> {equipo.marca}</p>
                    <p><strong>Modelo:</strong> {equipo.modelo}</p>
                    <p><strong>Serial Inventario:</strong> {equipo.serial_inventario}</p>
                    <p><strong>Asignado:</strong> {equipo.asignado}</p>
                    <p><strong>Estado:</strong> {equipo.estado}</p>
                    <Link to="/equipos" className="btn btn-secondary">Volver a la lista</Link>
                </div>
            </div>
        </div>
    );
}

export default EquipoDetail;
