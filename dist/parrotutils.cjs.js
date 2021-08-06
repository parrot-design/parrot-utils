'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

//取合法的边界值
function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}

exports.clamp = clamp;
