/**
 * 转换时间字符串为大致时间描述
 * @param date 日期：2022-04-06 09:08:11
 * @returns 时间字符串：1个月前
 */
export function makeChTime(date) {
  const inDate = new Date(); //存放传入时间
  const curDate = new Date(); //取得当前时间
  const yearAndTime = date.split(' '); //根据空格组成数组
  const fullYear = yearAndTime[0].split('-'); //根据'-'组成数组
  const time = yearAndTime[1].split(':'); //根据':'组成数组
  time[2] = time[2].split('.')[0]; //修正正确的秒
  inDate.setFullYear(Number(fullYear[0]), Number(fullYear[1]) - 1, Number(fullYear[2])); //设置传入时间的年月日
  inDate.setHours(Number(time[0]), Number(time[1]), Number(time[2])); //设置传入时间的时分秒
  let str = ''; //用于存放返回的字符串
  inDate.setMilliseconds(0); //设置传入时间的毫秒为0
  curDate.setMilliseconds(0); //设置当前时间的毫秒为0
  const YEAR1 = 1000 * 60 * 60 * 24 * 365; //定义一年
  const YEAR2 = 1000 * 60 * 60 * 24 * 365 * 2; //定义两年
  const DAY = 1000 * 60 * 60 * 24; //定义一天
  const HOUR = 1000 * 60 * 60; //定义一个小时
  const MIN = 1000 * 60; //定义1分钟
  const diff = Number(curDate) - Number(inDate); //取得当前时间与传入时间的时间差
  if (diff - YEAR2 >= 0) {
    //判断是否是两年以上
    str += inDate.getFullYear() + '年';
    str += inDate.getMonth() + 1 + '月' + inDate.getDate() + '日';
  } else {
    if (diff - YEAR1 >= 0) {
      //判断是否是1年以上
      str += '1年前';
    } else {
      let subdaynum = -1;
      let workmonthnum = 0;
      for (let i = inDate.getTime(); i <= curDate.getTime(); i = i + DAY) {
        const days = new Date(i);
        subdaynum++;
        if (days.getDate() == 1) {
          workmonthnum++; //记录当前时间与传入时间相差几个月
        }
      }
      if (subdaynum >= 31) {
        //相差天数是否大于31天
        str += workmonthnum + '个月前';
      } else {
        if (subdaynum >= 1) {
          //相差天数是否大于1天
          str += subdaynum + '天前';
        } else {
          const h = parseInt(diff / HOUR + '');
          if (h >= 1) {
            //相差时间是否大于1小时
            if (curDate.getDate() - inDate.getDate() == 1 && h > 12) {
              //是否跨日期相差超过12小时
              str += '1天前';
            } else {
              str += h + '小时前';
            }
          } else {
            const m = parseInt(diff / MIN + '');
            if (m >= 1) {
              //是否相差超过1分钟
              str += m + '分钟前';
            } else {
              str += '刚刚';
            }
          }
        }
      }
    }
  }
  return str;
}

export function format(date, fmt) {
  fmt = fmt || 'yyyy-MM-dd HH:mm:ss';
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+|H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds(),
  };
  if (/(y+|Y+)/.test(fmt)) {
    fmt = fmt.replace(/(y+|Y+)/, (match) => {
      const yearStr = `${date.getFullYear()}`;
      return yearStr.substring(4 - match.length);
    });
  }
  for (const k in o) {
    const reg = new RegExp(`(${k})`);
    if (reg.test(fmt)) {
      fmt = fmt.replace(reg, (match) => {
        return match.length === 1 ? o[k] : ('00' + o[k]).substring(('' + o[k]).length);
      });
    }
  }
  return fmt;
}
