let a = 10

// 
if (a == 10) {
    console.log("Verdade! O valor ", a, " é igual a 10");
} else {
    console.log("Falso! O valor ", a, " não é igual a 10");
}

// 
if (a > 10) {
    console.log("Verdade! O valor ", a, " é maior que 10");
} else {
    console.log("Falso! O valor ", a, " não é maior que 10");
}

// 
if (10 <= a) {
    console.log("Verdade! O valor ", a, " é maior ou igual a 10");
} else {
    console.log("Falso! O valor ", a, "não é maior ou igual a 10");
}

let b = true

// 
if (b == true) {
    console.log("Verdade! O valor ", b, " é igual a true");
} else {
    console.log("Falso! O valor ", b, " não é igual a true");
}

// 
if (b == false) {
    console.log("Verdade! O valor ", b, " é considerado como verdade");
} else {
    console.log("Falso! O valor ", b, " não é considerado como verdade");
}

//
if (b) {
    console.log("Verdade! O valor ", b, " é considerado como verdade");
} else {
    console.log("Falso! O valor ", b, " não é considerado como verdade");
}

let c = [1]

// 
if (c == 2) {
    console.log("Verdade! O valor ", c, " é considerado como valor 2");
} else {
    console.log("Falso! O valor ", c, " não é considerado como valor 2");
}

let d = [1,2,3,4]

// 
if (d) {
    console.log("Verdade! O valor ", d, " é considerado como verdade");
} else {
    console.log("Falso! O valor ", d, " não é considerado como verdade");
}

// 
if (d[0] == 1) {
    console.log("Verdade! O valor ", d[0], " do elemento do índice 0 da variável 'd' é igual a 1");
} else {
    console.log("Falso! O valor ", d[0], " do elemento do índice 0 da variável 'd' não é igual a 1");
}

// 
if (d[1] == 2) {
    console.log("Verdade! O valor ", d[1], " do elemento do índice 1 da variável 'd' é igual a 1");
} else {
    console.log("Falso! O valor ", d[1], " do elemento do índice 1 da variável 'd' não é igual a 1");
}

let e = "Nome"

// 
if (typeof(e) == 'string') {
    console.log("Verdade! O tipo de dado da variável "+e+" é uma string");
} else {
    console.log("Falso! O tipo de dado da variável ",e," não é uma string");
}