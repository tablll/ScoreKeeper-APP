// App to keep scores! 

var p1score = document.querySelector("#p1score");
var p2score = document.querySelector("#p2score");

var p1 = 0;
var p2 = 0;
var gameOver = false;
var till = 5;

var button1 = document.querySelector("#player1");
var button2 = document.querySelector("#player2");
var button3 = document.querySelector("#reset");

var tilldisplay = document.querySelector("#till");

var totalScore = document.querySelector("#totalscore");

var winner = document.querySelector("#winnertext");

button1.addEventListener("click", function () {
    if (!gameOver) {
        p1++;
        if (p1 === till) {
            gameOver = true;
            p1score.classList.add('green');
            winner.textContent = "Winner is Player 1 !!!"
        }
        p1score.textContent = p1;
        
    }

});

button2.addEventListener("click", function () {
    if (!gameOver) {
        p2++;
        if (p2 === till) {
            gameOver = true;
            p2score.classList.add('green');
            winner.textContent = "Winner is Player 2 !!!"
        }
        p2score.textContent = p2;
    }

});

button3.addEventListener("click", function () {
    reset();
});

totalScore.addEventListener("change", function () {
    reset();
    tilldisplay.textContent = this.value;
    till = Number(this.value);
});

function reset() {
    gameOver = false;
    p1 = 0;
    p2 = 0;
    p1score.textContent = p1;
    p2score.textContent = p2;
    p1score.classList.remove('green');
    p2score.classList.remove('green');
    winner.textContent = " ";
};

