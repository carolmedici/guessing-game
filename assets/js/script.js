const game = document.querySelector(".game");
const winner = document.querySelector(".result");
const resultP = document.querySelector(".result p");
const fail = document.getElementById("p");
const btnGuessNumber = document.querySelector("#guessNumber")
const btnPlayAgain = document.querySelector("#playAgain")
const randomNumber = Math.round(Math.random() * 10);
const result = document.getElementById("inumber");
let xAttempts = 1;

btnGuessNumber.addEventListener('click', guessingNumber)
btnPlayAgain.addEventListener('click', playAgain)

function guessingNumber(event) {
  event.preventDefault();

    if (result.value > 10 || result.value < 0){
        alert('Hey! The number must be between 0-10')
    }else if (Number(result.value) == randomNumber) {
       
hideToggle()
    resultP.innerText = `You Rock! You got it in ${xAttempts} trie(s)`;
    } else{
    fail.innerHTML = "You missed. Try again :)";
    }
    result.value = ""
    xAttempts++;
}
  
function playAgain(){
    hideToggle()
    xAttempts = 1
    randomNumber
}
     
function hideToggle(){
    game.classList.toggle('hide')
    winner.classList.toggle('hide')
}
       

/*change theme color*/
function setColor(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function changeTheme() {
   if (localStorage.getItem('theme') === 'original-color'){
       setColor('second-color');
   } else {
       setColor('original-color');
   }
}
(function () {
    if (localStorage.getItem('theme') === 'second-color') {
        setColor('second-color');
    } else {
        setColor('original-color');
    }
 })();