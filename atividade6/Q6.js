const prompt = require("prompt-sync")()

var num = prompt("Digite um número inteiro: ")

fib = function(numMax){
    for(var fibArray = [0,1], i=0,j=1,k=0; k<numMax;i=j,j=x,k++ ){
        x=i+j;
        if (x > numMax) {
            break;
        }
        fibArray.push(x);
    }
    console.log(fibArray);
}

fib(num)