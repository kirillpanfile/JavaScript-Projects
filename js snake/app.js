//Cream configuratia
import cfg from './cfg.js'
import key from './movement.js'
// Primim canvas
const canvas = document.getElementById("canvas")
// Facem un 2d  context de desenare
const ctx = canvas.getContext("2d")
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
    const head = { x: cfg.snake.data[0].x + cfg.directions.X, y: cfg.snake.data[0].y + cfg.directions.Y };
    cfg.snake.data.unshift(head);
    if (cfg.snake.data[0].x == cfg.food.x && cfg.snake.data[0].y == cfg.food.y) {
        gen()
    }
    else {
        cfg.snake.data.pop();
    }
}
function stop() {
    for (let i = 4; i < cfg.snake.data.length; i++)  if (cfg.snake.data[i].x === cfg.snake.data[0].x && cfg.snake.data[i].y === cfg.snake.data[0].y) return true
    const left = cfg.snake.data[0].x < 0;
    if (left) cfg.snake.data[0].x = canvas.width - 10
    const right = cfg.snake.data[0].x > canvas.width - 10;
    if (right) cfg.snake.data[0].x = 0
    const top = cfg.snake.data[0].y < 0;
    if (top) cfg.snake.data[0].y = canvas.height - 10
    const bottom = cfg.snake.data[0].y > canvas.height - 10;
    if (bottom) cfg.snake.data[0].y = 0
}
document.addEventListener("keydown", key)
const rand = (min, max) => parseInt(((Math.random() * (max - min) + min) / 10)) * 10
const gen = () => {
    cfg.food.x = rand(0, canvas.width - 10)
    cfg.food.y = rand(0, canvas.height - 10)
}
const drawFood = () => {
    ctx.fillStyle = 'red';
    ctx.storkestyle = 'green';
    ctx.fillRect(cfg.food.x, cfg.food.y, 10, 10)
    ctx.strokeRect(cfg.food.x, cfg.food.y, 10, 10)
}
gen()
//Functia main
const main = () => {
    setInterval(function onTick() {
        if (stop()) return; cfg.changeDir = false;
        clear();
        move();
        drawFood();
        draw();
    }, 60)
}; main()