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
const formularioModalBtn = document.querySelector(".formulario_agregar");
const closeAgregar = document.querySelector(".flecha-agregar");


nuevoContacto.addEventListener("click" , function() {
  document.querySelector(".modal-conten").style.display = "block";
});

closeAgregar.addEventListener("click" , function() {
  document.querySelector(".modal-conten").style.display = "none";
});