let bright = document.getElementById("bright");
let bleft = document.getElementById("bleft");

let livro = {
    paginas: document.querySelectorAll("article"),
    atual: 0
};

let size = livro.paginas.length-1;
livro.atual = size;

for(let i = size; i >= 0; i-- ){
    livro.paginas[i].style.Zindex = size;
    size--;
}

size = livro.paginas.length-1;

bright.onclick = () => {
    let n = 0;
    for (let i = size; i >= livro.atual; i--) {
        livro.paginas[i].style.zIndex = n;
        n++;
    }
    livro.paginas[livro.atual].style.transform = "rotateX(30deg) rotateY(-180deg)";
    if (livro.atual > 0) {
        livro.atual--;
    }
};

bleft.onclick = () => {
    if (livro.atual <= size) {
        livro.paginas[livro.atual].style.zIndex = size-parseInt(window.getComputedStyle(livro.paginas[livro.atual]).getPropertyValue("z-index"));
        livro.paginas[livro.atual].style.transform = "rotateX(30deg) rotateY(0deg)";
        if(livro.atual < size) {
            livro.atual++;
        }
    }
};
