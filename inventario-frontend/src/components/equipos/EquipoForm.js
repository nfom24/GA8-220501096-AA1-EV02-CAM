// src/components/Equipos/EquipoForm.js
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createEquipo, getEquipo, updateEquipo } from "../../services/api";

function EquipoForm() {
  const [equipo, setEquipo] = useState({
    nombre: "",
    marca: "",
    modelo: "",
    serial_inventario: "",
    asignado: "",
    estado: "activo",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchEquipo();
    }
  }, [id]);

  const fetchEquipo = async () => {
    const response = await getEquipo(id);
    setEquipo(response.data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEquipo({ ...equipo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateEquipo(id, equipo);
    } else {
      await createEquipo(equipo);
    }
    navigate("/equipos");
  };

  return (
    <div className="container mt-5">
      <h1>{id ? "Editar Equipo" : "Crear Equipo"}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            value={equipo.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="marca">Marca:</label>
          <input
            type="text"
            name="marca"
            className="form-control"
            value={equipo.marca}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="modelo">Modelo:</label>
          <input
            type="text"
            name="modelo"
            className="form-control"
            value={equipo.modelo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="serial_inventario">Serial Inventario:</label>
          <input
            type="text"
            name="serial_inventario"
            className="form-control"
            value={equipo.serial_inventario}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="asignado">Asignado:</label>
          <input
            type="text"
            name="asignado"
            className="form-control"
            value={equipo.asignado}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="estado">Estado:</label>
          <select
            name="estado"
            className="form-control"
            value={equipo.estado}
            onChange={handleChange}
            required
          >
            <option value="activo">Activo</option>
            <option value="mantenimiento">Mantenimiento</option>
            <option value="baja">Baja</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          {id ? "Actualizar" : "Guardar"}
        </button>
      </form>
    </div>
  );
}

export default EquipoForm;
