# Number guessing game


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Insert numbers into input
- See if the number was correct or not
- Visualize how many attempts you got the number right
- Change background theme


### Screenshot

![](https://github.com/carolmedici/guessing-game/blob/main/assets/images/print.jpg)
![](https://github.com/carolmedici/guessing-game/blob/main/assets/images/print2.png)
![](https://github.com/carolmedici/guessing-game/blob/main/assets/images/print-win.png)


### Links

- Solution URL: [https://github.com/carolmedici/guessing-game](https://github.com/carolmedici/guessing-game)
- Live Site URL: [https://carolmedici.github.io/guessing-game/](https://carolmedici.github.io/guessing-game/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Element manipulation
- Working with events
- Capture form value

### What I learned

I made this project to practice my skills with DOM manipulation, applying logic to make functions


```<div class="game">
            <h1>Guessing Game</h1>
            <p id="p">Hey! Let's play a game: guess a number from 0 to 10</p>
            <form id="guess-number">
                <input type="number" name="inumber" id="inumber">
                <button id='guessNumber' type="submit">Submit</button>
        </div>
```
```css
main {
  background-color: var(--background-main);
  width: min(50rem, 90%);
  padding: 3rem 5rem;
  border-radius: 1rem;
  margin-top: 12rem;
  font-family: var(--font-text);
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.244);
}
```
```js
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
```


### Continued development


Keep practicing and evolving in JS, start using REACT

## Author

- LinkedIn - [Carolina Médici](https://www.linkedin.com/in/carolina-medici/)
- Frontend Mentor - [@carolmedici](https://www.frontendmentor.io/profile/carolmedici)




