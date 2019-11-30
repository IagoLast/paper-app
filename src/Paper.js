import Editor from './components/Editor/Editor.Component.js';
import Preview from './components/Preview/Preview.Component';

export default class Paper {
    constructor(content) {
        const $preview = document.getElementById('preview');
        const $editor = document.getElementById('editor');

        const preview = new Preview({ container: $preview, value: content });
        const editor = new Editor({ container: $editor, value: content, onChange: value => preview.setValue(value) });
    }
}