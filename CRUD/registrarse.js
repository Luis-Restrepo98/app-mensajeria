import { registrarUsuario } from "../script/api";

const registrarse = document.querySelector('.formulario_fin_registro');
const nombre = document.querySelector('.formulario_text')
const numeroCelular = document.querySelector('.formulario_number')
const contrasena = document.querySelector('.formulario_password')
const urlImagen = document.querySelector('.formulario_url')



registrarse.addEventListener('click', async event => {
  event.preventDefault();

  const nuevoProducto = {
    nombre: nombre.value,
    numeroCelular: numeroCelular.value,
    contrasena: contrasena.value,
    urlImagen: urlImagen.value, 
  }
  await registrarUsuario(nuevoProducto);
});
