let nomeProdutoA = {"nome" : "camiseta", "internacional" : true}
let nomeProdutoB = {"nome" : "perfume", "internacional" : true}
let nomeProdutoC = {"nome" : "sandalia", "internacional" : false}

let valorProdutoA = 100
let valorProdutoB = 200
let valorProdutoC = 120

if (nomeProdutoA.internacional === true){
    let impostos = valorProdutoA * 1.2
    console.log(`Produto Internacional, R$ ${impostos}.`)
} else {
    let impostos = valorProdutoA * 1.12
    console.log(`Produto Nacional, R$ ${impostos}`)
}

if (nomeProdutoB.internacional === true){
    let impostos = valorProdutoB * 1.2
    console.log(`Produto Internacional, R$ ${impostos}.`)
} else {
    let impostos = valorProdutoB * 1.12
    console.log(`Produto Nacional, R$ ${impostos}`)
}

if (nomeProdutoC.internacional === true){
    let impostos = valorProdutoC * 1.2
    console.log(`Produto Internacional, R$ ${impostos}.`)
} else {
    let impostos = valorProdutoC * 1.12
    console.log(`Produto Nacional, R$ ${impostos}`)
}