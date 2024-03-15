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

  it('returns a 6 letter word that is not unique (has the same letter more than once)', () => {
    const wordArray = ['cat', 'tiger', 'rabbit'];
    const wordLength = 6;
    const uniqueLetters = false;
    const output = chooseWord(wordArray, wordLength, uniqueLetters);

    expect(output).toEqual('rabbit');
  });

  it('returns a 6 letter word that is unique (only uses the same letter once)', () => {
    const wordArray = ['lizard', 'gibbon', 'rabbit'];
    const wordLength = 6;
    const uniqueLetters = true;
    const output = chooseWord(wordArray, wordLength, uniqueLetters);

    expect(output).toEqual('lizard');
  });
});
