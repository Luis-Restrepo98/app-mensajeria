const registrarse = document.querySelector(".boton_resgistrarse");
const iniciarSesion = document.querySelector(".boton_iniciar_sesion");

iniciarSesion.addEventListener('click', function(event) {
  event.preventDefault(); // Evita el comportamiento predeterminado del botón
  document.querySelector(".inicio_sesion").style.display = "block";
});

registrarse.addEventListener("click" , function(event) {
  event.preventDefault();
  document.querySelector(".formulario_regis").style.display= "block";
} )