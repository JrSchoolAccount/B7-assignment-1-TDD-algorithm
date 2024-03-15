import { describe, expect, test } from '@jest/globals';
import chooseWord from './chooseWord.js';

describe('chooseWord()', () => {
  it('Takes an empty array and outputs string "No word available, try again"', () => {
    const output = chooseWord([], '', '');

    expect(output).toEqual('No word available, try again');
  });

  it('returns a word from an array with with six letters', () => {
    const wordArray = ['dog', 'bird', 'rabbit'];
    const wordLength = 6;
    const output = chooseWord(wordArray, wordLength, '');

    expect(output).toEqual('rabbit');
  });

  it('filters out 6 letter words with letters that are not unique and returns string "No word available, try again"', () => {
    const wordArray = ['gibbon', 'rabbit'];
    const wordLength = 6;
    const uniqueLetters = true;
    const output = chooseWord(wordArray, wordLength, uniqueLetters);

    expect(output).toEqual('No word available, try again');
  });

  it('filters out 3 letter words with letters that are unique and returns string "No word available, try again"', () => {
    const wordArray = ['dog', 'cat'];
    const wordLength = 3;
    const uniqueLetters = false;
    const output = chooseWord(wordArray, wordLength, uniqueLetters);

    expect(output).toEqual('No word available, try again');
  });

  it('returns a 3 letter word that is unique', () => {
    const wordArray = ['dog', 'gibbon', 'rabbit'];
    const wordLength = 3;
    const uniqueLetters = true;
    const output = chooseWord(wordArray, wordLength, uniqueLetters);

    expect(output).toEqual('dog');
  });
});
