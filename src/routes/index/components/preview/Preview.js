import React from 'react';
const worker = new Worker('../../../../parser/parser-web-worker.js', { type: 'module' });


export default class PreviewComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            __html: '',
        };

        worker.addEventListener('message', e => {
            this.setState({ __html: e.data });
            window.MathJax.typeset();
        })


    }
    componentDidMount() {
        worker.postMessage([this.props.value]);
    }

    componentDidUpdate() {
        worker.postMessage([this.props.value]);
    }

    render() {
        return (
            <div className="Preview" ref={this.$preview} dangerouslySetInnerHTML={this.state}></div>
        )
    }
}