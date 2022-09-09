function exibeSaldoFinal(movimentacoes) {
    let i = 0
    let saldoFinal = 0
    while (i <= 6) {
        saldoFinal = saldoFinal + movimentacoes[i]
        i++
    }
    let positivoOuNegativo
    if(saldoFinal >= 0)
        positivoOuNegativo = "positivo"
    else
        positivoOuNegativo = "negativo"
        console.log(`O saldo final de sua conta foi ${positivoOuNegativo} no valor de R$ ${saldoFinal}.`)
}
//                         0    1   2   3    4    5    6
let listaMovimentacoes = [100, -20, -30, 10, -7, -21, -5]
exibeSaldoFinal(listaMovimentacoes)