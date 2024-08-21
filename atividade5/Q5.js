const prompt = require("prompt-sync")()

var palavra = prompt("Escreva uma palavra: ")

function isPalindrome(palavra) {
    for (let i = 0; i < palavra.length; i++) {
        if (palavra.charAt(i) != palavra.charAt(palavra.length-1-i)) {
                return false
        }
    }
    return true;
}

console.log(isPalindrome(palavra))