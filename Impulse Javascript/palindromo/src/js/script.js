const textarea = document.getElementsByName ("palindromo")[0];
const submit = document.querySelector ("button");
const resultado = document.getElementById ("resultado");

submit.onclick = () => {
    const valor_nospace = valor_textarea.replace(/\s/g, "");
    const valor_contrario = valor_nospace.split("").reverse().join().replace(/,/g, "");
    if (valor_nospace == valor_contrario) {
        resultado.innerHTML = "Resultado: <strong class='sim-palindromo'> É um palíndromo.</strong>";
    } else {
        resultado.innerHTML = "Resultado: <strong class='nao-palindromo'> Não é um palíndromo.</strong>";
    }
    return false;
};