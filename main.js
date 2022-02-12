// To-do list
// Draw objects apples + snake
// Start game function
// Movement function
// speed function
// eat function
// score function
// crash/end game function

const canvas = document.getElementById("myCanvas");
canvas.width = 500;
canvas.height = 500;
const ctx = canvas.getContext("2d");

// Movement
let speed = 5;
let xSpeed = 0;
let ySpeed = 0;
let previousDirection = "";

// Layout of playing area
let columns = 25;
let columnSize = canvas.width / columns - 5;

// Snake
let snakeHeadX = 10;
let snakeHeadY = 10;
let snakeRadius = canvas.width / columns - 10;
let snakeColor = "brown";

function playGame() {
  // Clear previous position of snake
  clear();
  // Draw snake
  snake();
  // Move snake
  move();
  // Set speed of snake
  setTimeout(playGame, 1000 / speed);
}

function clear() {
  ctx.beginPath();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.closePath();
}

function snake() {
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
}

function move() {
  snakeHeadX = snakeHeadX + xSpeed;
  snakeHeadY = snakeHeadY + ySpeed;
}

function direction(e) {
  // Replace the key name Arrow with "" of event to return a direction
  let direction = e.key.replace("Arrow", "");
  // Switch statement to call directional movement functions and to
  // stop snake turning back on itself
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

// window.addEventListener("keydown", (e) => {
//   let direction = e.key.replace("Arrow", "");
//   switch (direction) {
//     case "Up":
//       if (direction == "Up" && previousDirection != "Down") {
//         moveUp();
//         previousDirection = direction;
//         break;
//       }
//     case "Down":
//       if (direction == "Down" && previousDirection != "Up") {
//         moveDown();
//         previousDirection = direction;
//         break;
//       }
//     case "Left":
//       if (direction == "Left" && previousDirection != "Right") {
//         moveLeft();
//         previousDirection = direction;
//         break;
//       }
//     case "Right":
//       if (direction == "Right" && previousDirection != "Left") {
//         moveRight();
//         previousDirection = direction;
//         break;
//       }
//   }
// });

playGame();

// // Start A new game
// let startGame = function () {
//   snake = new snake(100, 75, 15, "brown");
//   myGame.start();
// };

// // Create a new game object
// const myGame = {
//   canvas: document.createElement("canvas"),
//   container: document.querySelector(".container"),
//   start: function () {
//     this.canvas.width = 400;
//     this.canvas.height = 400;
//     this.ctx = this.canvas.getContext("2d");
//     document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//     this.container.setAttribute("style", "display: none;");
//     this.interval = setInterval(movement, 20);
//   },
//   // Clear previous position of the snake
//   clear: function () {
//     this.ctx.beginPath();
//     this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
//     this.ctx.closePath();
//   },
// };

// // Create a snake constructor object
// function snake(x, y, radius, color) {
//   this.x = x;
//   this.y = y;
//   this.color = color;
//   this.radius = radius;
//   this.xSpeed = 0;
//   this.ySpeed = 0;
//   // this.move = function () {
//   ctx = myGame.ctx;
//   ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
//   ctx.fillStyle = this.color;
//   ctx.stroke();
//   // };
//   this.newPos = function () {
//     this.x += this.speedX;
//     this.y += this.speedY;
//   };
// }

// // Add movement to object
// let movement = function () {
//   // Clear the last position of the object
//   myGame.clear();
//   snake.newPos();
//   // snake.move();
// };
// // Generate a random number between to values, inclusive
// let getRandomNum = function (min, max) {
//   let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
//   return randomNum;
// };

// let moveUp = function () {
//   snake.ySpeed -= 1;
// };
// let moveDown = function () {
//   snake.ySpeed += 1;
// };
// let moveLeft = function () {
//   snake.xSpeed -= 1;
// };
// let moveRight = function () {
//   snake.xSpeed += 1;
// };
