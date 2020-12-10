# ean-generator
A randomly generated EAN-13 code FOR Amazon


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
```

For commonJS

```javascript
const Ean = require('ean-generator');
```

# API
## constructor(countryCodeArr)

**countryCodeArr**
Type: `string[]`

random First three country codes for gen ean


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

set First three country codes of EAN bar code

**vendorEan**
Type: `string` | `number` Default: null, len is 6

Set gen ean number 4th to 10th, It represents the manufacturer code

# isValid(code)

Check ean code whether it is legal

Type:: `string`

**code**

```javascript
const valid = ean.isValid('1234567890123')
// false

const valid = ean.isValid('039544164511')
// true

```

# License

MIT License

Copyright (c) 2020 王珏