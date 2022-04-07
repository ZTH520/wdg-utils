import { isObject } from '../is/is';

export const valueEquals = (a, b) => {
  if (a === b) return true;
  if (!(a instanceof Array)) return false;
  if (!(b instanceof Array)) return false;
  if (a.length !== b.length) return false;
  for (let i = 0; i !== a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

export const castArray = (arr) => {
  if (!arr && arr !== 0) return [];
  return Array.isArray(arr) ? arr : [arr];
};

/**
 * 创建一个纯函数缓存
 * @param {*} fn
 * @return string
 */
export function cached(fn) {
  const cache = Object.create(null);
  return function cachedFn(str) {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

export const deepCopy = (obj, hash = new WeakMap()) => {
  if (!isObject(obj)) return obj;
  if (hash.has(obj)) return hash.get(obj);
  const target = Array.isArray(obj) ? [] : {};
  hash.set(obj, target);
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      target[key] = deepCopy(obj[key], hash);
    }
  }
  return target;
};

export function copyData(formData, rowData, extraKey = ['id']) {
  const copyKeys = Object.keys(formData).concat(extraKey);
  const result = {};
  copyKeys.forEach((key) => {
    result[key] = rowData[key];
  });
  return result;
}

export const debounce = (fn, delay = 300, immediate = false) => {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    if (immediate && timer === null) {
      fn.apply(this, args);
      return;
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

export const throttle = (fn, delay) => {
  let flag = true;
  return (...args) => {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, args);
      flag = true;
    }, delay);
  };
};

export const listToTree = (list, parentId = 0, key = 'id', pkey = 'pId') => {
  const parentMap = {};
  const itemMap = {};
  const result = [];
  list.sort((a, b) => a[pkey] - b[pkey]);
  for (const item of list) {
    const { [key]: id, [pkey]: pid, value, level } = item;
    if (parentMap[id]) {
      item.children = parentMap[id];
    }
    const copyItem = { label: value, value: `${id}-${level}` };
    if (!itemMap[pid]) {
      (parentMap[pid] || (parentMap[pid] = [])).push(copyItem);
    } else {
      (itemMap[pid].children || (itemMap[pid].children = [])).push(copyItem);
      // (itemMap[pid].children ||= []).push(copyItem);
    }
    itemMap[id] = copyItem;
    if (item[pkey] === parentId) {
      result.push(copyItem);
    }
  }
  return result;
};
