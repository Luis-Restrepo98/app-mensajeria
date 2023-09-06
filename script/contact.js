const openModal =document.querySelector(".header_contacto");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".flecha");


openModal.addEventListener("click", (e)=>{
  e.preventDefault();
modal.classList.add("modal--show");

});


closeModal.addEventListener("click", (e)=>{
  e.preventDefault();
modal.classList.remove("modal--show");

});

const nuevoContacto = document.querySelector(".header_contac");
const cerrarModalBtn = document.querySelector(".formulario_guardar");
const closeAgregar = document.querySelector(".flecha-agregar");


nuevoContacto.addEventListener("click" , function() {
  document.querySelector(".modal-content").style.display = "block";
});


cerrarModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

closeAgregar.addEventListener("click" , function() {
  document.querySelector(".modal-content").style.display = "none";
});


const formulario = document.querySelector(".formulario_agregar");
formulario.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita que la página se recargue al enviar el formulario
    // Aquí puedes agregar el código para procesar el formulario
    alert("Formulario enviado");
    modal.style.display = "none";
});
