const prompt = require("prompt-sync")()

var arr = []

for (var i = 1; i<=3; i++) {
    arr.push(Number(prompt("Digite a idade da " + i + "° pessoa: ")))
}

if (arr.some((element) => element >= 18)) {
    console.log("Alguma delas é maior de idade.")
}

if (arr.every((element) => element >= 18)) {
    console.log("Todas as pessoas são maiores de idade.")
}

if (arr.every((element) => element < 18)) {
    console.log("Todas as pessoas são menores de idade.")
}