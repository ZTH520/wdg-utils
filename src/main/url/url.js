export const getUrlParams = (url) => {
  if (url.indexOf('?') === -1) return {};
  const paramsStr = url.split('?')[1];
  const paramsArr = paramsStr.split('&');
  const paramsObj = {};
  paramsArr.forEach((param) => {
    let [key, value] = decodeURIComponent(param).split('=');
    // 判断是否转为数字
    value = /^\d+$/.test(value) ? parseInt(value) : value;
    key = key.replace('[]', '');
    if (key in paramsObj) {
      paramsObj[key] = [].concat(paramsObj[key], value);
    } else {
      paramsObj[key] = value;
    }
  });
  return paramsObj;
};
