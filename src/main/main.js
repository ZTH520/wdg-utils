export const random = (min = 0, max = 1) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const uuid = () => {
  const s = [];
  const hexDigits = '0123456789abcdef';
  for (let i = 0; i < 36; i++) {
    const num = Math.floor(Math.random() * 0x10);
    s[i] = hexDigits[num];
  }
  s[14] = '4';
  s[19] = hexDigits[(s[19] & 0x3) | 0x8];
  s[8] = s[13] = s[18] = s[23] = '-';
  const uuid = s.join('');
  return uuid;
};
