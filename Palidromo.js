function isPalindrome(word) {
    // Remove espaços em branco e converte para minúsculas
    word = word.toLowerCase().replace(/\s/g, '');

    // Inverte a palavra
    let reversedWord = word.split('').reverse().join('');

    // Verifica se a palavra original é igual à palavra invertida
    return word === reversedWord;
}


let palavra = "ana";
if (isPalindrome(palavra)) {
    console.log(`${palavra} é um palíndromo.`);
} else {
    console.log(`${palavra} não é um palíndromo.`);
}
