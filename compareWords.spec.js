import { describe, expect, test } from '@jest/globals';
import compareWord from './compareWords.js';

describe('compareWords()', () => {
  it('does nothing to an empty string and return an empty array', () => {
    const output = compareWord('', '');
    expect(output).toEqual([]);
  });

  it('compares two strings and returns an array with result: correct', () => {
    const output = compareWord('abc', 'abc');
    expect(output).toEqual([
      { letter: 'a', result: 'correct' },
      { letter: 'b', result: 'correct' },
      { letter: 'c', result: 'correct' },
    ]);
  });

  it('returns an array of letter objects with "letter" and "result: incorrect"', () => {
    const output = compareWord('abc', '');
    expect(output).toEqual([
      { letter: 'a', result: 'incorrect' },
      { letter: 'b', result: 'incorrect' },
      { letter: 'c', result: 'incorrect' },
    ]);
  });

  it('returns an array of letter objects with "letter" and "result: misplaced"', () => {
    const output = compareWord('abc', 'cab');
    expect(output).toEqual([
      { letter: 'a', result: 'misplaced' },
      { letter: 'b', result: 'misplaced' },
      { letter: 'c', result: 'misplaced' },
    ]);
  });

  it('compares the word "hallå" with "cykla", then returns an array', () => {
    const output = compareWord('hallå', 'cykla');
    expect(output).toEqual([
      { letter: 'h', result: 'incorrect' },
      { letter: 'a', result: 'misplaced' },
      { letter: 'l', result: 'incorrect' },
      { letter: 'l', result: 'correct' },
      { letter: 'å', result: 'incorrect' },
    ]);
  });
});
