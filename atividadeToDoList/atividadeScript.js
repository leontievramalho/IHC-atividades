const input1 = document.getElementById("primeiroNumero")
const input2 = document.getElementById("segundoNumero")
const operacao = document.getElementById("operacao")
const confirmar = document.getElementById("confirmar")
const resultado = document.getElementById("resultado")

confirmar.addEventListener("click", ()=>{
    let res = 0
    
    const num1 = Number(input1.value.trim())
    const num2 = Number(input2.value.trim())
    if(isNaN(num1) || isNaN(num2) || input1.value.trim()==='' || input2.value.trim()===''){
        res = "Digite um número válido!"
        resultado.textContent = res
        input1.value = ""
        input2.value = ""
        return
    }
    const op = operacao.value
    

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
    input1.value = ''
    input2.value = ''
})