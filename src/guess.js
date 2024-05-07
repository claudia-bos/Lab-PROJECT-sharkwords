
// setupGuesses function will put every word in button
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function setupGuesses(element, handleGuess) {
  // this will go over each letter in the alphabet variable(loop)
  alphabet.split('').forEach((letter) => {
    // this will create a element called button
    const btn = document.createElement('button');
    // this will update the text in html
    btn.innerText = letter;
    // this will make the buttons clickable
    btn.addEventListener('click', (e) => handleGuess(e, letter));
    // this will add the button to the element
    element.append(btn);
  });
}

export default setupGuesses;
