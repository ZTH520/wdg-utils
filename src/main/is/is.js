export function isArray(input) {
  return Object.prototype.toString.call(input) === '[object Array]';
}

export function isString(input) {
  return Object.prototype.toString.call(input) === '[object String]';
}

export function isObject(input) {
  return Object.prototype.toString.call(input) === '[object Object]';
}

export function isHtmlElement(node) {
  return node && node.nodeType === Node.ELEMENT_NODE;
}

export function isNumber(input) {
  return input instanceof Number || Object.prototype.toString.call(input) === '[object Number]';
}

export const isEmpty = (val) => {
  return (
    (!val && val !== 0) ||
    (isArray(val) && val.length === 0) ||
    (isObject(val) && !Object.keys(val).length)
  );
};

export const looseEqual = (a, b) => {
  const isObjectA = isObject(a);
  const isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    return JSON.stringify(a) === JSON.stringify(b);
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
};

export const arrayEquals = (arrayA, arrayB) => {
  arrayA = arrayA || [];
  arrayB = arrayB || [];

  if (arrayA.length !== arrayB.length) {
    return false;
  }

  for (let i = 0; i < arrayA.length; i++) {
    if (!looseEqual(arrayA[i], arrayB[i])) {
      return false;
    }
  }

  return true;
};

export const isEqual = (value1, value2) => {
  if (Array.isArray(value1) && Array.isArray(value2)) {
    return arrayEquals(value1, value2);
  }
  return looseEqual(value1, value2);
};
