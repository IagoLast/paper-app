import "@babel/polyfill";

import git from './git/git';
import parser from './parser/parser';
import Editor from './editor/editor';
// import content from './demo.md';

const $preview = document.getElementById('preview');
const $editor = document.getElementById('editor');

const username = window.prompt('Insert your github username', 'iagolast');
const filename = window.prompt('Insert the name of the file to edit', 'demo.md');

git.loadFile(
    { username, filename }
).then(content => {
    new Editor({
        container: $editor,
        preview: $preview,
        parser,
        value: content,
    })
})

