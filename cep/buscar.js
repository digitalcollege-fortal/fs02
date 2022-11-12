function buscarEndereco () {
    // let numeros = document.getElementById('cep').value;
    let numeros = cep.value;

    if (numeros.length !== 8) {
        alert('CEP invalido');
        return;
    }

    //Promise
    fetch (`http://viacep.com.br/ws/${numeros}/json/`) 
        .then(resposta => resposta.json())
        .then(dados => {
            logradouro.value = dados.logradouro;
            bairro.value = dados.bairro;
            cidade.value = dados.localidade;
            uf.value = dados.uf;
        });

}