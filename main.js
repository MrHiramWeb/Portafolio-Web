let cerrar = document.querySelectorAll(".close")[0];
let cerrar2 = document.querySelectorAll(".close2")[0];
let abrir = document.querySelectorAll(".cta")[0];
let abrir2 = document.querySelectorAll(".cta2")[0];
let modal = document.querySelectorAll(".modal")[0];
let modal2 = document.querySelectorAll(".modal2")[0];
let modalc = document.querySelectorAll(".modal-container")[0];
let modalc2 = document.querySelectorAll(".modal-container2")[0];

abrir.addEventListener("click", function(e){
    e.preventDefault();
    modalc.style.opacity = "1";
    modalc.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});

abrir2.addEventListener("click", function(e){
    e.preventDefault();
    modalc2.style.opacity = "1";
    modalc2.style.visibility = "visible";
    modal2.classList.toggle("modal-close2");
});

cerrar.addEventListener("click", function(){
    modal.classList.toggle("modal-close");
    
    setTimeout(function(){
    modalc.style.opacity = "0";
    modalc.style.visibility = "hidden";
    },850)
})

cerrar2.addEventListener("click", function(){
    modal2.classList.toggle("modal-close2");
    
    setTimeout(function(){
    modalc2.style.opacity = "0";
    modalc2.style.visibility = "hidden";
    },850)
})

window.addEventListener("click", function(e){
    console.log(e.target)
})
