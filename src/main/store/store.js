/**
 * 存储localStorage
 * @param name key值
 * @param content value值
 */
export const setLocal = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  if (window.localStorage) {
    window.localStorage.setItem(name, content);
  }
};

/**
 * 获取存储localStorage
 * @param name key值
 * @return string
 */
export const getLocal = (name) => {
  if (!name || !window.localStorage) return null;
  return window.localStorage.getItem(name);
};

/**
 * 删除localStorage
 * @param name key值
 */
export const removeLocal = (name) => {
  if (!name || !window.localStorage) return;
  window.localStorage.removeItem(name);
};
