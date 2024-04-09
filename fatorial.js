function calcularFatorial(numero) {
    
    if (numero < 0) {
        return "Erro: Não é possível calcular o fatorial de um número negativo.";
    }

    
    if (numero === 0 || numero === 1) {
        return 1;
    }

    
    let fatorial = 1;

    
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }

    
    return fatorial;
}


let numero = 5;
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é: ${resultado}`);