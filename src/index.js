import * as monaco from 'monaco-editor';
import Markdown from 'markdown-it';
import value from './demo.txt';


import * as pluginSub from 'markdown-it-sub';
import * as pluginSup from 'markdown-it-sup';
import * as pluginMark from 'markdown-it-mark';


const parser = Markdown("default", {
    html: true,
    xhtmlOut: true,
    breaks: true,
});

parser.use(pluginSub);
parser.use(pluginSup);
parser.use(pluginMark);




const preview = document.getElementById('preview');
const editor = monaco.editor.create(document.getElementById("editor"), {
    value,
    language: "markdown"
});

preview.innerHTML = parser.render(editor.getValue());
window.MathJax.typeset();

editor.getModel().onDidChangeContent(() => {
    preview.innerHTML = parser.render(editor.getValue());
    window.MathJax.typeset();
});

// Debounce this
window.addEventListener("resize", editor.layout);

