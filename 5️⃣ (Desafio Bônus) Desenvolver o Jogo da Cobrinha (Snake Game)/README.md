# Jogo da Cobrinha

## Visão Geral

Este é um jogo clássico da cobrinha desenvolvido em JavaScript puro, sem bibliotecas externas. O projeto demonstra conceitos fundamentais de manipulação de canvas, controle de eventos do teclado e lógica de movimentação e colisão.

## Funcionalidades Principais

- **Movimentação Automática:** A cobrinha se move continuamente na direção definida.
- **Controle via Teclado:** O jogador pode alterar a direção da cobrinha utilizando as teclas `W`, `A`, `S`, `D` ou as setas direcionais.
- **Crescimento da Cobrinha:** Ao comer a comida, a cobrinha aumenta de tamanho.
- **Marcador de Pontos:** A pontuação é atualizada sempre que a cobrinha consome a comida.
- **Reinício do Jogo:** Em caso de colisão (com as paredes ou com o próprio corpo), o jogo termina e é exibido um botão para reiniciar a partida.

## Estrutura do Projeto

O código foi organizado em três arquivos para facilitar a manutenção e a compreensão:

- **index.html:** Contém a estrutura da página, incluindo o elemento `<canvas>` onde o jogo é renderizado.
- **style.css:** Define o estilo visual da página e do canvas, garantindo uma apresentação limpa e centralizada.
- **index.js:** Implementa toda a lógica do jogo, desde a movimentação da cobrinha e detecção de colisões até a atualização da pontuação e o reinício do jogo.

## Mecânica do Jogo

1. **Inicialização:**  
   - O jogo inicia com a cobrinha composta por três segmentos posicionados no centro do canvas.
   - A direção inicial é para a direita, e uma comida é gerada aleatoriamente.

2. **Loop de Atualização:**  
   - A cada 100ms, a função de atualização (`updateGame`) é executada, movimentando a cobrinha.
   - Se a nova posição da cabeça resultar em colisão com a parede ou com o próprio corpo, o jogo é finalizado.

3. **Consumo da Comida:**  
   - Ao atingir a posição da comida, a cobrinha cresce (não removendo o último segmento) e a pontuação é incrementada.
   - Uma nova posição para a comida é gerada, garantindo que ela não apareça em cima da cobrinha.

4. **Game Over e Reinício:**  
   - Quando ocorre uma colisão, o jogo para e um alerta de "Game Over" é exibido.
   - Um botão de reiniciar aparece, permitindo que o jogador reinicie o jogo, reconfigurando todas as variáveis para o estado inicial.


