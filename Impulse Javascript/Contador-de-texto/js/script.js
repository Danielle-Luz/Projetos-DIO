let textarea = document.querySelector ("textarea");
let n_letras = document.getElementById ("n-letras");
let n_char = document.getElementById ("n-char");
let n_word = document.getElementById ("n-word");
let n_paragrafo = document.getElementById ("n-paragrafo");
let n_tempo = document.getElementById ("n-tempo");

textarea.oninput = () => {
    n_char.textContent = textarea.value.length;
    let letras = textarea.value.split("");
    n_letras.textContent = letras.filter(c => {
        return /[a-zA-Z]/.test (c);
    }).length;
    let palavras = textarea.value.split(" ");
    n_word.textContent = textarea.value == "" ? "0" : letras[textarea.value.length-1] == " " ? palavras.length-1 : palavras.length;
    n_paragrafo.textContent = textarea.value.length == 0 ? 0 : textarea.value.split("\n").length;
    let segundos = palavras.length/5;
    n_tempo.textContent = textarea.value == "" ? "0.0s" : segundos < 60 ? segundos.toFixed(1) + "s" : segundos < 3600 ? (segundos/60).toFixed(1) + " min" : (segundos/3600).toFixed(1) + " horas";
};