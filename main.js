import { getEstoque, transacaoNoEstoque, limpaEstoque } from "./estoque.js";

const olJoao = document.querySelector("#joao");
const olMaria = document.querySelector("#maria");

document.entrada.addEventListener('submit', leFormulario);
document.entrada.reset();

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('LimparLista').addEventListener('click', () => {
        limpaEstoque();
        atualizaTela();
    });
});

atualizaTela();
 
// Função que lê o formulário
function leFormulario(event)
{
    // Impede o comportamento padrão do formulário, que seria o envio e recarregamento da página.
    event.preventDefault(event);

    // Obtém os valores dos campos do formulário.
    const quantidade = document.entrada.quantidade.valueAsNumber;
    const fruta = document.entrada.fruta.value;
    const origem = document.entrada.origem.value;
    const destino = document.entrada.destino.value;
    
    // console.log(`${origem} doa ${quantidade} ${fruta} para ${destino}`);

    // Chama a função transacaoNoEstoque para processar a transação com base nos valores do formulário.
    transacaoNoEstoque(origem, destino, fruta, quantidade);

    // Chama a função atualizaTela para atualizar a interface do usuário após a transação.
    atualizaTela();
}

// Função que preenche a lista
function preencheLista(lista, estoqueDaPessoa) {
    lista.textContent = "";

    if (Array.isArray(estoqueDaPessoa)) {
        for (let i = 0; i < estoqueDaPessoa.length; i++) {
            const monte = estoqueDaPessoa[i];
            const li = document.createElement('li');
            li.textContent = `${monte.tipo}: ${monte.quantidade}`;
            lista.appendChild(li);
        }
    }
}

// Função de atualização da tela
function atualizaTela() {
    const estoque = getEstoque();

    olJoao.innerHTML = "";
    olMaria.innerHTML = "";
    document.entrada.quantidade.value = 1;
    document.entrada.fruta.value = "maca";

    preencheLista(olJoao, estoque.joao);
    preencheLista(olMaria, estoque.maria);
    
}