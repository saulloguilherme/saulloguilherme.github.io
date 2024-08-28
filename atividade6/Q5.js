const prompt = require("prompt-sync")()

function primeNumber(num) {
    for (var divisor = 2; divisor < num; divisor++) 
    if (num % divisor == 0) return false;
    return true;
}

var num = prompt("Digite um número inteiro: ")

for (let i = num; i >= 2; i--) {
    if(primeNumber(i)) console.log(i);
}