function Primo(n) {
    if (typeof n !== 'number' || !Number.isInteger(n)) {
        return "Erro: valor inválido detectado. Informe um número inteiro.";
    }
    
    if (n < 2) {
        return false;
    }
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    
    return true;
}
console.log(Primo(3));    
console.log(Primo(4));   
console.log(Primo("abc")); 
