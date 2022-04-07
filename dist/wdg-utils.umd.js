(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["wdg-utils"] = {}));
})(this, (function (exports) { 'use strict';

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

  exports.isArray = isArray;
  exports.isEmpty = isEmpty;
  exports.isHtmlElement = isHtmlElement;
  exports.isNumber = isNumber;
  exports.isObject = isObject;
  exports.isString = isString;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
