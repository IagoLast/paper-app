import * as git from 'isomorphic-git'
import filesystem from '../filesystem/filesystem.service';

export const WORKSPACE_PATH = '/workspace'
git.plugins.set('fs', filesystem.fs);


export async function loadFile({ username, filename }) {
    const worspacePath = await filesystem.createWorkspace();


    console.info(`Cloning git repo for ${username} into ${worspacePath}`);

    await git.clone({
        dir: worspacePath,
        corsProxy: 'https://cors.isomorphic-git.org',
        url: `https://github.com/${username}/paper-notes`,
        ref: 'master',
        singleBranch: true,
        depth: 1
    });

    console.info('Repo cloned');

    const files = await filesystem.readdir(worspacePath);

    console.info('Files in workspace', files);

    return filesystem.readFile(`${worspacePath}/${filename}`, { encoding: 'utf8' });
}


export default { loadFile }