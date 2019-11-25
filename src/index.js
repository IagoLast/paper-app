import "@babel/polyfill";

import git from './git/git';
import parser from './parser/parser';
import Editor from './editor/editor';

const $preview = document.getElementById('preview');
const $editor = document.getElementById('editor');

git.loadFile().then(content => {
    new Editor({
        container: $editor,
        preview: $preview,
        parser,
        value: content,
    })
})

