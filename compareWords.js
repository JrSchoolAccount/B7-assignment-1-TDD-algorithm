function splitStringToArray(str) {
  return str.split('');
}

function checkLetter(letter, correctWordArray) {
  return correctWordArray.includes(letter) ? 'misplaced' : 'incorrect';
}

export default function compareWords(guess, correctWord) {
  const wordArray = splitStringToArray(guess);
  const correctWordArray = splitStringToArray(correctWord);
  const result = [];

  wordArray.forEach((letter, index) => {
    const resultValue = letter === correctWordArray[index] ? 'correct' : checkLetter(letter, correctWordArray);
    result.push({ letter, result: resultValue });
  });

  return result;
}
