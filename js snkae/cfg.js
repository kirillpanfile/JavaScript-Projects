const cfg = {
    // Configul pentru canvas
    board: {
        bg: 'wheat',
        border: 'black'
    },
    // Configul pentru Snake
    snake: {
        bg: 'blue',
        border: 'black',
        //O parte din Snake
        data: [
            { x: 200, y: 200 },
            { x: 190, y: 200 },
            { x: 180, y: 200 },
            { x: 170, y: 200 },
            { x: 160, y: 200 },
            { x: 150, y: 200 },
            { x: 140, y: 200 },
            { x: 130, y: 200 },
            { x: 120, y: 200 },
            { x: 110, y: 200 },
            { x: 100, y: 200 }
        ]
    },
    directions: {
        X: 10,
        Y: 0
    },
    changeDir: false
}

export default cfg