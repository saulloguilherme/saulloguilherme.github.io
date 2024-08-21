const prompt = require("prompt-sync")()

var peso = Number(prompt("Digite seu peso:"))
var altura = Number(prompt("Digite sua altura:"))
var imc = peso/(altura*altura)

console.log("Seu IMC é de : " + imc)

