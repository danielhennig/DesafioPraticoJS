const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const opcoes = ['pedra', 'papel', 'tesoura'];

let pontosUsuario = 0;
let pontosComputador = 0;

function escolhaComputador() {
  const indice = Math.floor(Math.random() * opcoes.length);
  return opcoes[indice];
}

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

jogar();
