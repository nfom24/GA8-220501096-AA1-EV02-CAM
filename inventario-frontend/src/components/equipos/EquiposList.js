// src/components/Equipos/EquiposList.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getEquipos, deleteEquipo } from "../../services/api";

function EquiposList() {
  const [equipos, setEquipos] = useState([]);

  useEffect(() => {
    fetchEquipos();
  }, []);

  const fetchEquipos = async () => {
    const response = await getEquipos();
    setEquipos(response.data);
  };

  const handleDelete = async (id) => {
    await deleteEquipo(id);
    fetchEquipos();
  };

  return (
    <div className="container mt-5">
      <h1>Lista de Equipos</h1>
      <Link to="/equipos/new" className="btn btn-primary mb-3">
        Crear Equipo
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Serial Inventario</th>
            <th>Asignado</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {equipos.map((equipo) => (
            <tr key={equipo.id}>
              <td>{equipo.id}</td>
              <td>{equipo.nombre}</td>
              <td>{equipo.marca}</td>
              <td>{equipo.modelo}</td>
              <td>{equipo.serial_inventario}</td>
              <td>{equipo.asignado}</td>
              <td>{equipo.estado}</td>
              <td>
                <Link
                  to={`/equipos/${equipo.id}`}
                  className="btn btn-info btn-sm"
                >
                  Ver
                </Link>
                <Link
                  to={`/equipos/edit/${equipo.id}`}
                  className="btn btn-warning btn-sm"
                >
                  Editar
                </Link>
                <button
                  onClick={() => handleDelete(equipo.id)}
                  className="btn btn-danger btn-sm"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <footer className="footer">
        <p>&copy; 2024 SOLILO SOFTWARE. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default EquiposList;
