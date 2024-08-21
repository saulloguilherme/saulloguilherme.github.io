const prompt = require("prompt-sync")()

var palavra = prompt("Escreva uma frase: ")

var lista = palavra.trim().split(" ")

console.log("A frase possui: " + (lista.length-1) + " espaços em branco.")
