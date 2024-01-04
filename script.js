"use strict";

const board = document.getElementById("game-board");

let snake = [{ x: 10, y: 10 }];

//Draw game map, snake and food
function draw() {
  board.innerHTML = "";
  drawSnake();
}

function drawSnake() {}
