const textarea = document.getElementsByName ("palindromo")[0];
const submit = document.querySelector ("button");
const resultado = document.getElementById ("resultado");
const letras_acentos = {
    letras: ["a", "e", "i", "o", "u"],
    acentos: [["à", "á", "ã", "â"], ["è", "é", "ê"], ["ì", "í", "î"], ["ò", "ó", "õ", "ô"], ["ù", "ú", "û"]]
};

submit.onclick = () => {
    let valor_textarea = textarea.value
    if (!valor_textarea) {
        alert ("Insira um valor no campo.");
        return;
    }
    valor_textarea = valor_textarea.toLowerCase();
    let valor_nospace = valor_textarea.replace(/\s/g, "");
    letras_acentos.acentos.forEach ((acentuadas, index) => {
        acentuadas.forEach (acento => {
            let regex = new RegExp (acento, "g");
            valor_nospace = valor_nospace.replace (regex, letras_acentos.letras[index]);
        })
    });
    valor_nospace = valor_nospace.replace ( /[^a-zA-Z0-9]/g, "");
    const valor_contrario = valor_nospace.split("").reverse().join().replace(/,/g, "");
    if (valor_nospace == valor_contrario) {
        resultado.innerHTML = "Resultado: <strong class='sim-palindromo'> É um palíndromo.</strong>";
    } else {
        resultado.innerHTML = "Resultado: <strong class='nao-palindromo'> Não é um palíndromo.</strong>";
    }
    return false;
};