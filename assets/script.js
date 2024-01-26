const boxes = document.querySelectorAll('#box');
const reset = document.querySelector('#reset-btn')
var isTurn = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

var idTurn = true;
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (isTurn === true) {
            box.innerHTML = 'X';
            isTurn = false;
        } else {
            box.innerHTML = 'O';
            isTurn = true;
        }
        box.disabled = true;
        winnerChecking();
    })
})

const winnerChecking = () => {
    for (let pattern of winPatterns) {
        let pos1 = box[pattern[0]].innerText;
        let pos2 = box[pattern[1]].innerText;
        let pos3 = box[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos2 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log('winner')
                document.querySelector('#h1').innerText = `WINNER IS ${pos1}!`

                for (let box of boxes) {
                    box.disabled = true;
                }
            }
        }
    }
}

const resetBtn = () => {
    isTurn = true;
    
    document.querySelector('#h1').innerText = "";
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
}

reset.addEventListener('click', resetBtn);