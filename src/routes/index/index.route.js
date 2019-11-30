import React from 'react';


import EditorComponent from './components/editor/Editor';
import PreviewComponent from './components/preview/Preview';
import freezer from '../../state/state';
import { statements } from '@babel/template';

// import git from './git/git';
// import parser from './parser/parser';
// import Editor from './editor/editor';

// const username = window.prompt('Insert your github username', 'iagolast');
// const filename = window.prompt('Insert the name of the file to edit', 'demo.md');

// git.loadFile(
//     { username, filename }
// ).then(content => {

// })



export default class Index extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
    }

    render() {
        return (
            <main>
                <EditorComponent value={freezer.get().value} onChange={value => freezer.get().set({ value })} />
                <PreviewComponent value={freezer.get().value} />
            </main>
        )
    }
}