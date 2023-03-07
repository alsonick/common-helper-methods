import { CommonHelperMethods } from '../../lib/CommonHelperMethods';
import { describe, expect, it } from 'vitest';

const c = new CommonHelperMethods();

describe('array', () => {
  it('Should return an array of the characters in the string', () => {
    expect(c.string.array('hello')).toStrictEqual(['h', 'e', 'l', 'l', 'o']);
  });
  it('', () => {
    expect(c.string.array('hello,new,world', ',')).toStrictEqual([
      'hello',
      'new',
      'world',
    ]);
  });
  it("Should trow if splitter identifier isn't found in string input", () => {
    expect(() => c.string.array('foo+bar+baz', ',')).toThrowError();
  });
  it('Should throw an error when argument is an empty string', () => {
    expect(() => c.string.array('')).toThrowError();
  });
});
