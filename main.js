
import setupGuesses from './src/guess.js';
import {isLetterInWord, revealLetterInWord } from './src/word.js';
import setupWord from './src/word.js';
import setSharkImage from './src/sharkImage.js';
import getRandomWord from './src/randomWord.js';
import './style.css';

document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;

const initSharkwords = () => {

  const word = getRandomWord();
  let numWrong = 0;
  setupWord(document.querySelector('#word-container'), word);
  setSharkImage(document.querySelector('#shark-img'), numWrong);

  // for debugging:
  console.log(`[INFO] Correct word is: ${word}`);

    
    // console.log(isLetterInWord(word[0]), '(should be true)');
    // console.log(isLetterInWord('1'), '(should be false)');
    // console.log(word[0])
    // revealLetterInWord(word[0]);

   const handleGuess = (guessEvent, letter) => {
   // disable button after click
    const button = guessEvent.target 
    let status = document.querySelectorAll('.letter-box')
    let empty = false
    let allButtons = document.querySelectorAll('button')
    button.disabled = true

    // button.setAttribute('disabled', true)
    
    if (isLetterInWord(letter)) {
      revealLetterInWord(letter)
    } else {
      numWrong += 1
      setSharkImage(document.querySelector('#shark-img'), numWrong);
      
    }
    // console.log(`guessEvent is: ${guessEvent}`);
    // console.log(`letter is: ${letter}`);
    
    for (const el of letterBoxes) {
      if (el.innerText === '') {
        empty = false
        break
      }
      empty = true
    }
    if (empty === true) {
      status.innerText = "You win!"
      allButtons.forEach((element) => element.disabled = true)
    }
    if (numWrong === 5) {
      status.innerText = "You lose!"
      allButtons.forEach((element) => element.disabled = true)
    }
  };

  setupGuesses(document.querySelector('#letter-buttons'), handleGuess);

  // setupWord(document.querySelector('#word-container'), word);
  isLetterInWord(document.querySelector('#word-container'), word);
  revealLetterInWord(document.querySelector('#word-container'), word);

};

initSharkwords();


