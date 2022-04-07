import { deepCopy, valueEquals } from '../../src/index';

describe('实现深拷贝', () => {
  const objA = { name: 'test', info: { age: 18 } };
  const objB = deepCopy(objA);
  objB.name = 'test1';
  it('objA and objB have not the same properties', () => {
    expect(objA).not.toEqual(objB);
  });
});

describe('数组值相等', () => {
  const arrayA = [1, 2, 3];
  const arrayB = [1, 2, 3];
  it(`valueEquals("${arrayA}", "${arrayB}") -> should be return true`, () => {
    expect(valueEquals(arrayA, arrayB)).toBe(true);
  });
});
