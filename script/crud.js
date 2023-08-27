const URLUsuarios = "https://35.160.120.126/app-mensajeria-sere.onrender.com/usuarios/"

document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector(".formulario_registro");
    const botonRegistrarse = document.querySelector(".formulario_fin_registro");
  
    botonRegistrarse.addEventListener("submit", function() {
      const nombre = document.querySelector(".formulario_text").value;
      const numeroCelular = document.querySelector(".formulario_number").value;
      const contrasena = document.querySelector(".formulario_password").value;
      const urlImagen = document.querySelector(".formulario_url").value;
      // Aquí puedes hacer lo que quieras con los datos capturados, como enviarlos a un servidor
      // para procesar el registro o validar los datos en el lado del cliente.
      
      console.log("Nombre:", nombre);
      console.log("numero:", numeroCelular);
      console.log("Contraseña:", contrasena);
      console.log("url :" , urlImagen);
    });
  });
