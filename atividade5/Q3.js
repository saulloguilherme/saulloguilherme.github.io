const prompt = require("prompt-sync")()

var a = Number(prompt("Digite o valor do lado a: "))
var b = Number(prompt("Digite o valor do lado b: "))
var c = Number(prompt("Digite o valor do lado c: "))

perimetro = a+b+c
area = (b * ((a * c)/ b)) / 2

console.log("O perímetro é de: " + perimetro)
console.log("A área é de: " + area)
