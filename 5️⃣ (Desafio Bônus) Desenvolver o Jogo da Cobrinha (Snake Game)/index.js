const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const scoreDisplay = document.getElementById("score");
const restartButton = document.getElementById("restart");

const grid = 20;
let snake, dx, dy, food, game, score;

// Inicializa ou reinicia o jogo
function initGame() {
  snake = [
    { x: 200, y: 200 },
    { x: 180, y: 200 },
    { x: 160, y: 200 }
  ];
  dx = grid;
  dy = 0;
  score = 0;
  updateScore();
  food = generateFood();
  
  // Reinicia o loop do jogo
  if (game) clearInterval(game);
  game = setInterval(updateGame, 100);
  
  // Oculta o botão de reiniciar
  restartButton.style.display = "none";
}

initGame();

// Atualiza o estado do jogo a cada intervalo
function updateGame() {
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

  // Se comer a comida, incrementa a pontuação e gera nova comida; senão, remove o último segmento
  if (head.x === food.x && head.y === food.y) {
    score++;
    updateScore();
    food = generateFood();
  } else {
    snake.pop();
  }

  // Limpa o canvas e redesenha a comida e a cobrinha
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

// Atualiza a exibição da pontuação
function updateScore() {
  scoreDisplay.textContent = `Pontuação: ${score}`;
}

// Gera uma posição aleatória para a comida que não colida com a cobrinha
function generateFood() {
  let foodX, foodY;
  do {
    foodX = Math.floor(Math.random() * (canvas.width / grid)) * grid;
    foodY = Math.floor(Math.random() * (canvas.height / grid)) * grid;
  } while (snake.some(segment => segment.x === foodX && segment.y === foodY));
  return { x: foodX, y: foodY };
}

// Função chamada quando o jogo termina
function gameOver() {
  clearInterval(game);
  alert("Game Over!");
  restartButton.style.display = "inline-block";
}

// Controla a direção da cobrinha via teclado
document.addEventListener("keydown", changeDirection);

function changeDirection(event) {
  const key = event.key;
  const goingUp = dy === -grid;
  const goingDown = dy === grid;
  const goingRight = dx === grid;
  const goingLeft = dx === -grid;

  if ((key === "ArrowLeft" || key.toLowerCase() === "a") && !goingRight) {
    dx = -grid;
    dy = 0;
  } else if ((key === "ArrowUp" || key.toLowerCase() === "w") && !goingDown) {
    dx = 0;
    dy = -grid;
  } else if ((key === "ArrowRight" || key.toLowerCase() === "d") && !goingLeft) {
    dx = grid;
    dy = 0;
  } else if ((key === "ArrowDown" || key.toLowerCase() === "s") && !goingUp) {
    dx = 0;
    dy = grid;
  }
}

// Reinicia o jogo ao clicar no botão
restartButton.addEventListener("click", initGame);
