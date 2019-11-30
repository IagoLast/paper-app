const worker = new Worker('../../parser/parser-web-worker.js', { type: 'module' });

export default class Preview {
    constructor({ container, value }) {
        worker.addEventListener('message', e => {
            container.innerHTML = e.data;
            window.MathJax.typeset();
        })

        worker.postMessage([value])
    }

    setValue(value) {
        worker.postMessage([value])
    }
}



