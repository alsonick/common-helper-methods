import { CommonHelperMethods } from '../../lib/CommonHelperMethods';
import { describe, expect, it } from 'vitest';

const c = new CommonHelperMethods();

describe('reverse', () => {
  it('Should reverse string', () => {
    expect(c.string.reverse('baz')).toBe('zab');
  });
  it('Should thrown an error when argument is an empty string', () => {
    expect(() => c.string.reverse('')).toThrowError();
  });
});
