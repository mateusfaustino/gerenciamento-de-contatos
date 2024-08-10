function editContact(id){
    
}

function loadContato(){
    let url = location.search
    const searchParams = new URLSearchParams(url);

    if(searchParams.has("contato")){
        let contatctId = searchParams.get("contato")
        let contact = getContactById(contatctId)
        if(contact){
            let nameInput = document.getElementById("name")
            let numberInput = document.getElementById("numero")
            let emailInput = document.getElementById("email")
            
            nameInput.value=contact.name
            numberInput.value=contact.number
            emailInput.value=contact.email
        }
        
        console.log(contact)
    }
}


function getContactById(id){
    let contacts = JSON.parse(getLocalStorage('contatos'))
    
    let newContacts = contacts.filter((contact)=>{
        return(contact.id==id)
    })
    
    
    console.log(newContacts.length)
    if(newContacts.length>0){
        return newContacts[0]
    }
    
    
}

function atualizarContato(event){
    

    // Recupera a lista de contatos armazenada localmente e a converte de JSON para objeto JavaScript
    
    event.preventDefault();
    let url = location.search
    const searchParams = new URLSearchParams(url);

    if(searchParams.has("contato")){
        let contatctId = searchParams.get("contato")
        let contact = getContactById(contatctId)
        if(contact){
            let valorNome = getValueById("name");
            let valorNumero = getValueById("numero");
            let valorEmail = getValueById("email");
            
            let contatos = getLocalStorage("contatos");
            let contatosObjeto = JSON.parse(contatos);

            
            let novaLista = contatosObjeto.filter((contato)=>{
                return(contato.id!=contatctId)
            })

            novaLista.push({
                id:contatctId,
                name:valorNome,
                number:valorNumero,
                email:valorEmail
            })
            console.log(novaLista)
            setLocalStorage("contatos", novaLista)
            location.replace("/index.html")

        
        }
        
        console.log(contact)
    }
    
}

loadContato()