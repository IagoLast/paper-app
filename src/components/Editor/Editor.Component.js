import * as monaco from 'monaco-editor';

export default class Editor {
    constructor({ container, value, onChange }) {
        this._editor = monaco.editor.create(container, {
            value: value,
            language: "markdown"
        });


        this._editor.getModel().onDidChangeContent(() => {
            onChange(this._editor.getValue())
        });

        this._editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_O, () => alert('TODO: Open files'));
        this._editor.addCommand(monaco.KeyCode.Escape, () => alert('Exit'));


        // Debounce this
        window.addEventListener("resize", this._editor.layout);
    }
}
