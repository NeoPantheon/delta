'use strict';

module.exports = {
    env: {
        commonjs: true,
        es6: true,
        node: true,
        broweser: true
    },
    extends: ['eslint:recommended', 'prettier'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 2018
    },
    rules: {
        strict: 'error'
    }
};
