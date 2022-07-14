let bright = document.getElementById("bright");
let bleft = document.getElementById("bleft");

let livro = {
    paginas: document.querySelectorAll("article"),
    atual: 0
};

let size = livro.paginas.length-1;
//por conta do position absolute nos articles, os últimos elementos no html se tornam visualmente os primeiros, portanto a página atual é a última (size)
livro.atual = size;

bright.onclick = () => {
    let n = 0;
    //ocorre enquanto não tiver iterado sobre todas as páginas viradas (i >= livro.atual), começando pela primeira (size)
    for (let i = size; i >= livro.atual; i--) {
        //cada página virada deve ficar por cima da outra, por isso o z-index da primeira é 0 (n = 0)
        livro.paginas[i].style.zIndex = n;
        //conforme as páginas sobrepõem as outras, as que estão por cima (i--) devem ter z-index maior (n++)
        n++;
    }
    livro.paginas[livro.atual].style.transform = "rotateX(30deg) rotateY(-180deg)";
    //só haverá decréscimo enquanto a página atual for maior que a última página (0)
    if (livro.atual > 0) {
        livro.atual--;
    }
};

bleft.onclick = () => {
    //assim apenas o z-index das páginas viradas é alterado
    //o número de páginas viradas é quantificado por livro.atual
    for (let i = 0; i <= livro.atual; i++) {
        //o número da página virada (i) também coincide com o seu z-index ideal ao ser virada (i)
        livro.paginas[i].style.zIndex = i;
    }
    livro.paginas[livro.atual].style.transform = "rotateX(30deg) rotateY(0deg)";
    //para que a página atual não ultrapasse o número de páginas (tamanho do vetor)
    if(livro.atual < size) {
        livro.atual++;
    }
};
