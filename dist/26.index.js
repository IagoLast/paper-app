(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/markdown/markdown.js":
/*!********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/markdown/markdown.js ***!
  \********************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    comments: {\n        blockComment: ['<!--', '-->',]\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '<', close: '>', notIn: ['string'] }\n    ],\n    surroundingPairs: [\n        { open: '(', close: ')' },\n        { open: '[', close: ']' },\n        { open: '`', close: '`' },\n    ],\n    folding: {\n        markers: {\n            start: new RegExp(\"^\\\\s*<!--\\\\s*#?region\\\\b.*-->\"),\n            end: new RegExp(\"^\\\\s*<!--\\\\s*#?endregion\\\\b.*-->\")\n        }\n    }\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.md',\n    // escape codes\n    control: /[\\\\`*_\\[\\]{}()#+\\-\\.!]/,\n    noncontrol: /[^\\\\`*_\\[\\]{}()#+\\-\\.!]/,\n    escapes: /\\\\(?:@control)/,\n    // escape codes for javascript/CSS strings\n    jsescapes: /\\\\(?:[btnfr\\\\\"']|[0-7][0-7]?|[0-3][0-7]{2})/,\n    // non matched elements\n    empty: [\n        'area', 'base', 'basefont', 'br', 'col', 'frame',\n        'hr', 'img', 'input', 'isindex', 'link', 'meta', 'param'\n    ],\n    tokenizer: {\n        root: [\n            // headers (with #)\n            [/^(\\s{0,3})(#+)((?:[^\\\\#]|@escapes)+)((?:#+)?)/, ['white', 'keyword', 'keyword', 'keyword']],\n            // headers (with =)\n            [/^\\s*(=+|\\-+)\\s*$/, 'keyword'],\n            // headers (with ***)\n            [/^\\s*((\\*[ ]?)+)\\s*$/, 'meta.separator'],\n            // quote\n            [/^\\s*>+/, 'comment'],\n            // list (starting with * or number)\n            [/^\\s*([\\*\\-+:]|\\d+\\.)\\s/, 'keyword'],\n            // code block (4 spaces indent)\n            [/^(\\t|[ ]{4})[^ ].*$/, 'string'],\n            // code block (3 tilde)\n            [/^\\s*~~~\\s*((?:\\w|[\\/\\-#])+)?\\s*$/, { token: 'string', next: '@codeblock' }],\n            // github style code blocks (with backticks and language)\n            [/^\\s*```\\s*((?:\\w|[\\/\\-#])+).*$/, { token: 'string', next: '@codeblockgh', nextEmbedded: '$1' }],\n            // github style code blocks (with backticks but no language)\n            [/^\\s*```\\s*$/, { token: 'string', next: '@codeblock' }],\n            // markup within lines\n            { include: '@linecontent' },\n        ],\n        codeblock: [\n            [/^\\s*~~~\\s*$/, { token: 'string', next: '@pop' }],\n            [/^\\s*```\\s*$/, { token: 'string', next: '@pop' }],\n            [/.*$/, 'variable.source'],\n        ],\n        // github style code blocks\n        codeblockgh: [\n            [/```\\s*$/, { token: 'variable.source', next: '@pop', nextEmbedded: '@pop' }],\n            [/[^`]+/, 'variable.source'],\n        ],\n        linecontent: [\n            // escapes\n            [/&\\w+;/, 'string.escape'],\n            [/@escapes/, 'escape'],\n            // various markup\n            [/\\b__([^\\\\_]|@escapes|_(?!_))+__\\b/, 'strong'],\n            [/\\*\\*([^\\\\*]|@escapes|\\*(?!\\*))+\\*\\*/, 'strong'],\n            [/\\b_[^_]+_\\b/, 'emphasis'],\n            [/\\*([^\\\\*]|@escapes)+\\*/, 'emphasis'],\n            [/`([^\\\\`]|@escapes)+`/, 'variable'],\n            // links\n            [/\\{+[^}]+\\}+/, 'string.target'],\n            [/(!?\\[)((?:[^\\]\\\\]|@escapes)*)(\\]\\([^\\)]+\\))/, ['string.link', '', 'string.link']],\n            [/(!?\\[)((?:[^\\]\\\\]|@escapes)*)(\\])/, 'string.link'],\n            // or html\n            { include: 'html' },\n        ],\n        // Note: it is tempting to rather switch to the real HTML mode instead of building our own here\n        // but currently there is a limitation in Monarch that prevents us from doing it: The opening\n        // '<' would start the HTML mode, however there is no way to jump 1 character back to let the\n        // HTML mode also tokenize the opening angle bracket. Thus, even though we could jump to HTML,\n        // we cannot correctly tokenize it in that mode yet.\n        html: [\n            // html tags\n            [/<(\\w+)\\/>/, 'tag'],\n            [/<(\\w+)/, {\n                    cases: {\n                        '@empty': { token: 'tag', next: '@tag.$1' },\n                        '@default': { token: 'tag', next: '@tag.$1' }\n                    }\n                }],\n            [/<\\/(\\w+)\\s*>/, { token: 'tag' }],\n            [/<!--/, 'comment', '@comment']\n        ],\n        comment: [\n            [/[^<\\-]+/, 'comment.content'],\n            [/-->/, 'comment', '@pop'],\n            [/<!--/, 'comment.content.invalid'],\n            [/[<\\-]/, 'comment.content']\n        ],\n        // Almost full HTML tag matching, complete with embedded scripts & styles\n        tag: [\n            [/[ \\t\\r\\n]+/, 'white'],\n            [/(type)(\\s*=\\s*)(\")([^\"]+)(\")/, ['attribute.name.html', 'delimiter.html', 'string.html',\n                    { token: 'string.html', switchTo: '@tag.$S2.$4' },\n                    'string.html']],\n            [/(type)(\\s*=\\s*)(')([^']+)(')/, ['attribute.name.html', 'delimiter.html', 'string.html',\n                    { token: 'string.html', switchTo: '@tag.$S2.$4' },\n                    'string.html']],\n            [/(\\w+)(\\s*=\\s*)(\"[^\"]*\"|'[^']*')/, ['attribute.name.html', 'delimiter.html', 'string.html']],\n            [/\\w+/, 'attribute.name.html'],\n            [/\\/>/, 'tag', '@pop'],\n            [/>/, {\n                    cases: {\n                        '$S2==style': { token: 'tag', switchTo: 'embeddedStyle', nextEmbedded: 'text/css' },\n                        '$S2==script': {\n                            cases: {\n                                '$S3': { token: 'tag', switchTo: 'embeddedScript', nextEmbedded: '$S3' },\n                                '@default': { token: 'tag', switchTo: 'embeddedScript', nextEmbedded: 'text/javascript' }\n                            }\n                        },\n                        '@default': { token: 'tag', next: '@pop' }\n                    }\n                }],\n        ],\n        embeddedStyle: [\n            [/[^<]+/, ''],\n            [/<\\/style\\s*>/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }],\n            [/</, '']\n        ],\n        embeddedScript: [\n            [/[^<]+/, ''],\n            [/<\\/script\\s*>/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }],\n            [/</, '']\n        ],\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/markdown/markdown.js?");

/***/ })

}]);