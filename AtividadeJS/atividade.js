function adicao(a, b) {
    return a + b
}

function subtracao(a, b) {
    return a - b
}

function multiplicacao(a, b) {
    return a * b
}

function divisao(a, b) {
    if (b != 0) {
        return a / b
    } else if (a == 0) {
        return 'Resultado indeterminado.'
    } else {
        return 'Divisão impossível.'
    }
}

function numeroPar(a) {
    if (a % 2 == 0) {
        return 'É par';
    }
    return 'É ímpar';
}

function somaIntervalo(a, b) {
    let soma = 0
    for (let i = a; i <= b; i++) {
        soma += i
    }
    return soma
}

function fatorial(a) {
    let fatorial = 1
    for (let i = a; i > 1; i--) {
        fatorial *= i
    }
    return fatorial
}

function contarVogais(text) {
    let vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U', 'á', 'é', 'í', 'ó', 'ú', 'Á', 'É', 'Í', 'Ó', 'Ú', 'â', 'ê', 'ô', 'Â', 'Ê', 'Ô', 'ã', 'õ', 'Ã', 'Õ', 'à', 'À']
    
    let numVogais = 0
    for (let i = 0; i < text.length; i++) {
        for(let j = 0; j < vogais.length; j++){
            if(text[i] == vogais[j]){
                numVogais ++;
            }
        }
    }
    return numVogais
}

console.log(adicao(5, 3))
console.log(subtracao(10, 7))
console.log(multiplicacao(4, 6))
console.log(divisao(15, 3))
console.log(divisao(10, 0))
console.log(divisao(0, 0))
console.log(numeroPar(1))
console.log(somaIntervalo(1, 5))
console.log(fatorial(5))
console.log(contarVogais('javascript'))