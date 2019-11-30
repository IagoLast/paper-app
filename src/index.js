import "@babel/polyfill";

import git from './git/git';
import Paper from './Paper';
// import content from './demo.md';

const $preview = document.getElementById('preview');
const $editor = document.getElementById('editor');

// const username = window.prompt('Insert your github username', 'iagolast');
// const filename = window.prompt('Insert the name of the file to edit', 'demo.md');

git.loadFile(
    { username: 'iagolast', filename: 'demo.md' }
).then(content => {
    new Paper(content);
})

