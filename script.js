const campoTarefa = document.getElementById("tarefa");
const lista = document.getElementById("lista");
const contador = document.getElementById("contador");

function adicionarTarefa() {
    const texto = campoTarefa.value.trim();

    if (texto === "") {
        alert("Digite uma tarefa primeiro!");
        return;
    }

    const item = document.createElement("li");

    const descricao = document.createElement("span");
    descricao.textContent = texto;

    const acoes = document.createElement("div");
    acoes.className = "acoes";

    const concluir = document.createElement("button");
    concluir.textContent = "Concluir";

    concluir.onclick = function() {
        item.classList.toggle("concluida");

        concluir.textContent = item.classList.contains("concluida")
            ? "Desfazer"
            : "Concluir";
    };

    const excluir = document.createElement("button");
    excluir.textContent = "Excluir";
    excluir.className = "excluir";

    excluir.onclick = function() {
        item.remove();
        atualizarContador();
    };

    acoes.appendChild(concluir);
    acoes.appendChild(excluir);

    item.appendChild(descricao);
    item.appendChild(acoes);

    lista.appendChild(item);

    campoTarefa.value = "";
    campoTarefa.focus();

    atualizarContador();
}

function atualizarContador() {
    const quantidade = lista.children.length;

    if (quantidade === 0) {
        contador.textContent = "Você ainda não possui tarefas.";
    } else {
        contador.textContent =
            "Você possui " + quantidade + " tarefa(s).";
    }
}

campoTarefa.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
});