const prompt = require("prompt-sync")()

palavra = prompt("Digite uma palavra: ")
outraPalavra = prompt("Digite outra palavra: ")

palavra = palavra.split("").sort().join("")
outraPalavra = outraPalavra.split("").sort().join("")

if (palavra == outraPalavra) {
    console.log("as palavras são anagramas")
} else {
    console.log("as palavras não são anagramas")
}