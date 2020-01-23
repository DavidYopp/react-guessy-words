/**
* @method getLetterMatchCount
* @param {string} guessedWord - Guessed Word
* @param {string} secretWord - Secret Word
* @returns {number} - Number of letters matched between guessed word and secret
*/
export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLetterSet = new Set(secretWord.split(''));
  const GuessedLetterSet = new Set(guessedWord.split(''));
  return [...secretLetterSet].filter(letter => GuessedLetterSet.has(letter)).length;
};
