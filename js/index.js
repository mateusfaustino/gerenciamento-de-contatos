function listarContatos() {
    const CONTATO = "contatos"

    let listaDeContatos = getLocalStorage(CONTATO)
    let listaDeContatosObj = JSON.parse(listaDeContatos)

    let $listaContatos = document.getElementById('lista-contatos')

    listaDeContatosObj.forEach(contato => {
        $listaContatos.innerHTML+=`
        <li class="lista-contatos__item">
            <span class="lista-contatos__item__nome">${contato.name}</span>
            <span class="lista-contatos__item__numero">${contato.number}</span>
            <span class="lista-contatos__item__email">${contato.email}</span>
            <div class="lista-contatos__item__action">
                <button type="button">editar</button>
                <button type="button">excluir</button>
            </div>
        </li>`
    });
    
}