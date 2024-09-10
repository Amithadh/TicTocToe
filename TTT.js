let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;
const resultMessage = document.getElementById('resultMessage');

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function makeMove(index) {
    if (board[index] === '' && gameActive) {
        board[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].textContent = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    let roundWon = false;
    for (let i = 0; i < winningCombinations.length; i++) {
        const winCombo = winningCombinations[i];
        let a = board[winCombo[0]];
        let b = board[winCombo[1]];
        let c = board[winCombo[2]];

        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        resultMessage.textContent = `Player ${currentPlayer} Wins!`;
        gameActive = false;
        return;
    }

    if (!board.includes('')) {
        resultMessage.textContent = 'It\'s a draw!';
        gameActive = false;
    }
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    resultMessage.textContent = '';
    let cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
    }
}
