// To-do list
// Draw objects apples + snake
// Start game function
// Movement function
// speed function
// eat function
// score function
// crash/end game function

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
// Set canvas height and width
canvas.height = 500;
canvas.width = 1000;

let apples = [];

let snake = {
  // Snake head dimensions
  headX: 100,
  headY: 75,
  headRadius: 15,
  headColour: `#C46200`,
  // Snake tail dimensions
  tailX: 75,
  tailY: 75,
  tailRadius: 12,
  tailColour: `#964B00`,
};
// Generate a random number between to values, inclusive
let getRandomNum = function (min, max) {
  let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNum;
};

// Draw head of the snake
let drawHead = function () {
  ctx.beginPath();
  ctx.arc(snake.headX, snake.headY, snake.headRadius, 0, 2 * Math.PI);
  ctx.strokeStyle = snake.headColour;
  ctx.stroke();
  ctx.fillStyle = snake.headColour;
  ctx.fill();
};

// Draw head of the snake
let drawTail = function () {
  ctx.beginPath();
  ctx.arc(snake.tailX, snake.tailY, snake.tailRadius, 0, 2 * Math.PI);
  ctx.strokeStyle = snake.tailColour;
  ctx.stroke();
  ctx.fillStyle = snake.tailColour;
  ctx.fill();
};

drawHead();
drawTail();
