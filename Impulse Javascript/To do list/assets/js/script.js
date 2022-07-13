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
    livro.atual--;
    setTimeout(function(){
        livro.paginas[livro.atual].style.zIndex = parseInt(zindex)+2;
        alert(parseInt(zindex));
    }, 1000);
};

bleft.onclick = () => {
    livro.paginas[livro.atual].style.transform = "rotateX(30deg) rotateY(180deg)";
    livro.atual++;
};

