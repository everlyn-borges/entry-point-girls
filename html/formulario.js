
function buscarLogradouro(){
    var cep = document.getElementById('cep').value;
    console.log(cep)

    var logradouroStr = 'CEP não localizado';

    if (cep == '81130260'){
        logradouroStr = 'Rua Magdalena de Almeida'
    }
    else if (cep == '55026500'){
        logradouroStr = 'Rua Vertentes'
    }

    document.getElementById('logradouro').value = logradouroStr
    document.getElementById('cep').value = formatarCep(cep)
    Document.getElementById('txt-cep'). innerHTML = 'CEP: ' + formatarCep(cep)

    function formatarCep(cep){
        //var cep = document.getElementById('cep').value;
        return cep.substring(0,2) + '.' + cep.substring(2,5) + '-' + cep.substring(5)
    }
    var lista = []
    lista.push(1)
}