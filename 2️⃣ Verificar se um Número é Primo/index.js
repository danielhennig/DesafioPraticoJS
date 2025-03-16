function Primo(n) {
    // verifica se o valor é um número inteiro
    if (typeof n !== 'number' || !Number.isInteger(n)) {
        return "Erro: valor inválido detectado. Informe um número inteiro.";
    }
    
    // Números menores que 2 não são considerados primos
    if (n < 2) {
        return false;
    }
    
    // Verifica se 'n' é divisível por algum número entre 2 e a raiz quadrada de 'n'
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    
    return true;
}
// Dez primeiros primos para teste: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29
console.log(Primo(3));    
console.log(Primo(4));   
console.log(Primo("abc")); 
