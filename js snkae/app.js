//Cream configuratia
import cfg from './cfg.js'
import key from './movement.js'
// Primim canvas
const canvas = document.getElementById("canvas")
// Facem un 2d  context de desenare
const ctx = canvas.getContext("2d")
// Pe verticala
let X = 10;
// Pe orizontala
let Y = 0;

let changeDir = false
//Initializam Playgroundul
const clear = () => {
    ctx.fillStyle = cfg.board.bg
    ctx.storkestyle = cfg.board.border
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.strokeRect(0, 0, canvas.width, canvas.height)
}
//Cream o parte al Snake
const create = (part) => {
    ctx.fillStyle = cfg.snake.bg;
    ctx.strokestyle = cfg.snake.border;
    ctx.fillRect(part.x, part.y, 10, 10);
    ctx.strokeRect(part.x, part.y, 10, 10);
}
// Desenam Snake pe ecran
const draw = () => cfg.snake.data.forEach(part => create(part))
//Functia Move
const move = () => {
    const head = { x: cfg.snake.data[0].x + X, y: cfg.snake.data[0].y + Y };
    cfg.snake.data.unshift(head);
    cfg.snake.data.pop();
    console.log(cfg.snake.data);
}
//Functia main
const main = () => setInterval(() => { clear(); move(); draw() }, 100); main()