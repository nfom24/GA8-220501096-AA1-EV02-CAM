// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/equipos';

export const getEquipos = async () => {
    return await axios.get(API_URL);
};

export const getEquipo = async (id) => {
    return await axios.get(`${API_URL}/${id}`);
};

export const createEquipo = async (equipo) => {
    return await axios.post(API_URL, equipo);
};

export const updateEquipo = async (id, equipo) => {
    return await axios.put(`${API_URL}/${id}`, equipo);
};

export const deleteEquipo = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
};
