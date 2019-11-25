import * as monaco from 'monaco-editor';

export default class Editor {
    constructor({ container, parser, preview, value }) {
        this._editor = monaco.editor.create(container, {
            value: value,
            language: "markdown"
        });

        preview.innerHTML = parser.render(this._editor.getValue());
        window.MathJax.typeset();

        this._editor.getModel().onDidChangeContent(() => {
            preview.innerHTML = parser.render(this._editor.getValue());
            window.MathJax.typeset();
        });


        // Debounce this
        window.addEventListener("resize", this._editor.layout);
    }
}



