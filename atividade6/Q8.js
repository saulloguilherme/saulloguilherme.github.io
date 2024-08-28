const prompt = require("prompt-sync")()

var frase = prompt("Digite uma frase: ")

var numVogais = 0

for (let i = 0; i < frase.length; i++) {
    switch (frase.charAt(i)) {
        case 'a':
        case 'A':
        case 'e':
        case 'E':    
        case 'i':
        case 'I':
        case 'o':
        case 'O':
        case 'u':
        case 'U':
            numVogais++
        default:
            continue;
    }
}

console.log("Na frase existem " + numVogais + " vogais.")