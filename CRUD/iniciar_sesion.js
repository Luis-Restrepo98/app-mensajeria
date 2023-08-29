import { inicioSesion } from "../script/api.js";

const btnInicio = document.querySelector('.formulario_aceptar');
const numeroCelular = document.querySelector('.formulario_celular');
const contrasena = document.querySelector('.formulario_contraseña')

 
btnInicio.addEventListener("click" , async event => {
    event.preventDefault();
    
    if(numeroCelular.value && contrasena.value) {
        const verificacionUsuario = {
        celular: numeroCelular.value,
        contrasena: contrasena.value,
        }
    
        const usuarios = await inicioSesion();
    
        const usuarioExiste = usuarios.some(usuario => 
        usuario.Celular === verificacionUsuario.numeroCelular &&
        usuario.contraseña === verificacionUsuario.contrasena
        );
    
        if(usuarioExiste) {
        // Si el usuario existe
        Swal.fire({
            icon: 'success',
            title: 'Inicio de sesión exitoso',
            text: '¡Has iniciado sesión con éxito!',
        }).then(() => {
            window.location.href = "../html/home.html";
          });
        // Aquí puedes redirigir al usuario a la página principal o a donde desees
        } else {
        // Si el usuario no existe
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Usuario no registrado. Por favor regístrese.',
        }).then(() => {
            document.querySelector(".inicio_sesion").style.display= "none"
            document.querySelector(".formulario_regis").style.display= "block";
        
          });
        // Aquí puedes redirigir al usuario al formulario de registro
        }
    } else {
        // Si el numero de celular y la contraseña no están ingresados
        Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor ingrese su número de celular y contraseña',
        });
    }
    });