import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import IndexRoute from './routes/index/index.route';

export default class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Router>
                <Route path="/" default component={IndexRoute} />
            </Router >
        );
    }
}