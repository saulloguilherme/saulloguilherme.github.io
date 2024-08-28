const prompt = require("prompt-sync")()

var arr = []

for (var i = 1; i<=3; i++) {
    arr.push(Number(prompt("Digite o " + i + "° número. ")))
}

console.log(arr)

console.log("O maior valor é: " + Math.max.apply(Math, arr))
console.log("O menor valor é: " + Math.min.apply(Math, arr))