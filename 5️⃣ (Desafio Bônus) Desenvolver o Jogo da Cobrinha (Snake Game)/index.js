const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// Tamanho da célula (grid)
const grid = 20;

// Inicializa a cobrinha (iniciando com 3 segmentos)
let snake = [
  { x: 200, y: 200 },
  { x: 180, y: 200 },
  { x: 160, y: 200 }
];

// Direção inicial: movimentando para a direita
let dx = grid;
let dy = 0;

// Cria a primeira comida
let food = generateFood();

// Intervalo de atualização do jogo (100ms)
let game = setInterval(updateGame, 100);

// Função que atualiza o estado do jogo a cada intervalo
function updateGame() {
  // Calcula a nova cabeça com base na direção atual
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };

  // Verifica colisão com as paredes
  if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
    return gameOver();
  }

  // Verifica colisão com o próprio corpo
  for (let i = 0; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      return gameOver();
    }
  }

  // Adiciona a nova cabeça na frente da cobrinha
  snake.unshift(head);

  // Se a comida for comida, gera uma nova comida, senão remove o último segmento
  if (head.x === food.x && head.y === food.y) {
    food = generateFood();
  } else {
    snake.pop();
  }

  // Limpa o canvas e redesenha os elementos
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Desenha a comida
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, grid - 1, grid - 1);

  // Desenha a cobrinha
  ctx.fillStyle = "green";
  snake.forEach(segment => {
    ctx.fillRect(segment.x, segment.y, grid - 1, grid - 1);
  });
}

// Função para gerar uma posição aleatória para a comida
function generateFood() {
  let foodX, foodY;
  do {
    foodX = Math.floor(Math.random() * (canvas.width / grid)) * grid;
    foodY = Math.floor(Math.random() * (canvas.height / grid)) * grid;
  } while (snake.some(segment => segment.x === foodX && segment.y === foodY));
  return { x: foodX, y: foodY };
}

// Função que finaliza o jogo
function gameOver() {
  clearInterval(game);
  alert("Game Over!");
}

// Controla a direção da cobrinha via teclado
document.addEventListener("keydown", changeDirection);

function changeDirection(event) {
  const key = event.key;
  const goingUp = dy === -grid;
  const goingDown = dy === grid;
  const goingRight = dx === grid;
  const goingLeft = dx === -grid;

  // Seta para a esquerda ou tecla A
  if ((key === "ArrowLeft" || key.toLowerCase() === "a") && !goingRight) {
    dx = -grid;
    dy = 0;
  }
  // Seta para cima ou tecla W
  else if ((key === "ArrowUp" || key.toLowerCase() === "w") && !goingDown) {
    dx = 0;
    dy = -grid;
  }
  // Seta para a direita ou tecla D
  else if ((key === "ArrowRight" || key.toLowerCase() === "d") && !goingLeft) {
    dx = grid;
    dy = 0;
  }
  // Seta para baixo ou tecla S
  else if ((key === "ArrowDown" || key.toLowerCase() === "s") && !goingUp) {
    dx = 0;
    dy = grid;
  }
}
