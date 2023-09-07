import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

const BASE_URL = "https://app-mensajeria-sere.onrender.com"

export const registrarUsuario = async (body) => {
    try {
        const response = await axios.post(`${BASE_URL}/usuarios/` , body);
        return response; 
    } catch (error) {
        console.error(error);
    }
}

export const inicioSesion = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/usuarios/`);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const editarUsuario = async (id, body) => {
    try {
        const response = await axios.put(`${BASE_URL}/usuarios/${id}`, body);
        return response;
    } catch (error) {
        console.error(error);
    }
}
