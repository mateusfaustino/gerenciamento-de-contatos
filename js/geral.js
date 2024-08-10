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



function initializeIdGenerator() {
    if (!localStorage.getItem('currentId')) {
      localStorage.setItem('currentId', '0');
    }
  }
  
  function generateId() {
    initializeIdGenerator();
    
    let currentId = parseInt(localStorage.getItem('currentId'), 10);
    
    currentId += 1;
    
    localStorage.setItem('currentId', currentId.toString());
    
    return currentId;
  }
  
  function deleteContact(id) {
    const CONTATOS = "contatos"; // Define a chave do armazenamento local para os contatos
    let confirmacao = confirm("Você tem certeza que quer excluir este contato?")
    console.log(confirmacao);

    if(!confirmacao){
        return
    }

    // Recupera a lista de contatos armazenada localmente e a converte de JSON para objeto JavaScript
    let contatos = getLocalStorage(CONTATOS);
    let contatosObjeto = JSON.parse(contatos);
    let novaLista = contatosObjeto.filter((contato)=>{
        return(contato.id!=id)
    })

    setLocalStorage(CONTATOS, novaLista)
    location.reload()
  }

