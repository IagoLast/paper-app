(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/java/java.js":
/*!************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/java/java.js ***!
  \************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    // the default separators except `@$`\n    wordPattern: /(-?\\d*\\.\\d\\w*)|([^\\`\\~\\!\\#\\%\\^\\&\\*\\(\\)\\-\\=\\+\\[\\{\\]\\}\\\\\\|\\;\\:\\'\\\"\\,\\.\\<\\>\\/\\?\\s]+)/g,\n    comments: {\n        lineComment: '//',\n        blockComment: ['/*', '*/'],\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')'],\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' },\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' },\n        { open: '<', close: '>' },\n    ],\n    folding: {\n        markers: {\n            start: new RegExp(\"^\\\\s*//\\\\s*(?:(?:#?region\\\\b)|(?:<editor-fold\\\\b))\"),\n            end: new RegExp(\"^\\\\s*//\\\\s*(?:(?:#?endregion\\\\b)|(?:</editor-fold>))\")\n        }\n    }\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.java',\n    keywords: [\n        'abstract', 'continue', 'for', 'new', 'switch', 'assert', 'default',\n        'goto', 'package', 'synchronized', 'boolean', 'do', 'if', 'private',\n        'this', 'break', 'double', 'implements', 'protected', 'throw', 'byte',\n        'else', 'import', 'public', 'throws', 'case', 'enum', 'instanceof', 'return',\n        'transient', 'catch', 'extends', 'int', 'short', 'try', 'char', 'final',\n        'interface', 'static', 'void', 'class', 'finally', 'long', 'strictfp',\n        'volatile', 'const', 'float', 'native', 'super', 'while', 'true', 'false'\n    ],\n    operators: [\n        '=', '>', '<', '!', '~', '?', ':',\n        '==', '<=', '>=', '!=', '&&', '||', '++', '--',\n        '+', '-', '*', '/', '&', '|', '^', '%', '<<',\n        '>>', '>>>', '+=', '-=', '*=', '/=', '&=', '|=',\n        '^=', '%=', '<<=', '>>=', '>>>='\n    ],\n    // we include these common regular expressions\n    symbols: /[=><!~?:&|+\\-*\\/\\^%]+/,\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n    digits: /\\d+(_+\\d+)*/,\n    octaldigits: /[0-7]+(_+[0-7]+)*/,\n    binarydigits: /[0-1]+(_+[0-1]+)*/,\n    hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,\n    // The main tokenizer for our languages\n    tokenizer: {\n        root: [\n            // identifiers and keywords\n            [/[a-zA-Z_$][\\w$]*/, {\n                    cases: {\n                        '@keywords': { token: 'keyword.$0' },\n                        '@default': 'identifier'\n                    }\n                }],\n            // whitespace\n            { include: '@whitespace' },\n            // delimiters and operators\n            [/[{}()\\[\\]]/, '@brackets'],\n            [/[<>](?!@symbols)/, '@brackets'],\n            [/@symbols/, {\n                    cases: {\n                        '@operators': 'delimiter',\n                        '@default': ''\n                    }\n                }],\n            // @ annotations.\n            [/@\\s*[a-zA-Z_\\$][\\w\\$]*/, 'annotation'],\n            // numbers\n            [/(@digits)[eE]([\\-+]?(@digits))?[fFdD]?/, 'number.float'],\n            [/(@digits)\\.(@digits)([eE][\\-+]?(@digits))?[fFdD]?/, 'number.float'],\n            [/0[xX](@hexdigits)[Ll]?/, 'number.hex'],\n            [/0(@octaldigits)[Ll]?/, 'number.octal'],\n            [/0[bB](@binarydigits)[Ll]?/, 'number.binary'],\n            [/(@digits)[fFdD]/, 'number.float'],\n            [/(@digits)[lL]?/, 'number'],\n            // delimiter: after number because of .\\d floats\n            [/[;,.]/, 'delimiter'],\n            // strings\n            [/\"([^\"\\\\]|\\\\.)*$/, 'string.invalid'],\n            [/\"/, 'string', '@string'],\n            // characters\n            [/'[^\\\\']'/, 'string'],\n            [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],\n            [/'/, 'string.invalid']\n        ],\n        whitespace: [\n            [/[ \\t\\r\\n]+/, ''],\n            [/\\/\\*\\*(?!\\/)/, 'comment.doc', '@javadoc'],\n            [/\\/\\*/, 'comment', '@comment'],\n            [/\\/\\/.*$/, 'comment'],\n        ],\n        comment: [\n            [/[^\\/*]+/, 'comment'],\n            // [/\\/\\*/, 'comment', '@push' ],    // nested comment not allowed :-(\n            // [/\\/\\*/,    'comment.invalid' ],    // this breaks block comments in the shape of /* //*/\n            [/\\*\\//, 'comment', '@pop'],\n            [/[\\/*]/, 'comment']\n        ],\n        //Identical copy of comment above, except for the addition of .doc\n        javadoc: [\n            [/[^\\/*]+/, 'comment.doc'],\n            // [/\\/\\*/, 'comment.doc', '@push' ],    // nested comment not allowed :-(\n            [/\\/\\*/, 'comment.doc.invalid'],\n            [/\\*\\//, 'comment.doc', '@pop'],\n            [/[\\/*]/, 'comment.doc']\n        ],\n        string: [\n            [/[^\\\\\"]+/, 'string'],\n            [/@escapes/, 'string.escape'],\n            [/\\\\./, 'string.escape.invalid'],\n            [/\"/, 'string', '@pop']\n        ],\n    },\n};\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/java/java.js?");

/***/ })

}]);