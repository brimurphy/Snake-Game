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
let snake = 
// Generate a random number between to values, inclusive
let getRandomNum = function (min, max) {
  let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNum;
};
