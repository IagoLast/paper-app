import "@babel/polyfill";
import filesystem, { WOKRSPACE_PATH } from './filesysyem/filesystem.service';
import git from './git/git';
import Paper from './Paper';


(async () => {
    const username = 'iagolast';
    const filename = 'demo.md';

    await filesystem.initWorkspace();
    await git.clone({ username });

    const content = await filesystem.readFile(`${WOKRSPACE_PATH}/${filename}`);
    new Paper(content);
})();