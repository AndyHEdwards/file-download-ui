import { describe, it, expect } from 'vitest';

import { capitaliseFirstLetter } from './utils';

describe('capitaliseFirstLetter', () => {
  it('should capitalize the first letter of a lowercase string', () => {
    expect(capitaliseFirstLetter('hello')).toBe('Hello');
  });

  it('should capitalize the first letter of an uppercase string', () => {
    expect(capitaliseFirstLetter('HELLO')).toBe('HELLO');
  });

  it('should handle an empty string', () => {
    expect(capitaliseFirstLetter('')).toBe('');
  });

  it('should handle a string with only one character', () => {
    expect(capitaliseFirstLetter('a')).toBe('A');
  });

  it('should handle a string that already has a capitalized first letter', () => {
    expect(capitaliseFirstLetter('World')).toBe('World');
  });

  it('should handle a string with numbers and symbols', () => {
    expect(capitaliseFirstLetter('123test')).toBe('123test');
    expect(capitaliseFirstLetter('!@#test')).toBe('!@#test');
  });
});
