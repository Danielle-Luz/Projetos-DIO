let b_toggle_header = document.querySelectorAll (".b-expand-input");
let b_add_task = document.querySelectorAll (".b-add-task");
let tasklists = document.querySelectorAll (".section-tasks");
let b_cancel = document.querySelectorAll (".b-cancel");
let lista_to_do;
let lista_doing;
let lista_done;
let listas;
let el_pai_anterior;
let dragged;

if (localStorage.getItem ("lista_to_do") == null) {
    localStorage.setItem ("lista_to_do", JSON.stringify (new Array ()));
}
if (localStorage.getItem ("lista_doing") == null) {
    localStorage.setItem ("lista_doing", JSON.stringify (new Array()));
}
if (localStorage.getItem ("lista_done") == null) {
    localStorage.setItem ("lista_done", JSON.stringify (new Array()));
}
lista_to_do = JSON.parse (localStorage.getItem ("lista_to_do"));
lista_doing = JSON.parse (localStorage.getItem ("lista_doing"));
lista_done = JSON.parse (localStorage.getItem ("lista_done"));
listas = new Array (lista_to_do, lista_doing, lista_done);

let achar_elemento = (elemento, query, seletor) => {
    if (query != null) {
        return query;
    }
    elemento = elemento.parentNode;
    return achar_elemento (elemento, elemento.querySelector (seletor), seletor);
}

listas.forEach ( (lista, index) => {
    let contador = achar_elemento (tasklists[index], tasklists[index].querySelector (".counter"), ".counter");
    contador.textContent = lista.length;
    if (lista[0] != undefined) {
        lista.forEach ( (item, index_item) => {
            let task_container = document.createElement ("article");
            let task_content = document.createElement ("p");
            let task_menu_container = document.createElement ("div");
            let b_menu = document.createElement ("button");
            let menu = document.createElement ("article");
            let b_delete = document.createElement ("button");
            task_container.className = "task bg-cinza d-flex between";
            task_menu_container.className = "div-menu-task";
            b_menu.className = "b-task-menu";
            menu.className = "menu-task d-none bg-cinza botoes-texto";
            b_delete.className = "del";
            task_content.textContent = item;
            b_menu.textContent = "...";
            b_delete.textContent = "Excluir";
            task_container.setAttribute ("draggable", "true");
            menu.appendChild (b_delete);
            task_menu_container.appendChild (b_menu);
            task_menu_container.appendChild (menu);
            task_container.appendChild (task_content);
            task_container.appendChild (task_menu_container);
            tasklists[index].appendChild (task_container);

            b_menu.onclick = () => {
                let todos_taskmenus = document.querySelectorAll (".menu-task");
                todos_taskmenus.forEach ( menu_lista => {
                    if (menu_lista != menu) {
                        menu_lista.classList.add ("d-none");
                    }
                });
                menu.classList.toggle ("d-none");
            };

            b_delete.onclick = () => {
                task_container.parentNode.removeChild (task_container);
                lista.splice (index_item, 1);
                localStorage.setItem (index == 0 ? "lista_to_do" : index == 1 ? "lista_doing" : "lista_done", JSON.stringify (lista));
                contador.textContent = parseInt (contador.textContent) - 1;
            };

            task_container.ondragstart = event => {
                dragged = event.target;
                el_pai_anterior = event.target.parentNode;
            };

            task_container.ondragend = () => {
                let i;
                let counter = achar_elemento (el_pai_anterior, el_pai_anterior.querySelector (".counter"), ".counter");
                counter.textContent = parseInt (counter.textContent) > 0 ? parseInt (counter.textContent) - 1 : 0;
                for (i = 0; i < 2; i++) {
                    if (tasklists[i] == el_pai_anterior) {
                        break;
                    }
                }
                for (let x = 0; x < listas[i].length; x++) {
                    if (listas[i][x] == task_container.querySelector ("p").textContent) {
                        listas[i].splice (x, 1);
                        break;
                    }
                }
                localStorage.setItem (i == 0 ? "lista_to_do" : i == 1 ? "lista_doing" : "lista_done", JSON.stringify (listas[i]));
            };
        });
    }
});

tasklists.forEach ( (tasklist, index) => {
    tasklist.ondragover = event => {
        event.preventDefault();
    };
    tasklist.ondrop = event=> {
        let contador = achar_elemento (event.target, event.target.querySelector (".counter"), ".counter");
        contador.textContent = parseInt (contador.textContent) + 1;
        tasklist.appendChild (dragged);
        if (dragged != undefined) {
            listas[index].push (dragged.querySelector ("p").textContent);
            localStorage.setItem (index == 0 ? "lista_to_do" : index == 1 ? "lista_doing" : "lista_done", JSON.stringify (listas[index]));
        }
    };
});

b_cancel.forEach ( botao => {
    botao.onclick = () => {
        let div_input = achar_elemento (botao, botao.querySelector(".div-add"), ".div-add");
        div_input.classList.add ("d-none");
        div_input.querySelector ("textarea").value = "";
    }
});

b_toggle_header.forEach ((botao, index) => {
    botao.onclick = () => {
        let div_input = achar_elemento (botao, botao.querySelector(".div-add"), ".div-add");
        div_input.classList.toggle("d-none");
        div_input.querySelector ("textarea").value = "";
    };

    b_add_task[index].onclick = () => {
        let textarea_valor = achar_elemento (b_add_task[index], b_add_task
        [index].querySelector ("textarea"), "textarea").value;
        if (textarea_valor) {
            listas[index].push (textarea_valor);
            localStorage.setItem (index == 0 ? "lista_to_do" : index == 1 ? "lista_doing" : "lista_done", JSON.stringify (listas[index]));
            location.reload();
        }
    }
});