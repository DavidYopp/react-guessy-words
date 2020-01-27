export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
};

/**
* returns a redux thunk function that disptaches GUESS_WORD action
*    and(conditionally) CORRECT_GUESS action
* @function guessWord
* @param {string} guessedWord - the guessed word
* @returns {function} - Redux Thunk function
*/

export const guessWord = (guessedWord) => {
  return function(dispatch, getState) {

  };
};
