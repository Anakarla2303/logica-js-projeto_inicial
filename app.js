let numeroDeposicoesAleatorias = parseInt(promft("Quantos numeros você quer aleatoriar"));

function gerarnumeroAleatorio(index) {
    return Math.floor(Math.random() * index + 1);
}

let numeroSecreto = gerarnumeroAleatorio(numeroDePosicoesAleatorias);

for (let tentativas = 0; tentativas < 3; tentativas++) {
    let numeroDigitado = parseInt(promft(`Digite um numero de 1 a ${numeroDePosicoesAleatorias}`));
    if (numeroDigitado === numeroSecreto){
        alert("Parabens, você acertou!");
        break;
    } else if (numeroDigitado > numeroSecreto) {
        alert(`Você digitou um numero maior que o numero secreto`);
    } else {
        alert(`Você digitou um numero menor que o numero secreto`);
    }
}
if (tentativas === 3) {
            alert(`Suas tentativas acabaram `);

        } else if (tentativas < 2) {
            alert(`Você ainda tem ${3 - tentativas}tentativas`);
        } else {
            alert(`Você ainda tem ${3 - tentativas}tentativas`);
        }

    let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`;
    if (nuemroDigitado === numeroSecreto) {
        alert(`Você acertou com ${tentativas}tentativas`);
    }





