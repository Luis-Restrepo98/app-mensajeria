 import axios from 'axios';

const BASE_URL = "https://35.160.120.126/app-mensajeria-sere.onrender.com/usuarios/"

export const registrarUsuario = async (body) => {
    try {
        const response = await axios.post(`${BASE_URL}/usuarios/` , body);
        return response; 
    } catch (error) {
        console.error(error);
    }
}