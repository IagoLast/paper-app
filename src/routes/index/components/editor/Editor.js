import React from 'react';
import Editor from '../../../../editor/Editor';

export default class EditorComponent extends React.Component {
    constructor() {
        super();
        this._editor = undefined;
        this.$editor = React.createRef();
    }

    componentDidMount() {
        this._editor = new Editor({
            container: this.$editor.current,
            value: this.props.value,
            onChangeValue: this.props.onChange,
        });
    }

    render() {
        return (
            <div className="Editor" ref={this.$editor}></div>
        )
    }
}