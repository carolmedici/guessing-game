const game = document.querySelector(".game");
const winner = document.querySelector(".result");
const resultP = document.querySelector(".result p");
const fail = document.getElementById("p");

const randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

function guessingNumber(event) {
  event.preventDefault();

  const result = document.getElementById("inumber");

  if (Number(result.value) == randomNumber) {
        game.classList.add("hide");
        winner.classList.remove('hide');
        resultP.innerText = `You Rock! You got it in ${xAttempts} trie(s)`;
  } else{
    fail.innerHTML = "You missed. Try again :)";
  }
  result.value = ""
  xAttempts++;

}
  
const btnGuessNumber = document.querySelector("#guessNumber")
const btnPlayAgain = document.querySelector("#playAgain")
  
btnGuessNumber.addEventListener('click', guessingNumber)
btnPlayAgain.addEventListener('click', function(){
    game.classList.remove("hide");
    result.classList.add("hide");
    xAttempts = 1
})
       


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