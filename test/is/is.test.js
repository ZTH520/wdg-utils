import { isArray, isEmpty } from '../../src/index';

describe('判断是否为数组', () => {
  it('isArray({})) -> should return false', () => {
    expect(isArray({})).toBe(false);
  });
  it('isArray([])) -> should return true', () => {
    expect(isArray([])).toBe(true);
  });
});

describe('判断是否为空', () => {
  it('isEmpty({})) -> should return true', () => {
    expect(isEmpty({})).toBe(true);
  });
  it('isEmpty([])) -> should return true', () => {
    expect(isEmpty([])).toBe(true);
  });
});
