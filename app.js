alert("Bem vindo ao jogo do número secreto");

let numeroSecreto = 3;
let numeroDigitado = parseInt(prompt("Digite um numero de 1 a 5"));

if(numeroDigitado === numeroSecreto){
    alert("Parabéns, você acertou!");
} else if(nuemroDigitado > numeroSecreto){
    alert("Você digitou um numero maior que o numero secreto!");   
} else {
    alert("Você digitou um numero menor que o numero secreto");
}
  
