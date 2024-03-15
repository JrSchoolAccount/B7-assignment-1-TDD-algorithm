function filterWordsByLength(array, length) {
  return array.filter((word) => word.length === length);
}

function filterUniqueLetterWords(array, uniqueWords) {
  if (uniqueWords) {
    return array.filter((word) => hasUniqueLetters(word));
  } else {
    return array.filter((word) => !hasUniqueLetters(word));
  }
}

function hasUniqueLetters(word) {
  const checked = {};

  for (let letter of word) {
    if (checked[letter]) {
      return false;
    }
    checked[letter] = true;
  }

  return true;
}

function wordRandomizer(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  if (randomIndex === 0) {
    return array[randomIndex];
  } else return array[randomIndex];
}

export default function chooseWord(wordArray, wordLength, uniqueLetters) {
  const wordsFilteredByLength = filterWordsByLength(wordArray, wordLength);

  const wordsFilteredByUnique = filterUniqueLetterWords(wordsFilteredByLength, uniqueLetters);

  const randomWord = wordRandomizer(wordsFilteredByUnique);

  if (randomWord === undefined) {
    return 'No word available, try again';
  }

  return randomWord;
}
