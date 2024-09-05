// this variable keep track of whose turn it is
let activePlayer = "X";
// this array stores an array of moves we use this to determine win con
let selectedSquares = [];

// this function is for placing an x or o in a square
function placeXOrO(squareNumber) {
    // this con ensures a square hasnt been selected already
    // the .some() method is used to check each element of the selectSquare array
    // to see if it contains the square number clicked on
    if (!selectedSquares.some(element => element.inclues(squareNumber))) {
        // this variable retrieves the HTML element id that was clicked
        let select = document.getElementById(squareNumber);
        // this con checks who turn it is
        if (activePlayer === "X") {
            // if avtivePlayer is equal to "X", the x.png is placed in the HTML
            select.style.backgroundImage = 'url("./img/x.png")';
        } else {
            // if activePlayer is equal to "O", the o.png is placed in HTML
            select.style.backgroundImage = 'url("./img/o.png")';
        }
        // square number and active player are concatenated together and added to array
        selectedSquares.push(squareNumber + activePlayer);
        // this calls a function to check for any win cons
        checkWinConditions();
        // this condition is for changing the active player
        if (activePlayer === "X") {
            // if active player is "X" change it to "O"
            activePlayer === "O";
            // if active player is anything other than "X
        } else {
            // change active  player to "X"
            activePlayer = "X";
        }
        // this function plays placement sound
        Audio("./media/place.mp3")
        // this conition checks to see if it is the computers turn
        if (activePlayer ==="O") {
            // this function disables click for computers turn
            if (activePlayer === "O") {
                // this function disables clicking the computers turn
                disableClick();
                // this function waits 1 sec before the computer places an image and enables click
                setTimeout(function (){ computerTurn();}, 1000);
            }
            // returnin true is needed for our computersTurn() function to work
            return true;
        }
        // this function results in a random square being selected by the computer
        function computerTurn() {
            // this boolean is needed for our while loop
            let success = false;
            // this variable stores a random number 0-8
            let pickASquare;
            // this condition allows our while loop to keep trying if square is selected already
            while(!success) {
                // a random number between 0 and 8 is selected
                pickASquare = String(Math.floor(Math.random() * 9));
                // if the random number evaluated returns true, the square hasnt been selected yet
                if (placeXOrO(pickASquare)) {
                    // this line calls the function
                    placeXOrO(pickASquare)
                    // this changes our boolean and ends the loop
                    success = true;
                };
            }
        }
    }
}