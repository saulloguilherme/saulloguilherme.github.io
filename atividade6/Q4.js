const prompt = require("prompt-sync")()

var dia = prompt("Escreva o nome de uma dia (ex: domingo,segunda,terça...): ")

if (dia.toUpperCase() == "DOMINGO" || dia.toLocaleUpperCase() == "SABADO" || dia.toLocaleUpperCase() == "SÁBADO") {
    console.log("O dia informado é um dia de fim de semana.")
} else {
    console.log("O dia informado é um dia útil.")
}