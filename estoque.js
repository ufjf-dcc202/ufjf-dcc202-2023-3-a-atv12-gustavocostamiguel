// Criação de um dicionário que armazena o estoque de joao e maria
let estoque = {
    'joao': [
        {'tipo': 'maca', 'quantidade': 1},
    ],
    'maria': [
        {'tipo': 'maca', 'quantidade': 2},
    ]
};

//verificação se o dicionário está correto
//console.log(estoque);

// Função que retorna o estoque
function getEstoque() {
    return structuredClone(estoque);
}

// Função de transação de frutas no estoque
function transacaoNoEstoque(origem, destino, tipo, quantidade) {
    // Verifica se a origem não existe no estoque e não é o "pomar", então cria uma entrada vazia para ela.
    if (!estoque[origem] && origem !== "pomar") {
        estoque[origem] = [];
        console.log(estoque[origem]);
    }

    // Verifica se o destino não existe no estoque e não é o "pomar", então cria uma entrada vazia para ele.
    if (!estoque[destino] && destino !== "pomar") {
        estoque[destino] = [];
        console.log(estoque[destino]);
    }

    // Se a quantidade for negativa ou a origem for igual ao destino, a transação não é válida, então retorna.
    if (quantidade < 0 || origem === destino) {
        console.log(quantidade);
        console.log(origem);
        console.log(destino);
        return;
    }

    // Se o destino for o "pomar", ajusta a quantidade do item na origem.
    if (destino === "pomar") {
        let itemEncontrado = estoque[origem].find(item => item.tipo === tipo);
        // console.log(itemEncontrado);

        if (itemEncontrado) {
            // Se a quantidade disponível na origem for suficiente, subtrai a quantidade.
            if (itemEncontrado.quantidade >= quantidade) {
                itemEncontrado.quantidade -= quantidade;
            } else {
                // Se a quantidade disponível for menor que a quantidade desejada, zera a quantidade.
                itemEncontrado.quantidade = 0;
            }
        } else {
            // Se o item não existir na origem, a transação não é válida.
            return;
        }
        return;
    }

    // Se a origem for o "pomar", adiciona a quantidade do item ao destino.
    if (origem === "pomar") {
        const itemEncontrado = estoque[destino].find(item => item.tipo === tipo);
        // console.log(itemEncontrado);

        if (itemEncontrado) {
            // Se o item já existe no destino, incrementa a quantidade.
            itemEncontrado.quantidade += quantidade;
        } else {
            // Se o item não existe no destino, cria uma nova entrada.
            estoque[destino].push({ tipo, quantidade });
        }
        return;
    }

    // Se a origem e o destino não forem o "pomar", realiza a transferência entre eles.
    else {
        let itemOrigem = estoque[origem].find(item => item.tipo === tipo);
        let itemDestino = estoque[destino].find(item => item.tipo === tipo);

        if (!itemOrigem) {
            // Se o item não existir na origem, a transação não é válida.
            return;
        } else if (itemOrigem.quantidade < quantidade) {
            // Se a quantidade disponível na origem for menor que a quantidade desejada, transfere o máximo possível.
            if (itemDestino) {
                itemDestino.quantidade += itemOrigem.quantidade;
            } else {
                // Se o item não existe no destino, cria uma nova entrada.
                estoque[destino].push({ tipo: tipo, quantidade: itemOrigem.quantidade });
            }
            itemOrigem.quantidade = 0;
        } else {
            // Transfere a quantidade desejada do item da origem para o destino.
            if (itemDestino) {
                itemDestino.quantidade += quantidade;
            } else {
                // Se o item não existe no destino, cria uma nova entrada.
                estoque[destino].push({ tipo, quantidade });
            }
            itemOrigem.quantidade -= quantidade;
        }
    }
    return;
}

// Função para limpar o estoque e torna-la 
function limpaEstoque() {
    estoque = {};
}

export { getEstoque, transacaoNoEstoque, limpaEstoque };