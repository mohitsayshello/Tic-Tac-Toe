let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");  //assess all choices
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoices = () => {
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}


const drawGame = () => {
    msg.innerText = "game was draw. play again.";
    msg.style.backgroundColor = "#081b31"
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++
        userScorePara.innerText = userScore;
        msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
    } else {
        compScore++
        compScorePara.innerText = compScore;
        msg.innerText = `you lost.  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red"
    }
}


const playGame = (userChoice) => {
    //generate computer choice
    const compChoice = genCompChoices();

    if (userChoice === compChoice) {
        //draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors,paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock , scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock , paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

//1. access user and computer 

//2. access choices from user

//3. add event listener to get id of that choice to play our game.

//4. generate choice from computer and return this.

//5. we got user choice and computer choice both.

//6. apply our conditions for game.

//7. show our winner.

//8. if user win show msg, update score, change background color.
//   if comp win show msg, update score, change background color.

   