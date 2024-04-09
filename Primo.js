function isPrime(number) {
    
    if (number <= 1) {
        return false;
    }

    
    if (number <= 3) {
        return true;
    }

    
    
    if (number % 2 === 0 || number % 3 === 0) {
        return false;
    }

    
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
    }


    return true;
}


let numero = 17;
if (isPrime(numero)) {
    console.log(`${numero} é um número primo.`);
} else {
    console.log(`${numero} não é um número primo.`);
}
