// Função para adicionar um novo contato à lista
function addContato(event) {
    const CONTATOS = "contatos"; // Define a chave do armazenamento local para os contatos
    event.preventDefault(); // Impede o comportamento padrão do formulário (recarregar a página)
    
    // Recupera a lista de contatos armazenada localmente e a converte de JSON para objeto JavaScript
    let contatos = getLocalStorage(CONTATOS);
    let contatosObjeto = JSON.parse(contatos);

    // Obtém os valores dos campos de entrada do formulário
    let valorNome = getValueById("name");
    let valorNumero = getValueById("numero");
    let valorEmail = getValueById("email");

    // Adiciona um novo contato ao array de contatos
    contatosObjeto.push({
        name: valorNome,
        number: valorNumero,
        email: valorEmail
    });

    // Salva o array atualizado de contatos no armazenamento local
    setLocalStorage(CONTATOS, contatosObjeto);

    // Recarrega a página para atualizar a visualização dos contatos
    location.reload();
}

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

// Função para obter o valor de um elemento HTML pelo seu ID
function getValueById(id) {
    // Obtém o elemento HTML com o ID especificado
    let element = document.getElementById(id);

    // Se o elemento não existir, retorna uma string vazia
    if (!element) {
        return "";
    }

    // Retorna o valor do elemento HTML
    return element.value;
}
