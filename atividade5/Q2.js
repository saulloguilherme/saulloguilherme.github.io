const prompt = require("prompt-sync")()

raio = prompt("Qual o raio da esfera?")
volume = 4/3 * Math.PI * Math.pow(raio, 3)

console.log("O raio da esfera tem volume de " + volume)
