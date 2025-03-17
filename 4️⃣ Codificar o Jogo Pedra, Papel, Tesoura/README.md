# Jogo Pedra, Papel e Tesoura - Análise do Código

## Visão Geral
Este é um simples jogo de **Pedra, Papel e Tesoura** desenvolvido em **Node.js**. Ele permite que o usuário jogue contra o computador de forma interativa no terminal, mantendo um placar atualizado a cada rodada.

## Como Funciona?
O jogo segue a seguinte lógica:

1. O usuário escolhe entre `pedra`, `papel` ou `tesoura`.
2. O computador escolhe uma opção aleatória.
3. O vencedor é determinado com base nas regras do jogo.
4. O placar é atualizado após cada rodada.
5. O usuário pode continuar jogando ou digitar `sair` para encerrar.

## Estrutura do Código

### 1. Importação do Módulo `readline`
O código usa o módulo `readline` para capturar a entrada do usuário:

```javascript
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
```

### 2. Definição das Opções
O jogo possui três opções válidas:

```javascript
const opcoes = ['pedra', 'papel', 'tesoura'];
```

### 3. Variáveis de Pontuação
O código mantém a contagem de pontos do usuário e do computador:

```javascript
let pontosUsuario = 0;
let pontosComputador = 0;
```

### 4. Escolha do Computador
A escolha do computador é gerada aleatoriamente:

```javascript
function escolhaComputador() {
  const indice = Math.floor(Math.random() * opcoes.length);
  return opcoes[indice];
}
```

### 5. Determinação do Vencedor
O jogo segue as regras clássicas para determinar o vencedor:

```javascript
function determinarVencedor(jogadaUsuario, jogadaComputador) {
  if (jogadaUsuario === jogadaComputador) {
    return 'Empate';
  }
  
  if (
    (jogadaUsuario === 'pedra' && jogadaComputador === 'tesoura') ||
    (jogadaUsuario === 'tesoura' && jogadaComputador === 'papel') ||
    (jogadaUsuario === 'papel' && jogadaComputador === 'pedra')
  ) {
    return 'Usuario';
  } else {
    return 'Computador';
  }
}
```

### 6. Lógica do Jogo
A função `jogar()` gerencia todo o fluxo do jogo, incluindo validação de entrada, exibição do placar e controle do loop:

```javascript
function jogar() {
  rl.question('Escolha pedra, papel ou tesoura (ou digite "sair" para encerrar): ', (resposta) => {
    const jogadaUsuario = resposta.trim().toLowerCase();

    if (jogadaUsuario === 'sair') {
      console.log('Jogo encerrado!');
      console.log(`Placar final - Você: ${pontosUsuario} | Computador: ${pontosComputador}`);
      rl.close();
      return;
    }
    
    if (!opcoes.includes(jogadaUsuario)) {
      console.log('Opção inválida. Tente novamente.');
      return jogar();
    }
    
    const jogadaComputador = escolhaComputador();
    console.log(`Você escolheu: ${jogadaUsuario}`);
    console.log(`O computador escolheu: ${jogadaComputador}`);
    
    const resultado = determinarVencedor(jogadaUsuario, jogadaComputador);
    
    if (resultado === 'Empate') {
      console.log('Empate!');
    } else if (resultado === 'Usuario') {
      console.log('Você venceu essa rodada!');
      pontosUsuario++;
    } else {
      console.log('O computador venceu essa rodada!');
      pontosComputador++;
    }
    
    console.log(`Placar atual: Você: ${pontosUsuario} | Computador: ${pontosComputador}`);
    console.log('------------------------');
    
    jogar();
  });
}
```

### 7. Inicialização do Jogo
O jogo é iniciado chamando a função principal:

```javascript
jogar();
```



