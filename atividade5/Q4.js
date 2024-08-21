const prompt = require("prompt-sync")()

var a = Number(prompt("Digite o valor de a: "))
var b = Number(prompt("Digite o valor de b: "))
var c = Number(prompt("Digite o valor e de c: "))


var delta = Number(b**2 - 4*a*c)

if (delta <= 0) {
    console.log("A solução não possui raízes reais.")
} else {
    delta = Math.sqrt(delta)
    var x1 = Number((-1*b + delta)/2*a)
    var x2 = Number((-1*b - delta)/2*a)
    
    console.log("A primeira raiz é: " + x1)
    console.log("A segunda raiz é: " + x2)
}

