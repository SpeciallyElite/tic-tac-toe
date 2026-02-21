const positions = Array(9).fill[null];

const human = "X";
const machine = "O";
let currentPlayer = human;

function gameBoard() {
    if (positions[input] === null) {
        positions[input] = currentPlayer;
    }
    else {
        return console.log("Wrong Move cuz");
    }

    // newInput = input
    // if (positions.includes(newInput)){
    //     return console.log("Wrong Move");
    // }
    // else{
    //     positions.push(newInput);
    // }
    // return logic(newInput);
}

function UI(){
    console.log(Winner);
}

function logic() {
    gameBoard(input);
    winningConditions =
        [[0, 1, 2], [3, 4, 5], [6, 7, 8],     // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],     // Columns
        [0, 4, 8], [2, 4, 6]]               //Dia-ag-nolassssss mf [my friend :) ]

    function Winner() {
        for (i = 0; i < winningConditions.length; i++) {
            // const combination = winningConditions[i];
            // const a = combination[0];
            // const b = combination[1];
            // const c = combination[2]; Basically tha'ts what's below in one line

            const [a, b, c] = winningConditions[i];

            const pA = positions[a];
            const pB = positions[b];
            const pC = positions[c];

            if (pA !== null && pA === pB && pB === pC) {
                return pA;
            }
        }
    }
    function Switch() {
        if (currentPlayer === human){
            currentPlayer = machine;
            machineAcrobats();
        }
        else{
            currentPlayer = human;
        }
    }
}

function machineAcrobats(){
    const emptyCan = [];
    const randomizer = Math.floor(Math.random()*emptyCan.length)
    
    if (emptyCan.length === 0){
        return null;
    }

    for(i=0, i<positions.length; i++){
       if (positions[i] === null){
        emptyCan.push(i);
       } 
    }

    return emptyCan[randomizer];
}