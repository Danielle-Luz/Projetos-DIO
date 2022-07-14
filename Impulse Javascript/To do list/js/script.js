let paginas = document.querySelectorAll(".pagina");

let b_esquerda = document.getElementById("b-esquerda");
let b_direita = document.getElementById("b-direita");
let done_button = document.querySelectorAll(".b-done");

let numero_paginas = paginas.length-1;
let pagina_atual = numero_paginas;
let transicao_terminou = true;

b_direita.onclick = () => {
    if (transicao_terminou) {
        paginas[pagina_atual].classList.add("pagina-virada");
        let posicao = 0;
        transicao_terminou = false;
        setTimeout(() => {
            for (let i = numero_paginas; i >= pagina_atual; i--) {
                paginas[i].style.zIndex = posicao;
                posicao++;
            }
            transicao_terminou = true;
        }, 1000);
        if (pagina_atual > 0) {
            pagina_atual--;//
        }
    }
}

b_esquerda.onclick = () => {
    if (transicao_terminou) {
        paginas[pagina_atual].classList.remove("pagina-virada");
        transicao_terminou = false;
        setTimeout ( () => {
            for (let i = 0; i <= pagina_atual; i++) {
                paginas[i].style.zIndex = i;
            }
            transicao_terminou = true;
        }, 1000);
        if (pagina_atual < numero_paginas) {
            pagina_atual++;//
        }
    }
};

for (let botao of done_button) {
    botao.onclick = () => {
        if (botao.style.color == "white") {
            botao.style.color = "black";
            botao.parentNode.querySelectorAll("td")[0].querySelector("input").value.style.textDecoration = "line-through";
        } else {
            botao.style.color = "white";
            botao.parentNode.querySelectorAll("td")[0].querySelector("input").value.style.textDecoration = "none";
        }
    };
}