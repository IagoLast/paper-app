import "@babel/polyfill";

import React from 'react';
import ReactDOM from 'react-dom'

import App from './app';
import state from './state/state';


class AppWrapper extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <App state={state.get()} />
    }
    componentDidMount() {
        state.on('update', () => { this.forceUpdate() });
    }
}


ReactDOM.render(<AppWrapper />, document.getElementById('app'));