// Função para verificar se há um vencedor
function checkWinner(board) {
    // Verificar linhas
    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
            return board[i][0];
        }
    }

    // Verificar colunas
    for (let i = 0; i < 3; i++) {
        if (board[0][i] !== '' && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
            return board[0][i];
        }
    }

    // Verificar diagonais
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        return board[0][0];
    }
    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        return board[0][2];
    }

    // Se não houver vencedor
    return '';
}

// Função para verificar se o tabuleiro está cheio (empate)
function boardFull(board) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
                return false;
            }
        }
    }
    return true;
}

// Função para imprimir o tabuleiro
function printBoard(board) {
    for (let i = 0; i < 3; i++) {
        console.log(board[i].join(' | '));
        if (i < 2) {
            console.log('---------');
        }
    }
}

// Função principal para iniciar o jogo
function playGame() {
    let board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    let currentPlayer = 'X';

    while (true) {
        console.log(`É a vez do jogador ${currentPlayer}`);
        printBoard(board);

        let row = prompt('Escolha a linha (0, 1, ou 2):');
        let col = prompt('Escolha a coluna (0, 1, ou 2):');

        if (board[row][col] === '') {
            board[row][col] = currentPlayer;
            let winner = checkWinner(board);
            if (winner !== '') {
                printBoard(board);
                console.log(`Parabéns! O jogador ${winner} venceu.`);
                break;
            } else if (boardFull(board)) {
                printBoard(board);
                console.log('Empate!');
                break;
            }
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        } else {
            console.log('Essa posição já está ocupada. Tente novamente.');
        }
    }
}

// Iniciar o jogo
playGame();
