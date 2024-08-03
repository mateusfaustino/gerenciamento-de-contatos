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

// Função para definir um item no armazenamento local
function setLocalStorage(chave, valorObjeto) {
    // Converte o objeto para uma string JSON e o armazena com a chave especificada
    localStorage.setItem(chave, JSON.stringify(valorObjeto));
}

function getCounter(){
    const CONTADOR = 'contador'
     

    // Recupera o item do armazenamento local com a chave especificada
    let contador= localStorage.getItem(CONTADOR);

    // Se o item não existir, inicializa-o como um array vazio e o salva no armazenamento local
    if (!contador) {
        localStorage.setItem(CONTADOR, JSON.stringify(0))
        contador = localStorage.getItem(CONTADOR);
    }


    return Number(contador)

}

function incrementCounter() {
    let contador = getCounter()
    console.log(contador+1)
    let contadorPlusOne = contador+1
    console.log(contadorPlusOne)
    setLocalStorage('contador',JSON.stringify(contadorPlusOne))
}
