let bright = document.getElementById("bright");
let bleft = document.getElementById("bleft");

let livro = {
    paginas: document.querySelectorAll("article"),
    atual: 0
};

livro.atual = livro.paginas.length-1;

bright.onclick = () => {
    livro.paginas[livro.atual].style.transform = "rotateX(30deg) rotateY(-180deg)";
    let zindex = window.getComputedStyle(livro.paginas[livro.atual]).getPropertyValue("z-index");
    if (livro.atual > 0) {
        livro.atual--;
        setTimeout(function(){
            livro.paginas[livro.atual].style.zIndex = parseInt(zindex)+2;
        }, 1000);
    }
};

bleft.onclick = () => {
    if (livro.atual <= (livro.paginas.length-1)) {
        let zindex= window.getComputedStyle(livro.paginas[livro.atual]).getPropertyValue("z-index");
        livro.paginas[livro.atual+1].style.transform = "rotateX(30deg) rotateY(0deg)";
        livro.paginas[livro.atual+1].style.zIndex=parseInt(zindex)+2;
        livro.atual++;
    }
};

