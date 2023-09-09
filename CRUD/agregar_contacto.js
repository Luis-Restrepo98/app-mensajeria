import { agregarContacto, fetchContactos} from "../script/api.js";


const btnGuardar = document.querySelector('.button_guardar');
const nombre = document.querySelector('.formulario_nombre');
const apellido = document.querySelector('.formulario_apellido');
const celular = document.querySelector('.formulario_celular')

btnGuardar.addEventListener('click', async event => {
  event.preventDefault(); 
/*   document.querySelector(".modal-conten").style.display="none"; */
 let numeroAleatorio = Math.random();

  const nuevoContacto = {
    id:parseInt(numeroAleatorio),
    nombre: nombre.value,
    apellido: apellido.value,
    celular: celular.value,
  }


  await agregarContacto(nuevoContacto);
  await fetchContactos();

});

