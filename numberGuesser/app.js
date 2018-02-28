// GAME FUNCTION:
//     - Player must guess a number between a min and max
//     - Player gets a certain amount of guesses
//     - Notify player of guesses remaining
//     - Notify the player of the correct answer if they lose
//     - Let the player choose to play again

// Game Values

let min = 1,
    max = 10, 
    winningNum = 2,
    guessesLeft = 3;
    
// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');
      
// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function(){
   let guess = parseInt(guessInput.value);
   
   // Validate
   if(isNaN(guess) || guess < min || guess > max){
       setMessage(`Please enter a number between ${min} and ${max}`, 'red');
   }
   
   // Check if won
   if(guess === winningNum){
       // Game over - Won
       
       gameOver(true, `${winningNum} is correct, YOU WIN!`)
   } else {
       // Wrong number
       guessesLeft -= 1;
       
       if(guessesLeft === 0){
           // Game Over - Lost
           gameOver(false, `Game Over, you lost. the correct number was ${winningNum}`)
           
       } else {
           //Game continues - answer wrong
           
           // Change Border Color
           guessInput.style.borderColor = 'red';
           
           // ClearInput
           guessInput.value = '';
           
           // Tell user its the wrong number
           setMessage(`${guess} is not correct, ${guessesLeft} guessesLeft`, 'red');
       }
   }
})

// Game Over
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';
    
    // Disable Input
       guessInput.disabled = true;
       // Change border to green
       guessInput.style.borderColor = color;
       // Set text color
       message.style.color = color;
       // Set message
       setMessage(msg);
}

// Set message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}