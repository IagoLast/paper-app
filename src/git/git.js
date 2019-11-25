export async function loadFile() {

    window.dir = '/workspace'

    try {
        console.info('Trying to create workspace dir');
        await pfs.mkdir(dir);
    } catch (err) {
        console.info('Workspace already exists!');
        // await pfs.rmdir(dir); // Delete old dir.
        // await pfs.mkdir(dir);
    }

    console.info('Cloning git repo');


    await git.clone({
        dir,
        corsProxy: 'https://cors.isomorphic-git.org',
        url: 'https://github.com/iagolast/paper-app',
        ref: 'master',
        singleBranch: true,
        depth: 1
    });

    console.info('Repo cloned');

    return await pfs.readFile(`${dir}/example.md`, { encoding: 'utf8' });
}


export default { loadFile }