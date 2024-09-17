document.addEventListener('DOMContentLoaded', () => {
    const chessboard = document.getElementById('chessboard');

    const createBoard = () => {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const square = document.createElement('div');
                square.dataset.row = i;
                square.dataset.col = j;
                if ((i + j) % 2 === 0) {
                    square.classList.add('white');
                } else {
                    square.classList.add('black');
                }
                chessboard.appendChild(square);
            }
        }
    };

    const moveBishop = (startRow, startCol) => {
        const squares = document.querySelectorAll('.chessboard div');
        squares.forEach(square => {
            square.classList.remove('bishop');
            const row = parseInt(square.dataset.row);
            const col = parseInt(square.dataset.col);
            if (Math.abs(startRow - row) === Math.abs(startCol - col)) {
                square.classList.add('bishop');
            }
        });
    };

    createBoard();

    // Set initial bishop position
    moveBishop(0, 2); // Example: Bishop starts at row 0, column 2

    // Add event listener to move bishop on click
    chessboard.addEventListener('click', event => {
        const square = event.target;
        const row = parseInt(square.dataset.row);
        const col = parseInt(square.dataset.col);
        moveBishop(row, col);
    });
});
