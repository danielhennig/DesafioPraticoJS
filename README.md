# DesafioPraticoJS# 
Soma de Elementos de um Array

Este repositório contém uma função JavaScript para somar todos os elementos de um array, garantindo que apenas números válidos sejam considerados.

## Como Funciona
A função `somaArray` percorre um array de números e retorna a soma de seus elementos. Caso algum elemento inválido seja encontrado, um erro é lançado.

## Código
```javascript
function somaArray(numbers) {
    for (let num of numbers) {
        if (typeof num !== 'number' || isNaN(num)) {
            throw new Error("Valor inválido detectado");
        }
    }
    return numbers.reduce((soma, num) => soma + num, 0);
}

const array = [1, 2, 3, 4, 5];

try {
    console.log(somaArray(array)); // 15
} catch (error) {
    console.error(error.message);
}
```

## Como Usar
1. Clone este repositório.
2. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
3. Execute o arquivo contendo a função com:
   ```sh
   node nome_do_arquivo.js
   ```

## Validação de Entrada
A função verifica:
- Se todos os elementos do array são do tipo `number`.
- Se não há valores `NaN`.

Caso a entrada seja inválida, a função lança um erro informando o problema.

## Exemplo de Uso
```javascript
console.log(somaArray([10, 20, 30])); // 60
console.log(somaArray([5, "a", 2])); // Erro: Valor inválido detectado
```

## Melhorias Futuras
- Adicionar suporte para arrays vazios retornando `0`.
- Incluir suporte para arrays aninhados (exemplo: `[[1, 2], [3, 4]]`).




