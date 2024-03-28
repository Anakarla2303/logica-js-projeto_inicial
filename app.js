alert('Bem vindo ao jogo do número secreto');
let numeroSecreto = Math.floor(Math.random() * 5);

let tentativas = 1;

while (tentativas < 4) {
    let numeroDigitado = parseInt(prompt('Digite um número de 1 a 5'));
    if (numeroDigitado === numeroSecreto) {
        alert("parabéns, você acertou!");
        break;
    } else if (numeroDigitado > numeroSecreto) {
        alert("Você digitou um numero maior que o numero secreto");
    } else {
        alert("Você digitou um numero menor que o numero secreto");
    }
    tentativas++;
    if(tentativas === 4){
        alert(`Suas tentativas acabaram`);

    }else if (tentativas <3){
        alert(`Você ainda tem ${4 - tentativas} tentativas`);    
    }else{
        alert(`Você ainda tem ${4 - tentativas} tentativas`);  
    }    
}
let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`;
if(numeroDigitado === numeroSecreto){
    alert(`Você acertou com ${tentativas}tentativas`);
}

   