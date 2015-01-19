/**
 * lark-xss - index.js
 * Copyright(c) 2014 mdemo(https://github.com/demohi)
 * MIT Licensed
 */

'use strict';
var xss = require('xss');

module.exports =function (options) {
    return function *(next) {
        this.body = xss(this.body, options);
        yield next;
    };
};