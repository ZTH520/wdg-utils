<h1 align="center">前端常用工具函数</h1>

<p align="center">汇总常用工具函数</p>
## 简介

前端项目开发中，会经常使用一些工具函数，随着项目数量的增多、工具函数的增多，在每个项目里面都维护一个 util.js 会带来不少的麻烦，所以还是维护一个工具函数包!

## 安装使用

### 1. 安装包使用方式

安装

```shell
# npm
npm install wdg-utils -S

# yarn
yarn add wdg-utils -S
```

ESM 导入使用

```js
import { random } from 'wdg-utils';
console.log(random(1, 10));
```

RequireJS 导入使用

```js
const { random } = require('wdg-utils');
console.log(random(1, 10));
```

### 2. 网页 script 直接引入使用方式

直接拷贝 dist 下的 wdg-utils.umd.js 到项目里面，可直接引用

```html
<!DOCTYPE html>
<html lang="en">
  <body>
    <script src="/dist/wdg-utils.umd.js"></script>
    <script>
      console.log(wdg-utils.random(1, 10))
    </script>
  </body>
</html>
```

## 函数概览

```js
  /**
   * 生成数字范围内的随机数
   * @param min 最小数字
   * @param max 最大数字
   * @returns number类型
   */
  export function random(min, max)
  /**
   * 时间字符串转换为时间戳
   * @param dateStr 字符串格式为 2017-02-10 18:20:30
   * 注意：此处月、日、时分秒、必须为2位数字，否则报错
   * @returns 时间戳
   */
  export function format(date, fmt)
  /**
   * 转换时间字符串为大致时间描述
   * @param date 日期：2022-03-29 09:08:11
   * @returns 时间字符串：1个月前
   */
  export function makeChTime(date)
  /**
   * 判断是否为数组
   * @param input 最小数字
   * @returns boolean
   */
  export function isArray(input)
  /**
   * 判断是否为空
   * @param input 任意值对象
   * @returns boolean
   */
  export function isEmpty(input)
  /**
   * 判断是否为数字
   * @param input 任意值对象
   * @returns boolean
   */
  export function isNumber(input)
  /**
   * 存储localStorage
   * @param name key值
   * @param content value值
   */
  export function setLocal(name, content)
  /**
   * 获取存储localStorage
   * @param name key值
   * @return string
   */
  export function getLocal(name)
  /**
   * 删除localStorage
   * @param name key值
   */
  export function removeLocal(name)
```
