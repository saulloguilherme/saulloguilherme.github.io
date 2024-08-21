const prompt = require("prompt-sync")()

var nome = prompt("Digite seu nome completo: ")

var nomes = nome.trim().split(" ")

console.log("nome: " + nomes[0])
console.log("ultimo nome: " + nomes[nomes.length-1])