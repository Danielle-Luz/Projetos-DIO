const cel = document.querySelectorAll (".cel-transicao");
let contador = 2;

setInterval (() => {
    cel[contador].style.opacity = cel[contador].style.opacity == 1 ? 0 : 1;
    contador = contador > 1 ? contador - 1 : 2;
}, 3000);