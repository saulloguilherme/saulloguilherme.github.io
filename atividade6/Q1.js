const prompt = require("prompt-sync")()

var num = Number(prompt("Digite um número inteiro: "))

if (num%3==0 && num%5==0) {
    console.log("O número é divisível por 3 e por 5.")
} else {
    console.log("O número não é divisível por 3 e por 5.")
}