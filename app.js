let userScore = 0;
let compScore = 0;

const userScoreBoard = document.querySelector("#user-score");
const compScoreBoard = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const heads = document.querySelectorAll(".head")

const drawGame = ()=>{
    console.log("Game was draw.");
    msg.innerText ="Game was draw.";
    msg.style.backgroundColor =  "#081b31";
}

const updateScoreBoard = ()=>{
    userScoreBoard.innerText = userScore;
    compScoreBoard.innerText = compScore;
 }

const showWinner = (userWin, userChoice,compChoice)=>{
    if(userWin){
        console.log(`You Win. Your ${userChoice} beats ${compChoice}`);
        msg.innerText =`You Win. Your ${userChoice} beats ${compChoice}`;
        userScore++;
        updateScoreBoard();
        msg.style.backgroundColor =  "green";

    }else{
        console.log("You Lose...");
        msg.innerText=`You Lost. ${compChoice} beats your ${userChoice}`;
        compScore++;
        updateScoreBoard();
        msg.style.backgroundColor =  "red";
    }
}

const getCompChoice=()=> {
    const options = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    const head = heads[randomNumber];
    head.style.color = "red";  
    return options[randomNumber];
}

const playGame = (userChoice)=>{
    const compChoice = getCompChoice();
    console.log(`user: ${userChoice}
comp: ${compChoice}`);

    if(userChoice == compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice == "rock"){
            userWin = compChoice == "paper" ? false : true;
        }else if(userChoice == "paper"){
            userWin = compChoice == "rock" ? true : false;
        }else{
            userWin = compChoice == "rock" ? false : true;  
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        heads.forEach((head)=>{
            head.style.color ="white";
        })
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
})