/**
 * @jest-environment jsdom
 */
import { getLocal, removeLocal, setLocal } from '../../src/index';

describe('操作localStorage', () => {
  it(`setLocal('local_name', 'hello') -> should return void`, () => {
    setLocal('local_name', 'hello');
  });
  it(`getLocal('local_name') -> should return hello`, () => {
    expect(getLocal('local_name')).toBe('hello');
  });
  it(`removeLocal('local_name') -> should return void`, () => {
    removeLocal('local_name');
    expect(getLocal('local_name')).toBe(null);
  });
});
