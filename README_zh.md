# ean-generator
为亚马逊随机生成ean13码

<p align="center">
    <a href="https://travis-ci.org/wangjue666/ean-generator"><img src="https://travis-ci.org/wangjue666/ean-generator.svg?branch=master" /></a>
     <a href="https://codecov.io/gh/wangjue666/ean-generator"><img src="https://codecov.io/gh/wangjue666/ean-generator/branch/master/graph/badge.svg" /></a>
    <a href="https://npmcharts.com/compare/ean-generator?minimal=true" rel="nofollow"><img src="https://img.shields.io/npm/dm/ean-generator.svg" style="max-width:100%;"></a>
    <a href="https://www.npmjs.com/package/ean-generator" rel="nofollow"><img src="https://img.shields.io/npm/v/ean-generator.svg" style="max-width:100%;"></a>
    <a href="https://www.npmjs.com/package/ean-generator" rel="nofollow"><img src="https://img.shields.io/npm/l/ean-generator.svg?style=flat" style="max-width:100%;"></a>
</p>

<p align="center">
<a href="./README_zh.md">中文</a>|
<a href="./README.md">English</a>
</p>

# Install

```shell
npm install --save ean-generator
```

# Usage

```javascript
import Ean from 'ean-generator';
let ean = new Ean(['030', '031', '039'])
const code = ean.create()
// 039544164511
const arr = ean.createMultiple({size: 3})
// ['0397442001659','0304437586565','0317191566247']
```

For commonJS

```javascript
const Ean = require('ean-generator');
```

# API
## constructor(countryCodeArr)

**countryCodeArr**
Type: `string[]`

设置要随机的前三位国家码

[查看ean的前三位国家码](https://wangjue666.github.io/ean-generator/EAN%E6%9D%A1%E7%A0%81%E5%89%8D%E4%B8%89%E7%A0%81%E5%9B%BD%E5%AE%B6%E4%BB%A3%E7%A0%81%E6%84%8F%E4%B9%89%E5%A6%82%E4%B8%8B.html)

## create(prop)
gen ean-13 code
```javascript
const code = ean.create({countryCode: '123', vendorEan: '456789'})

// 1234567892870
```

### prop?

Type: object

**countryCode？**
Type: `string` | `number` Default: null, len is 3

设置要生成的EAN的前三位 不传就从构造函数里面设置的随机生成一个

**vendorEan？**
Type: `string` | `number` Default: null, len is 6

设置ean的4-10为厂商编码

# createMultiple(prop)
gen multiple ean-13 code, return `array`

**code**

```javascript
const arr = ean.createMultiple({size: 3, countryCode: '123', vendorEan: '456789'})
```


### prop?

**size？**
Type: `number` Default: 1
# isValid(code)

校验EAN是否合法

Type:: `string`

**code**

```javascript
const valid = ean.isValid('1234567890123')
// false

const valid = ean.isValid('1234567892870')
// true

```

# License

MIT License

Copyright (c) 2020 王珏
