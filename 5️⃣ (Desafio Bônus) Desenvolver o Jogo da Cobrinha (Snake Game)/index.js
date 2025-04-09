const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const scoreDisplay = document.getElementById("score");
const restartButton = document.getElementById("restart");

const grid = 20;
let snake, dx, dy, food, game, score;

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
  
  if (game) clearInterval(game);
  game = setInterval(updateGame, 100);
  
  restartButton.style.display = "none";
}

initGame();

function updateGame() {
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };

  if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
    return gameOver();
  }

  for (let i = 0; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      return gameOver();
    }
  }

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    score++;
    updateScore();
    food = generateFood();
  } else {
    snake.pop();
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, grid - 1, grid - 1);

  ctx.fillStyle = "green";
  snake.forEach(segment => {
    ctx.fillRect(segment.x, segment.y, grid - 1, grid - 1);
  });
}

function updateScore() {
  scoreDisplay.textContent = `Pontuação: ${score}`;
}

function generateFood() {
  let foodX, foodY;
  do {
    foodX = Math.floor(Math.random() * (canvas.width / grid)) * grid;
    foodY = Math.floor(Math.random() * (canvas.height / grid)) * grid;
  } while (snake.some(segment => segment.x === foodX && segment.y === foodY));
  return { x: foodX, y: foodY };
}

function gameOver() {
  clearInterval(game);
  alert("Game Over!");
  restartButton.style.display = "inline-block";
}

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

restartButton.addEventListener("click", initGame);
