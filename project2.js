
        const cells = document.querySelectorAll('.cell');
        let currentPlayer = 'X';
        let board = ['', '', '', '', '', '', '', '', ''];

        function placeMarker(index) {
            if (board[index] === '' && !checkWinner() && !checkDraw()) {
                board[index] = currentPlayer;
                cells[index].textContent = currentPlayer;
                cells[index].classList.add(currentPlayer === 'X' ? 'player-x' : 'player-o');
                if (checkWinner()) {
                    document.getElementById('message').textContent = 'Player ' + currentPlayer + ' wins!';
                } else if (checkDraw()) {
                    document.getElementById('message').textContent = 'It\'s a draw!';
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        }

        function checkWinner() {
            const winPatterns = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ];

            return winPatterns.some(pattern => {
                const [a, b, c] = pattern;
                return board[a] !== '' && board[a] === board[b] && board[b] === board[c];
            });
        }

        function checkDraw() {
            return board.every(cell => cell !== '');
        }

        function resetGame() {
            board = ['', '', '', '', '', '', '', '', ''];
            cells.forEach(cell => {
                cell.textContent = '';
                cell.classList.remove('player-x', 'player-o');
            });
            currentPlayer = 'X';
            document.getElementById('message').textContent = '';
        }