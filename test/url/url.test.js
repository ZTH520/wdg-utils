/**
 * @jest-environment jsdom
 */
import { getUrlParams } from '../../src/index';

describe('转换浏览器url参数为json对象', () => {
  it(`getUrlParams('?title=你好url&test=true') -> should return title`, () => {
    expect(getUrlParams('?title=你好url&test=true')).toHaveProperty('title');
  });
  it(`getUrlParams('') -> should return Object`, () => {
    expect(getUrlParams('')).toBeInstanceOf(Object);
  });
});
