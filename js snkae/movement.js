import cfg from './cfg.js';

export default function key(event) {
    const A = 37;
    const D = 39;
    const W = 38;
    const S = 40;
    // Prevent the snake from reversing
    if (cfg.changeDir) return;
    cfg.changeDir = true;
    const press = event.keyCode;
    const up = cfg.directions.Y === -10;
    const down = cfg.directions.Y === 10;
    const right = cfg.directions.X === 10;
    const left = cfg.directions.X === -10;
    if (press === A && !right) { cfg.directions.X = -10; cfg.directions.Y = 0; }
    if (press === W && !down) { cfg.directions.X = 0; cfg.directions.Y = -10; }
    if (press === D && !left) { cfg.directions.X = 10; cfg.directions.Y = 0; }
    if (press === S && !up) { cfg.directions.X = 0; cfg.directions.Y = 10; }
}