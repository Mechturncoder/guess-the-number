let randomNumber = parseInt(Math.random() * 100 + 1)

const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const remianing = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')
const guessSlot = document.querySelector('.guesses')

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please Enter a valid Number')
    }else if(guess<1){
        alert('Please Enter a Number greater than 1')
    }else if(guess>100){
        alert('Please Enter a Number less than 100')
    }else{
        prevGuess.push(guess); //pushing into empty array
        if(numGuess === 11){    //checking if it was last attempt
            displayGuess(guess)     //comparing with the random number
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame();
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    // Check if the guessed number is higher or lower
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }else if(guess < randomNumber){
        displayMessage(`Number is too low`)
    }else if(guess>randomNumber){
        displayMessage(`number is too high`)
    }
}

function displayGuess(guess){
    //
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remianing.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h3>${message}</h3>`
}

function endGame(){
    userInput.value= ''
    userInput.setAttribute('disabled', '');
    p.classList.add('button')
    p.innerHTML = `<h3 id="newGame">Start New Game.</h3>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
function newGame(){
    const startNewGameBtn = document.querySelector('#newGame');
    startNewGameBtn.addEventListener('click', function(){
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 0;
        guessSlot.innerHTML = ''
        remianing.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        displayMessage(``)
        startOver.removeChild(p)
        playGame = true;
    })
}
