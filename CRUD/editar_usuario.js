import { editarUsuario, traerUsuarioInicioSesion } from "../script/api.js";

document.addEventListener('DOMContentLoaded', async function() {
  const usuarioPerfil = document.querySelector(".modal_perfil");

  const celular = localStorage.getItem('celular');
  const contrasena = localStorage.getItem('contrasena');

  if (celular && contrasena) {
      try {
          const usuarios = await traerUsuarioInicioSesion(contrasena, celular);

          const usuarioEncontrado = usuarios.find(usuario => usuario.celular === celular && usuario.contraseña === contrasena);
        console.log(usuarioEncontrado);
          if (usuarioEncontrado) {
              const { perfil, nombre } = usuarioEncontrado;
        
              usuarioPerfil.innerHTML = `
                  <img class="modal_perfil_avatar" src="${perfil}" >
                  <h2 class="modal_perfil_nombre">${nombre}</h2>`;
          } else {
              console.error('No se encontró ningún usuario con esos datos.');
          }
      } catch (error) {
          console.error('Error al obtener el usuario:', error);
      }
  } else {
      console.error('Los datos del usuario no están disponibles en localStorage.');
  }
//editar nombre y foto del usuario//

usuarioPerfil.addEventListener("click", function () {
        document.querySelector(".modal_editar").style.display= "block"
        document.querySelector(".modal_ajustes_perfil").style.display= "none"
    });
    

});


document.addEventListener('DOMContentLoaded', async function() {
    const editarPerfil = document.querySelector(".modal_editar");
  
    const celular = localStorage.getItem('celular');
    const contrasena = localStorage.getItem('contrasena');
  
    if (celular && contrasena) {
        try {
            const usuarios = await traerUsuarioInicioSesion(contrasena, celular);
  
            const usuarioEncontrado = usuarios.find(usuario => usuario.celular === celular && usuario.contraseña === contrasena);
  
            if (usuarioEncontrado) {
                const { perfil, nombre, celular } = usuarioEncontrado;
  
                editarPerfil.innerHTML = `
                <header class="modal_editar_foto">
                <i class="fa-solid fa-arrow-left-long"></i>
                <h1 class="modal_editar_perfil">Perfil</h1>
            </header>
            <section>
                <div class="modal_imagen"><img class="modal_foto" src="${perfil}" ><i class="fa-solid fa-pencil"></i></div>
                <article class="modal_nombre">
                    <i class="fa-solid fa-user"></i>
                    <div>
                        <h2 class="modal_edit_nombre">Nombre</h2><h3 class="nombre">${nombre}</h3>
                    </div>
                </article>
                <article class="modal_telefono">
                    <i class="fa-duotone fa-phone"></i>
                    <div>
                        <h2>Telefono</h2>
                        <p>${celular}</p>
                    </div>
                </article>
            </section>

        </section>`
                   
        const editarFotoAtras = document.querySelector(".fa-arrow-left-long");
    
    editarFotoAtras.addEventListener("click", function () {
        editarPerfil.style.display= "none"
        document.querySelector(".modal_ajustes_perfil").style.display= "block"
        
    })
            } else {
                console.error('No se encontró ningún usuario con esos datos.');
            }
        } catch (error) {
            console.error('Error al obtener el usuario:', error);
        }
    } else {
        console.error('Los datos del usuario no están disponibles en localStorage.');
    }
});

/* const pencilEdit = document.querySelector(".")

const modalEditarProducto = document.querySelector('.modal-editar-producto__background');
const botonCerrarModal = document.querySelector('.cerrar');
const nuevoNombre = document.querySelector('.nuevo-nombre');
const nuevoPrecio = document.querySelector('.nuevo-precio');
const nuevaDescripcion = document.querySelector('.nueva-descripcion');
const botonAceptarCambios = document.querySelector('.aceptar');

botonesEditar.forEach(botonEditar => {
  botonEditar.onclick = async () => {
    modalEditarProducto.style.display = 'grid';
    botonAceptarCambios.addEventListener('click', async () => {
      const edicion = {
        nombre: nuevoNombre.value,
        precio: nuevoPrecio.value,
        descripcion: nuevaDescripcion.value
      }
      editarUsuario(botonEditar.parentElement.id, edicion);
    });
    botonCerrarModal.addEventListener('click', () => {
      modalEditarProducto.style.display = 'none';
    })
  }
}); */