# Verificação de Números Primos em JavaScript

Este repositório contém uma função em JavaScript para verificar se um número é primo.

## Sobre a Função

A função `Primo(n)` recebe um número inteiro como entrada e retorna `true` se ele for primo e `false` caso contrário. Além disso, se a entrada não for um número inteiro, a função retorna uma mensagem de erro.

## Código

```javascript
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

// Testes
console.log(Primo(3));    // true
console.log(Primo(4));    // false
console.log(Primo("abc")); // "Erro: valor inválido detectado. Informe um número inteiro."
```

## Como Utilizar

1. Copie o código acima e cole em um arquivo JavaScript (`primo.js`).
2. Execute o código em um ambiente Node.js ou diretamente no console do navegador.
3. Modifique os valores passados à função `Primo(n)` para testar diferentes entradas.

## Explicação Técnica

1. A função verifica se a entrada é um número inteiro válido.
2. Números menores que 2 são automaticamente considerados não primos.
3. Para otimizar a verificação, o loop percorre apenas até a raiz quadrada de `n`, pois se `n` for divisível por algum número maior que sua raiz quadrada, já teria sido detectado antes.

## Exemplos de Testes

Os dez primeiros números primos conhecidos são: `2, 3, 5, 7, 11, 13, 17, 19, 23, 29`.

Exemplo de testes:

```javascript
console.log(Primo(2));  // true
console.log(Primo(13)); // true
console.log(Primo(20)); // false
console.log(Primo(29)); // true
console.log(Primo(-5)); // false
console.log(Primo(1.5)); // "Erro: valor inválido detectado. Informe um número inteiro."
```



