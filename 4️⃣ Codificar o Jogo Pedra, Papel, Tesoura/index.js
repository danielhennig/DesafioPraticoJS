const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Opções válidas
const opcoes = ['pedra', 'papel', 'tesoura'];

// Variáveis para armazenar os pontos
let pontosUsuario = 0;
let pontosComputador = 0;

// Função que define a escolha aleatória do computador
function escolhaComputador() {
  const indice = Math.floor(Math.random() * opcoes.length);
  return opcoes[indice];
}

// Função que determina o vencedor da rodada
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

// Função que gerencia uma rodada do jogo e chama ela mesma para continuar o jogo
function jogar() {
  rl.question('Escolha pedra, papel ou tesoura (ou digite "sair" para encerrar): ', (resposta) => {
    const jogadaUsuario = resposta.trim().toLowerCase();

    // Caso o usuário deseje sair do jogo
    if (jogadaUsuario === 'sair') {
      console.log('Jogo encerrado!');
      console.log(`Placar final - Você: ${pontosUsuario} | Computador: ${pontosComputador}`);
      rl.close();
      return;
    }
    
    // Valida a opção escolhida
    if (!opcoes.includes(jogadaUsuario)) {
      console.log('Opção inválida. Tente novamente.');
      return jogar();
    }
    
    // Escolha do computador e exibição das jogadas
    const jogadaComputador = escolhaComputador();
    console.log(`Você escolheu: ${jogadaUsuario}`);
    console.log(`O computador escolheu: ${jogadaComputador}`);
    
    // Determina o vencedor da rodada
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
    
    // Exibe o placar atual
    console.log(`Placar atual: Você: ${pontosUsuario} | Computador: ${pontosComputador}`);
    console.log('------------------------');
    
    // Chama a função novamente para outra rodada
    jogar();
  });
}

jogar();
