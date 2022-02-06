import cfg from './cfg.js';

export default function key(event) {
    const A = 83;
    const S = 65;
    const W = 87;
    const D = 68;

    const pressed = event.keyCode;
    const up = cfg.directions.X === -10;
    const down = cfg.directions.X === 10;
    const left = cfg.directions.Y === 10;
    const right = cfg.directions.Y === -10;

    if (pressed === A && !right) {
        cfg.directions.X = -10
        cfg.directions.Y = 0
    }

    if (pressed === W && !down) {
        cfg.directions.X = 0
        cfg.directions.Y = -10
    }

    if (pressed === D && !left) {
        cfg.directions.X = 10
        cfg.directions.Y = 0
    }

    if (pressed === S && !up) {
        cfg.directions.X = 0
        cfg.directions.Y = 10
    }
}