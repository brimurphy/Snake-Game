// To-do list
// Draw objects apples + snake
// Start game function
// Movement function
// speed function
// eat function
// score function
// crash/end game function
const intro = document.getElementById("intro");
const game = document.getElementById("game");
const endGame = document.getElementById("game-over");

const canvas = document.getElementById("myCanvas");
canvas.width = 400;
canvas.height = 400;
const ctx = canvas.getContext("2d");

// Constructor to build length of snake
class SnakeTail {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

// Movement for snake
let speed = 5;
let xSpeed = 0;
let ySpeed = 0;
let previousDirection = "";

// Layout of playing area
let columns = 20;
let columnSize = canvas.width / columns - 2;

// Snake
let snakeHeadX = 10;
let snakeHeadY = 10;
const snakeRadius = canvas.width / columns - 10;
const snakeColor = "brown";

// Tail
// Set up an array to contain tail segments
let tail = [];
let tailLength = 2;
const tailRadius = snakeRadius - 2;
const tailColor = "red";

// Fruit
let appleX = 5;
let appleY = 5;
const appleColor = "green";
const appleRadius = snakeRadius / 1.5;

// Score
let scoreboard = document.getElementById("scoreboard");
let score = 0;

// Play game function
function playGame() {
  intro.setAttribute("style", "display: none;");
  game.setAttribute("style", "display: block;");
  endGame.setAttribute("style", "display: none;");
  // Move snake
  move();

  // Check if game is over
  let gameStatus = isGameOver();
  if (gameStatus) {
    intro.setAttribute("style", "display: none;");
    game.setAttribute("style", "display: none;");
    endGame.setAttribute("style", "display: block;");
    endGame.innerHTML = `<p>You scored ${score}! <br>Try beat your score</p>
    <button onclick="playAgain()">Play again</button>`;
    return;
  }
  // Clear previous position of snake
  clear();
  // Check for collecting fruit
  appleCollision();
  // Draw snake
  snake();
  // Draw fruit
  apple();
  // Set speed of snake
  setTimeout(playGame, 1000 / speed);
}

function isGameOver() {
  let gameOver = false;

  // Check if game has started
  if (xSpeed == 0 && ySpeed == 0) {
    return false;
  }

  // Check for wall collision
  if (snakeHeadX < 0) {
    gameOver = true;
  } else if (snakeHeadX > columns) {
    gameOver = true;
  } else if (snakeHeadY < 0) {
    gameOver = true;
  } else if (snakeHeadY > columns) {
    gameOver = true;
  }

  // Check for colloision on snake parts
  for (let i = 0; i < tail.length; i++) {
    let tailPart = tail[i];
    if (tailPart.x == snakeHeadX && tailPart.y == snakeHeadY) {
      gameOver = true;
      break;
    }
  }

  return gameOver;
}

// Clear screen when snake moves to clear previous position
function clear() {
  ctx.beginPath();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.closePath();
}

// Draw snake function
function snake() {
  // Draw tail parts first
  for (let i = 0; i < tail.length; i++) {
    let tailPart = tail[i];
    ctx.beginPath();
    ctx.fillStyle = tailColor;
    ctx.strokeStyle = tailColor;
    ctx.arc(
      tailPart.x * columns,
      tailPart.y * columns,
      tailRadius,
      0,
      2 * Math.PI
    );
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    // Draw Snake head
    ctx.beginPath();
    ctx.fillStyle = snakeColor;
    ctx.strokeStyle = snakeColor;
    ctx.arc(
      snakeHeadX * columns,
      snakeHeadY * columns,
      snakeRadius,
      0,
      2 * Math.PI
    );
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }
  // Push tail onto snake head
  tail.push(new SnakeTail(snakeHeadX, snakeHeadY));
  while (tail.length > tailLength) {
    // remove the last tail part if tail > tailLength
    tail.shift();
  }
}

// Function to draw the fruit
function apple() {
  ctx.beginPath();
  ctx.fillStyle = appleColor;
  ctx.strokeStyle = appleColor;
  ctx.arc(appleX * columns, appleY * columns, appleRadius, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

// Check for collision detection with apples
function appleCollision() {
  // If x positions and y positions match increase the tail length
  if (appleX === snakeHeadX && appleY === snakeHeadY) {
    appleX = getRandomNum(1, columns - 5);
    appleY = getRandomNum(1, columns - 5);
    tailLength++;

    // Update score and scoreboard
    score++;
    scoreboard.innerHTML = score;
  }
}

// Function to reload page and reset attribute to restart game
function playAgain() {
  document.location.reload();
  intro.setAttribute("style", "display: block;");
  game.setAttribute("style", "display: none;");
  endGame.setAttribute("style", "display: none;");
}

// Generate a random number between to values, inclusive
let getRandomNum = function (min, max) {
  let randomNum = Math.floor(Math.random() * (max - min) + min);

  return randomNum;
};

// Move snake function
function move() {
  snakeHeadX = snakeHeadX + xSpeed;
  snakeHeadY = snakeHeadY + ySpeed;
}

// Determine what direction to move the snake
function direction(e) {
  // Replace Arrow in the key name "" and store the direction only
  let direction = e.key.replace("Arrow", "");
  // Switch statement to call directional movement functions and to
  // stop snake turning back on itself (e.g: if up can't go down)
  switch (direction) {
    case "Up":
      if (direction == "Up" && previousDirection != "Down") {
        moveUp();
        previousDirection = direction;
        break;
      }
    case "Down":
      if (direction == "Down" && previousDirection != "Up") {
        moveDown();
        previousDirection = direction;
        break;
      }
    case "Left":
      if (direction == "Left" && previousDirection != "Right") {
        moveLeft();
        previousDirection = direction;
        break;
      }
    case "Right":
      if (direction == "Right" && previousDirection != "Left") {
        moveRight();
        previousDirection = direction;
        break;
      }
  }
}

// Change direction / increase speed functions
let moveUp = function () {
  xSpeed = 0;
  ySpeed -= 1;
};
let moveDown = function () {
  xSpeed = 0;
  ySpeed += 1;
};
let moveLeft = function () {
  xSpeed -= 1;
  ySpeed = 0;
};
let moveRight = function () {
  xSpeed += 1;
  ySpeed = 0;
};

// Add event listener to body for keypad directions
document.body.addEventListener("keydown", direction);
