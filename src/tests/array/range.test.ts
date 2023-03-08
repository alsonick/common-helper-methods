import { CommonHelperMethods } from '../../lib/CommonHelperMethods';
import { describe, expect, it } from 'vitest';

const c = new CommonHelperMethods();

describe('range', () => {
  it('Should return the range between the largest and smallest number in the array.', () => {
    expect(c.array.range([100, 5])).toBe(95);
  });
  it('Should throw an error if an empty array is passed in as the argument.', () => {
    expect(() => c.array.range([])).toThrowError();
  });
  it('Should thrown an error if an array with a single element is passed in at the argument.', () => {
    expect(() => c.array.range([1])).toThrowError();
  });
});
