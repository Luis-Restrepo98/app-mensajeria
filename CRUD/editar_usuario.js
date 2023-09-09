import { editarUsuario, traerUsuarioInicioSesion } from "../script/api.js";

document.addEventListener('DOMContentLoaded', async function() {
    const idcontraseña = localStorage.getItem('contrasena');
    const idcelular = localStorage.getItem('celular');

    if (idcontraseña && idcelular) {
        const user = await traerUsuarioInicioSesion(idcontraseña, idcelular);

        if (user) {
            const modalPerfil = document.querySelector('.modal_perfil');
            const modalPerfilAvatar = modalPerfil.querySelector('.modal_perfil_avatar');
            const modalPerfilNombre = modalPerfil.querySelector('.modal_perfil_nombre');
            
            modalPerfilAvatar.src = user.perfil;
            modalPerfilNombre.textContent = user.nombre;
            
            
            
        }
        
        // ... Continúa con la gestión del formulario aquí
    }
});

