const tresPuntos = document.querySelector(".header_trespuntos");

tresPuntos.addEventListener('click', function() {
    document.querySelector(".modal_ajustes").style.display= "block"
});

const ajustes = document.querySelector(".modal_ajuste_perfil");

ajustes.addEventListener("click", function() {
    document.querySelector(".modal_ajustes_perfil").style.display= "block";
    document.querySelector(".contenedor_home").style.display= "none";
    document.querySelector(".modal_ajustes").style.display= "none"
    document.querySelector(".conversation").style.display="none"
    document.querySelector(".fa-message").style.display="none"
});

const atras = document.querySelector(".modal_header-flecha_izquierda");

atras.addEventListener("click", function(){
    document.querySelector(".modal_ajustes_perfil").style.display= "none";
    document.querySelector(".contenedor_home").style.display= "block";
    document.querySelector(".conversation").style.display="block"
    document.querySelector(".fa-message").style.display="block"
});

