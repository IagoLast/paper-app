export async function loadFile({ username, filename }) {

    window.dir = '/workspace'

    try {
        console.info('Trying to create workspace dir');
        await pfs.mkdir(dir);
    } catch (err) {
        console.info('Workspace already exists! too stupid to check diferences! Delete everything and start again :(');

        // CHANGA
        indexedDB.deleteDatabase('fs');
        indexedDB.deleteDatabase('fs_lock');
        window.location.reload();
    }

    console.info('Cloning git repo');


    await git.clone({
        dir,
        corsProxy: 'https://cors.isomorphic-git.org',
        url: `https://github.com/${username}/paper-notes`,
        ref: 'master',
        singleBranch: true,
        depth: 1
    });

    console.info('Repo cloned');

    const files = await pfs.readdir(dir);

    console.info('File contents', files);

    return await pfs.readFile(`${dir}/${filename}`, { encoding: 'utf8' });
}


export default { loadFile }