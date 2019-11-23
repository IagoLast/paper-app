(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/objective-c/objective-c.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/objective-c/objective-c.js ***!
  \**************************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    comments: {\n        lineComment: '//',\n        blockComment: ['/*', '*/'],\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' },\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' },\n    ]\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.objective-c',\n    keywords: [\n        '#import',\n        '#include',\n        '#define',\n        '#else',\n        '#endif',\n        '#if',\n        '#ifdef',\n        '#ifndef',\n        '#ident',\n        '#undef',\n        '@class',\n        '@defs',\n        '@dynamic',\n        '@encode',\n        '@end',\n        '@implementation',\n        '@interface',\n        '@package',\n        '@private',\n        '@protected',\n        '@property',\n        '@protocol',\n        '@public',\n        '@selector',\n        '@synthesize',\n        '__declspec',\n        'assign',\n        'auto',\n        'BOOL',\n        'break',\n        'bycopy',\n        'byref',\n        'case',\n        'char',\n        'Class',\n        'const',\n        'copy',\n        'continue',\n        'default',\n        'do',\n        'double',\n        'else',\n        'enum',\n        'extern',\n        'FALSE',\n        'false',\n        'float',\n        'for',\n        'goto',\n        'if',\n        'in',\n        'int',\n        'id',\n        'inout',\n        'IMP',\n        'long',\n        'nil',\n        'nonatomic',\n        'NULL',\n        'oneway',\n        'out',\n        'private',\n        'public',\n        'protected',\n        'readwrite',\n        'readonly',\n        'register',\n        'return',\n        'SEL',\n        'self',\n        'short',\n        'signed',\n        'sizeof',\n        'static',\n        'struct',\n        'super',\n        'switch',\n        'typedef',\n        'TRUE',\n        'true',\n        'union',\n        'unsigned',\n        'volatile',\n        'void',\n        'while',\n    ],\n    decpart: /\\d(_?\\d)*/,\n    decimal: /0|@decpart/,\n    tokenizer: {\n        root: [\n            { include: '@comments' },\n            { include: '@whitespace' },\n            { include: '@numbers' },\n            { include: '@strings' },\n            [/[,:;]/, 'delimiter'],\n            [/[{}\\[\\]()<>]/, '@brackets'],\n            [/[a-zA-Z@#]\\w*/, {\n                    cases: {\n                        '@keywords': 'keyword',\n                        '@default': 'identifier'\n                    }\n                }],\n            [/[<>=\\\\+\\\\-\\\\*\\\\/\\\\^\\\\|\\\\~,]|and\\\\b|or\\\\b|not\\\\b]/, 'operator'],\n        ],\n        whitespace: [\n            [/\\s+/, 'white'],\n        ],\n        comments: [\n            ['\\\\/\\\\*', 'comment', '@comment'],\n            ['\\\\/\\\\/+.*', 'comment'],\n        ],\n        comment: [\n            ['\\\\*\\\\/', 'comment', '@pop'],\n            ['.', 'comment',],\n        ],\n        numbers: [\n            [/0[xX][0-9a-fA-F]*(_?[0-9a-fA-F])*/, 'number.hex'],\n            [/@decimal((\\.@decpart)?([eE][\\-+]?@decpart)?)[fF]*/, {\n                    cases: {\n                        '(\\\\d)*': 'number',\n                        '$0': 'number.float'\n                    }\n                }]\n        ],\n        // Recognize strings, including those broken across lines with \\ (but not without)\n        strings: [\n            [/'$/, 'string.escape', '@popall'],\n            [/'/, 'string.escape', '@stringBody'],\n            [/\"$/, 'string.escape', '@popall'],\n            [/\"/, 'string.escape', '@dblStringBody']\n        ],\n        stringBody: [\n            [/[^\\\\']+$/, 'string', '@popall'],\n            [/[^\\\\']+/, 'string'],\n            [/\\\\./, 'string'],\n            [/'/, 'string.escape', '@popall'],\n            [/\\\\$/, 'string']\n        ],\n        dblStringBody: [\n            [/[^\\\\\"]+$/, 'string', '@popall'],\n            [/[^\\\\\"]+/, 'string'],\n            [/\\\\./, 'string'],\n            [/\"/, 'string.escape', '@popall'],\n            [/\\\\$/, 'string']\n        ]\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/objective-c/objective-c.js?");

/***/ })

}]);