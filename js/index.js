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
                <a type="button" class="btn" href="/editar.html?contato=${contato.id}"">editar</a>
                <button type="button" class="delete-btn" onclick="deleteContact(${contato.id})">excluir</button>
            </div>
        </li>`
    });
    
}