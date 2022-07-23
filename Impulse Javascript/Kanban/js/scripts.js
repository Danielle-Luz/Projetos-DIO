let b_toggle_header = document.querySelectorAll(".b-add");

let achar_elemento = (elemento, query, seletor) => {
    if (query != null) {
        return query;
    }
    elemento = elemento.parentNode;
    return achar_elemento(elemento, elemento.querySelector(seletor), seletor);
}

b_toggle_header.forEach((botao, index) => {
    botao.onclick = () => {
        let div_input = achar_elemento (botao, botao.querySelector(".div-add"), ".div-add");
        div_input.classList.toggle("d-none");
    };
});