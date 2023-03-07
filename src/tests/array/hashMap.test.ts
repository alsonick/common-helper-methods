import { CommonHelperMethods } from '../../lib/CommonHelperMethods';
import { describe, expect, it } from 'vitest';

const c = new CommonHelperMethods();

describe('hashMap', () => {
  it('Should return a valid Hash Map.', () => {
    const map = new Map<string, string>();

    map.set('firstName', 'John');
    map.set('lastName', 'Smith');

    expect(
      c.array.hashMap(['firstName', 'lastName'], ['John', 'Smith']),
    ).toStrictEqual(map);
  });

  it('Should return a Hash Map given primitive keys', () => {
    const map = new Map<number, string>();

    map.set(1, 'one');
    map.set(2, 'two');

    expect(c.array.hashMap([1, 2], ['one', 'two'])).toStrictEqual(map);
  });

  it('Should throw an error if the array is empty', () => {
    expect(() => c.array.hashMap([], [])).toThrowError();
  });

  it("Should throw an error if there's a mismatch in length.", () => {
    expect(() => c.array.hashMap(['foo'], ['bar', 'baz'])).toThrowError();
  });
});
