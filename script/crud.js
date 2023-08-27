const URLUsuarios = "https://app-mensajeria-sere.onrender.com/usuarios/" 

const registro = document.querySelector(".formulario_registro")
document.addEventListener("DOMContentLoaded", function() {
    const botonRegistrarse = document.querySelector(".formulario_fin_registro");
  
    botonRegistrarse.addEventListener("click", function() {
      const nombre = document.querySelector(".formulario_nombre").value;
      const numeroCelular = document.querySelector(".formulario_number").value;
      const contrasena = document.querySelector(".formulario_password").value;
      const urlImagen = document.querySelector(".formulario_url").value;
      // Aquí puedes hacer lo que quieras con los datos capturados, como enviarlos a un servidor
      // para procesar el registro o validar los datos en el lado del cliente.
      
      console.log("Nombre:", nombre);
      console.log("numero:", numeroCelular);
      console.log("Contraseña:", contrasena);
      console.log("url:" , urlImagen);
    });
  });
 