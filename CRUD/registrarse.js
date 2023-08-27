import { registrarUsuario } from "../script/api.js";

const btnRegistrarse = document.querySelector('.formulario_fin_registro');
const nombre = document.querySelector('.formulario_nombre')
const numeroCelular = document.querySelector('.formulario_number')
const contrasena = document.querySelector('.formulario_password')
const urlImagen = document.querySelector('.formulario_url')



btnRegistrarse.addEventListener('click', async event => {
  event.preventDefault();

  const nuevoUsuario = {
    nombre: nombre.value,
    numeroCelular: numeroCelular.value,
    contrasena: contrasena.value,
    urlImagen: urlImagen.value, 
  }
  await registrarUsuario(nuevoUsuario);
});
