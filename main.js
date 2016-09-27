//Create variables (Game,rollDice,numberoftries)
var rollDice = document.getElementById('button');
var numberOfTries = "";




var game = {
    time: new Date(),
    startTime: null,
    diceRoll: function diceRoll() {

        numberOfTries++;
        if (numberOfTries === 1) {
            this.startTime = new Date();
        }
        var rollOne = randomize();
        var rollTwo = randomize();

        if (rollOne + rollTwo === 7 || rollOne + rollTwo === 11) {
            var winTime = new Date();
            var timeDifference = Math.floor((winTime.getTime() - this.startTime.getTime()) / 1000);
            document.getElementById("topMessage").innerHTML = "Winner!";
            document.getElementById('attempts').innerHTML = "(It took you " + numberOfTries + " tries and " + timeDifference + " seconds)";
            numberOfTries = 0;
            this.startTime = new Date();


        } else {
            document.getElementById("topMessage").innerHTML = "Try Again";
            document.getElementById("attempts").innerHTML = "";

        }

        document.getElementById("diceOne").innerHTML = rollOne;
        document.getElementById("diceTwo").innerHTML = rollTwo;
    }

}

rollDice.addEventListener("click", function() {
    game.diceRoll();
})

function randomize() {
    return Math.floor((Math.random() * 6) + 1);
    console.log(rollDice)
}

var startTime = "Game Started " + game.time.getFullYear() + "-" + (game.time.getMonth()+1) + "-" + game.time.getDate() + " at " + game.time.getHours() +":"+ game.time.getMinutes();

document.getElementById("startTime").innerHTML = startTime;
