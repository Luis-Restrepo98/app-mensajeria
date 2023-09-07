const registrarse = document.querySelector(".boton_resgistrarse");
const iniciarSesion = document.querySelector(".boton_iniciar_sesion");

registrarse.addEventListener("click" , function(e) {
  e.preventDefault();
  document.querySelector(".formulario_regis").style.display= "block";
}); 

iniciarSesion.addEventListener("click" , function(e) {
  e.preventDefault(); // Evita el comportamiento predeterminado del botón
  document.querySelector(".inicio_sesion").style.display = "block";
});




