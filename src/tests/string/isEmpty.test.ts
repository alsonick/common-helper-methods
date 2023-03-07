import { CommonHelperMethods } from '../../lib/CommonHelperMethods';
import { describe, expect, it } from 'vitest';

const c = new CommonHelperMethods();

describe('isEmpty', () => {
  it('Should return true', () => {
    expect(c.string.isEmpty('')).toBe(true);
  });
  it('Should return false', () => {
    expect(c.string.isEmpty('foo')).toBe(false);
  });
});
