let b_toggle_header = document.querySelectorAll (".b-expand-input");
let b_add_task = document.querySelectorAll (".b-add-task");
let tasklists = document.querySelectorAll (".section-tasks");
let b_cancel = document.querySelectorAll (".b-cancel");
let lista_to_do;
let lista_doing;
let lista_done;
let listas;

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
                tasklists[index].removeChild (task_container);
                lista.splice (index_item, 1);
                localStorage.setItem (index == 0 ? "lista_to_do" : index == 1 ? "lista_doing" : "lista_done", JSON.stringify (lista));
            };
        });
    }
});

b_cancel.forEach ( botao => {
    botao.onclick = () => {
        let div_input = achar_elemento (botao, botao.querySelector(".div-add"), ".div-add");
        div_input.classList.add ("d-none");
    }
});

b_toggle_header.forEach ((botao, index) => {
    botao.onclick = () => {
        let div_input = achar_elemento (botao, botao.querySelector(".div-add"), ".div-add");
        div_input.classList.toggle("d-none");
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