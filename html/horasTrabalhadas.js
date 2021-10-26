function calcularTempoTrabalhado(){
    var nomeFuncionario = document.getElementById('nome').value
    var horaEntrada = Number(document.getElementById('horaEntrada').value)
    var minutoEntrada = Number(document.getElementById('minutoEntrada').value)
    
    var horaSaida = Number(document.getElementById('horaSaida').value)
    var minutoSaida = Number(document.getElementById('minutoSaida').value)

    var nomeFuncionarioValida = validarRequerido(nomeFuncionario, "Nome")
    var horaEntradaValida = validarRequerido(horaEntrada,"Hora de entrada")
    var minutoEntradaValida = validarRequerido(minutoEntrada,"Minuto de entrada")
    var horaSaidaValida = validarRequerido(horaSaida,"Hora de saída")
    var minutoSaidaValida = validarRequerido(minutoSaida,"Minuto de saída")

    var horaValida = entradaMaiorSaida(horaSaida,minutoSaida,horaEntrada,minutoEntrada)

    if (horaValida && nomeFuncionarioValida && horaEntradaValida && minutoEntradaValida && horaSaidaValida && minutoSaidaValida){
        var tempoTrabalhado = (((horaSaida * 60) + (minutoSaida)) - ((horaEntrada * 60) + (minutoEntrada)))

        console.log(tempoTrabalhado)

        if (tempoTrabalhado > 480){
            var horasExtras = tempoTrabalhado - 480
            document.getElementById('HorasE').innerHTML = 'Funionário fez ' + horasExtras +  ' minutos extras'
        }
        else {
        document.getElementById('HorasE').innerHTML = 'Funionário não fez horas extras'
        }

    }
    
}

function validarRequerido(param, nomeCampo) {
    var x = param
    if (x == null || x == "") {
    alert("Prencha o " + nomeCampo)
    return false
    }
    return true
}

function entradaMaiorSaida(horaSaida,minutoSaida,horaEntrada,minutoEntrada) {
    if (((horaEntrada * 60) + minutoEntrada) > ((horaSaida * 60) + minutoSaida)) {
    alert("Entrada maior que saída!")
    return false
    }
    return true
}