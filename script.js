
function playRound(){
    do{
        var playerSelection = prompt("pick rock, paper, or scissors!");
        playerSelection = playerSelection.toLowerCase();
        }while((playerSelection!==("rock"))&&(playerSelection!==("paper"))&&(playerSelection!==("scissors")))
    var computerSelection = computerPlay();
    var results= check(playerSelection, computerSelection);
    return results;
}
    

function check(a,b){
    if (a===b){
        return ("Tie!");
    }
    else if((a==="rock")&&(b==="scissors")){
        return(a+" beats "+b+" you win!")
    }
    else if((a==="paper")&&(b==="rock")){
        return(a+" beats "+b+" you win!")
    }
    else if((a==="scissors")&&(b==="paper")){
        return(a+" beats "+b+" you win!")
    }
    else{
        return(b+" beats "+a+" you lose!")
    }
}
function computerPlay(){
var choice = Math.floor(Math.random()*3);
console.log(choice);
    switch(choice){
        case 0:
            return ("rock");
            //break;
        case 1:
            return ("paper");
            //break;
        case 2:
            return ("scissors");
           // break;
        default:
            return -1;
    }


}
/*function playRound(playerSelection, computerSelection) {
	// your code here!
}*/

//const playerSelection = 'rock'
//const computerSelection = computerPlay()
//console.log(playRound(playerSelection, computerSelection))