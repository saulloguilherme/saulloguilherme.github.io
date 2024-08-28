const prompt = require("prompt-sync")()

console.log("O laço permanecerá até receber a entrada '0'.")

var min = Number()
var max = Number()

do {
    var entrada = Number(prompt("Digite um número: "))

    if (entrada > max) {
        max = entrada
    }

    if (entrada < min) {
        min = entrada
    }

} while (entrada != 0);

console.log("O menor número é " + min)

console.log("O maior número é " + max)