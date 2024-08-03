// Função para obter um item do armazenamento local, criando-o se não existir
function getLocalStorage(chave) {
    // Recupera o item do armazenamento local com a chave especificada
    let item = localStorage.getItem(chave);

    // Se o item não existir, inicializa-o como um array vazio e o salva no armazenamento local
    if (!item) {
        localStorage.setItem(chave, JSON.stringify([]));
        item = localStorage.getItem(chave);
    }

    // Retorna o item (como uma string JSON)
    return item;
}