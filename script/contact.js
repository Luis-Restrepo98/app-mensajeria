const openModal =document.querySelector(".fa-message");
const modal = document.querySelector(".principal_modal");
const closeModal = document.querySelector(".flecha");


openModal.addEventListener("click", (e)=>{
  e.preventDefault();
document.querySelector(".principal_modal").style.display="block"
document.querySelector(".contenedor_home").style.display="none"
openModal.style.display="none"
document.querySelector(".conversation").style.display="none"
});


closeModal.addEventListener("click", (e)=>{
  e.preventDefault();
  document.querySelector(".contenedor_home").style.display="block"
  modal.style.display=("none")
  openModal.style.display="block"
  document.querySelector(".conversation").style.display="block"
});

const nuevoContacto = document.querySelector(".header_contac");
const formularioModalBtn = document.querySelector(".formulario_agregar");
const closeAgregar = document.querySelector(".flecha-agregar");


nuevoContacto.addEventListener("click" , function() {
  document.querySelector(".modal-conten").style.display = "block";
  document.querySelector(".principal_modal").style.display = "none";

});

 closeAgregar.addEventListener("click" , function() {
  document.querySelector(".modal-conten").style.display = "none";
  document.querySelector(".principal_modal").style.display = "block";
}); 

