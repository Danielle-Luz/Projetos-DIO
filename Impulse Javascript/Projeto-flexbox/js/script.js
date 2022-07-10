const b_hamburguer = document.querySelector(".button-hamburguer");
const menu = document.querySelector(".nav-links");
b_hamburguer.onclick= ()=>{
    menu.classList.toggle("d-block");
};