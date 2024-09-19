const input1 = document.getElementById("primeiroNumero")
const input2 = document.getElementById("segundoNumero")
const operacao = document.getElementById("operacao")
const confirmar = document.getElementById("confirmar")
const resultado = document.getElementById("resultado")

confirmar.addEventListener("click", ()=>{
    const num1 = Number(input1.value)
    const num2 = Number(input2.value)
    const op = operacao.value
    let res = 0
    switch (op) {
        case "soma":
            res = num1 + num2
            break;
        case "subtracao":
            res = num1 - num2
            break;
        case "multiplicacao":
            res = num1 * num2
            break;
        case "divisao":
            if (num2 != 0) {
                res = num1 / num2
            } else {
                res = "Não é possível dividir por zero"
            }
            break;
        case "potencia":
            if(num1 == 0 && num2 == 0){
                res = "Indeterminado"
            } else {
                res = num1 ** num2
            }
            break;
        case "raiz":
            if(num2 < 0){
                res = "Impossível"
            } else {
                res = num2 ** (1/num1)
            }
            break;
        }
    resultado.textContent = res
})