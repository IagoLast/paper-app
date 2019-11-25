import Markdown from 'markdown-it';
import * as pluginMark from 'markdown-it-mark';
import * as pluginSub from 'markdown-it-sub';
import * as pluginSup from 'markdown-it-sup';
import * as monaco from 'monaco-editor';


(async () => {

    // GIT

    window.dir = '/tutorial-1'
    // await pfs.rmdir(dir); // Delete old dir.
    // await pfs.mkdir(dir);
    // Behold - it is empty!
    await pfs.readdir(dir);


    await git.clone({
        dir,
        corsProxy: 'https://cors.isomorphic-git.org',
        url: 'https://github.com/iagolast/paper-app',
        ref: 'master',
        singleBranch: true,
        depth: 1
    });

    const value = await pfs.readFile(`${dir}/src/demo.txt`, { encoding: 'utf8' });








    const parser = Markdown("default", {
        html: true,
        xhtmlOut: true,
        breaks: true,
    });

    parser.use(pluginSub);
    parser.use(pluginSup);
    parser.use(pluginMark);


    const preview = document.getElementById('preview');
    const editor = monaco.editor.create(document.getElementById("editor"), {
        value,
        language: "markdown"
    });

    preview.innerHTML = parser.render(editor.getValue());
    window.MathJax.typeset();

    editor.getModel().onDidChangeContent(() => {
        preview.innerHTML = parser.render(editor.getValue());
        window.MathJax.typeset();
    });

    // Debounce this
    window.addEventListener("resize", editor.layout);

})();