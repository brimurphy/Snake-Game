// To-do list
// Draw objects apples + snake
// Start game function
// Movement function
// speed function
// eat function
// score function
// crash/end game function

// Start A new game
let startGame = function () {
  snake = new snake(100, 75, 15, "brown");
  myGame.start();
};

// Create a new game object
const myGame = {
  canvas: document.createElement("canvas"),
  container: document.querySelector(".container"),
  start: function () {
    this.canvas.width = 1000;
    this.canvas.height = 500;
    this.ctx = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.container.setAttribute("style", "display: none;");
    this.interval = setInterval(movement, 20);
  },
  clear: function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};

// Create a snake constructor object
function snake(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.move = function () {
    ctx = myGame.ctx;
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fill();
  };
}

// Add movement to object
let movement = function () {
  myGame.clear();
  snake.x += 1;
  snake.move();
};
// Generate a random number between to values, inclusive
let getRandomNum = function (min, max) {
  let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNum;
};

// Draw head of the snake
// let drawHead = function () {
//   ctx.beginPath();
//   ctx.arc(snake.headX, snake.headY, snake.headRadius, 0, 2 * Math.PI);
//   ctx.strokeStyle = snake.headColour;
//   ctx.stroke();
//   ctx.fillStyle = snake.headColour;
//   ctx.fill();
// };

// // Draw head of the snake
// let drawTail = function () {
//   ctx.beginPath();
//   ctx.arc(snake.tailX, snake.tailY, snake.tailRadius, 0, 2 * Math.PI);
//   ctx.strokeStyle = snake.tailColour;
//   ctx.stroke();
//   ctx.fillStyle = snake.tailColour;
//   ctx.fill();
// };
// let move = function () {
//   let xSpeed = scale * 1;
//   let ySpeed = 0;
//   snake.headX += xSpeed;
//   snake.headY += ySpeed;
// };

let changeDirection = function (direction) {
  switch (direction) {
    case "Up":
      xSpeed = 0;
      ySpeed = -scale * 1;
      break;
    case "Down":
      xSpeed = 0;
      ySpeed = scale * 1;
      break;
    case "Left":
      xSpeed = -scale * 1;
      ySpeed = 0;
      break;
    case "Right":
      xSpeed = scale * 1;
      ySpeed = 0;
      break;
  }
};

window.addEventListener("keydown", (e) => {
  const direction = e.key.replace("Arrow", "");
  console.log(direction);
  changeDirection(direction);
});
