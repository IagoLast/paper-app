import * as monaco from 'monaco-editor';
const worker = new Worker('../parser/parser-web-worker.js', { type: 'module' });

export default class Editor {
    constructor({ container, value, onChangeValue }) {

        this._editor = monaco.editor.create(container, {
            value: value,
            language: "markdown"
        });


        this._editor.getModel().onDidChangeContent(() => {
            worker.postMessage([this._editor.getValue()]);
            onChangeValue(this._editor.getValue());
        });

        // Debounce this
        window.addEventListener("resize", this._editor.layout);
    }
}



