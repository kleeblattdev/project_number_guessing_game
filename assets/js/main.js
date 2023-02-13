// Input
const round4 = document.querySelector('#round4');
const round5 = document.querySelector('#round5');
const round6 = document.querySelector('#round6');
const roundCustom = document.querySelector('#roundCustom');
const customUserRound = document.querySelector('#customUserRound');
const userGuess = document.querySelector('#userGuess');
const btnGuess = document.querySelector('button[type="submit"]');

//Sections
const userRoundInput = document.querySelector('#userRoundInput');
const roundsPlaying = document.querySelector('#roundsPlaying');

//Output

const roundOf = document.querySelector('#roundOf');

const result = document.querySelector('#result');
const endResult = document.querySelector('#endResult');

//Variables needed for functions
let roundCounter = 0;
let counterOutput = 0;
let maxRoundCounter = 0;
let randomNum = Math.round(Math.random()*100);

//function User Rounds Counter
const rounds = () =>{
    roundCounter++;
    let userGuessValue = Number(userGuess.value);

    counterOutput = roundCounter.toString();
    roundOf.innerHTML = `${counterOutput} / ${maxRoundCounter.toString()}`;

    if (roundCounter === maxRoundCounter && userGuessValue != randomNum) {
        return endResult.innerHTML= `You lose! The Number was ${randomNum} .`;
    }
}

// function max Round Counter

const maxRound = () =>{
    if (round4.checked){
        maxRoundCounter = 4;
        return
    }else if(round5.checked){
        maxRoundCounter = 5;
        return
    }else if(round6.checked){
        maxRoundCounter = 6;
        return
    }else if(roundCustom.checked){
        maxRoundCounter = userGuess.value;
        return
    }
}

//function User Guess compare

const userGuessCompare = () =>{
    let userGuessValue = Number(userGuess.value);
    let guesses = document.createElement("li");

    if (userGuessValue < randomNum){
        guesses.innerHTML= `guess higher than ${userGuessValue}`;
        result.appendChild(guesses);
        return
    }
    else if (userGuessValue > randomNum){
        guesses.innerHTML= `guess lower than ${userGuessValue}`;
        result.appendChild(guesses);
        return
    }
    else{
        endResult.innerHTML = `Yes! You got me in ${counterOutput} guesses!`;
    }
}


// Button function
btnGuess.addEventListener("click",(event)=>{
    event.preventDefault();
    
    userRoundInput.style.display = 'none';
    roundsPlaying.style.display = 'block';

    maxRound();
    rounds();

    console.log(randomNum);
    userGuessCompare();

})