const string = require('string');

module.exports = (text, func, ...params) =>
  string(text)[func](...params).s || string(text)[func](...params);
