alert('Bem vindo ao jogo do número secreto');
let numeroSecreto = Math.floor(Math.random() * 5);

let tentativas = 3;

while (tentativas > 0) {
    let numeroDigitado = parseInt(prompt('Digite um número de 1 a 5'));
    if (numeroDigitado === numeroSecreto) {
        alert("parabéns, você acertou!");
        break;
    } else if (numeroDigitado > numeroSecreto) {
        alert("Você digitou um numero maior que o numero secreto");
    } else {
        alert("Você digitou um numero menor que o numero secreto");
    }
    tentativas = tentativas - 1;
    alert(`Você ainda tem ${tentativas} tentativas`);
}