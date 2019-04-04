# so-string
[![Travis Build Status](https://img.shields.io/travis/indatawetrust/so-string.svg)](https://travis-ci.org/indatawetrust/so-string)

The so-string is minimal version of string.js

## Installation

```bash
npm i so-string
```

## Usage

```js
const s = require('so-string')

console.log(s('hello WORLD', 'slugify'))

// hello-world

console.log(s('The so-string is minimal version of string.js ', 'truncate', 20))

// The so-string is...

```

Thanks [string.js](https://www.npmjs.com/package/string)

## License
[MIT](https://choosealicense.com/licenses/mit/)
