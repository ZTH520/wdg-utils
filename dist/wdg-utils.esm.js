function isArray(input) {
  return Object.prototype.toString.call(input) === '[object Array]';
}

function isString(input) {
  return Object.prototype.toString.call(input) === '[object String]';
}

function isObject(input) {
  return Object.prototype.toString.call(input) === '[object Object]';
}

function isHtmlElement(node) {
  return node && node.nodeType === Node.ELEMENT_NODE;
}

function isEmpty(input) {
  return typeof input === 'undefined' || input === null || input === '';
}

function isNumber(input) {
  return input instanceof Number || Object.prototype.toString.call(input) === '[object Number]';
}

export { isArray, isEmpty, isHtmlElement, isNumber, isObject, isString };
