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
    cfg.snake.data.pop();
    console.log(cfg.snake.data);
}
function stop() {
    for (let i = 4; i < cfg.snake.data.length; i++)  if (cfg.snake.data[i].x === cfg.snake.data[0].x && cfg.snake.data[i].y === cfg.snake.data[0].y) return true
    const left = cfg.snake.data[0].x < 0;
    const right = cfg.snake.data[0].x > canvas.width - 10;
    const top = cfg.snake.data[0].y < 0;
    const bottom = cfg.snake.data[0].y > canvas.height - 10;
    return left || right || top || bottom
}
document.addEventListener("keydown", key)
//Functia main
const main = () => {
    setInterval(function onTick() {
        if (stop()) return; cfg.changeDir = false;
        clear();
        move();
        draw();
        console.log(cfg.directions.X)
    }, 80)
}; main()
