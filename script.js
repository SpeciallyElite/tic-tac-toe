humanityInput = null;
machineInput = null;

function gameBoard(){
    const positions = [p1,p2,p3,p4,p5,p6,p7,p8,p9];
    const newPositions = [];
    newInput = input;
    if (newPositions.includes(newInput)){
        return console.log("Wrong Move");
    }
    else{
        newPositions.push(newInput);
    }
    return logic(newInput);
}

function logic(){
    gameBoard(input);
    
}