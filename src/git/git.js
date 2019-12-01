import filesystem, { fs, pfs, WOKRSPACE_PATH } from '../filesysyem/filesystem.service';

git.plugins.set('fs', fs)

export async function loadFile({ username, filename }) {

    filesystem.initWorkspace();

    console.info('Cloning git repo');


    await git.clone({
        dir: WOKRSPACE_PATH,
        corsProxy: 'https://cors.isomorphic-git.org',
        url: `https://github.com/${username}/paper-notes`,
        ref: 'master',
        singleBranch: true,
        depth: 1
    });

    console.info('Repo cloned');

    const files = filesystem.listFiles(WOKRSPACE_PATH);

    console.info('File contents', files);

    return await filesystem.readFile(`${WOKRSPACE_PATH}/${filename}`);
}


export default { loadFile }