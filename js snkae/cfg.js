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
            { x: 160, y: 200 }
        ]
    },
    directions: {
        X: 10,
        Y: 0
    }
}

export default cfg