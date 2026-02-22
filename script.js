function gameStoragation() {

    const positions = Array(9).fill(null);
    const human = "X";
    const machine = "O";
    let currentPlayer = human;
    let gameOver = false;

    const winningConditions =
        [[0, 1, 2], [3, 4, 5], [6, 7, 8],     // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],     // Columns
        [0, 4, 8], [2, 4, 6]];               //Dia-ag-nolassssss mf [my friend :) ]

    const cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {

        cells[i].addEventListener("click", () => {
            const input = cells[i].dataset.index;
            logic(Number(input));
        });
    }

    function gameBoard(input) {
        if (positions[input] === null) {
            positions[input] = currentPlayer;
            cells[input].textContent = currentPlayer
            return true;
        }
        else {
            console.log("Wrong Move cuz");
            return false;
        }
    }

    
    function WinnerDisplay(winner){
        const winnerOutput = document.getElementById("winner");
        winnerOutput.textContent = "Winner is "+ winner;
    }

    function drawDisplay(){
        const drawOutput = document.getElementById("draw")
        drawOutput.textContent = "Draw"
    }

    function Winner() {
        for (let i = 0; i < winningConditions.length; i++) {

            const [a, b, c] = winningConditions[i];

            const pA = positions[a];
            const pB = positions[b];
            const pC = positions[c];

            if (pA !== null && pA === pB && pB === pC) {
                return pA;
            }
        }
        return null;
    }

    function DrawCuz() {
        let boardFull = true;
        for (let i = 0; i < positions.length; i++) {
            if (positions[i] === null) {
            boardFull = false;
            break;
            }
        }

        let winner = Winner();

        if (boardFull && !winner) {
            return true;
        } else {
            return false;
        }

    }

    function Switch() {
        if (currentPlayer === human) {
            currentPlayer = machine;
        }
        else {
            currentPlayer = human;
        }
        
        if (currentPlayer === machine) {
            const machineIndex = machineAcrobats();
            if (machineIndex !== null) {
                logic(machineIndex);
            }
        }
    }

    function logic(input) {
        if (gameOver) return;

        const validMove = gameBoard(input);
        if (!validMove) return;

        const winner = Winner();
        if (winner !== null) {
            gameOver = true;
            WinnerDisplay(winner);
            return;
        }

        const draw = DrawCuz();
        if (draw) {
            gameOver = true;
            drawDisplay();
            return;
        }
        Switch();
    }

    function machineAcrobats() {
        const emptyCan = [];

        for (let i = 0; i < positions.length; i++) {
            if (positions[i] === null) {
                emptyCan.push(i);
            }
        }

        if (emptyCan.length === 0) {
            return null;
        }

        const randomizer = Math.floor(Math.random() * emptyCan.length)
        return emptyCan[randomizer];
    }

    const resetBTN = document.getElementById("resetButton");
    resetBTN.addEventListener("click", resetGame);

    function resetGame(){
        positions.fill(null);
        currentPlayer = human;

        for (let i = 0; i < cells.length; i++) {
            cells[i].textContent = "";
        }

        document.getElementById("winner").textContent = "";
        document.getElementById("draw").textContent = "";

        gameOver = false;
    }
}

gameStoragation();