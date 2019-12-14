import FS from '@isomorphic-git/lightning-fs';

export const fs = new FS('paper-fs');
export const pfs = fs.promises
export const WOKRSPACE_PATH = '/Workspace';

export async function initWorkspace() {
    try {
        await pfs.mkdir(WOKRSPACE_PATH);
    } catch (err) {
        console.info('Workspace already exists! ');
    }
}

export async function listFiles(path) {
    return pfs.readdir(path);
}

export async function readFile(path) {
    return pfs.readFile(path, { encoding: 'utf8' });
}

export async function isFile(path) {
    const stat = await pfs.lstat(path);
    return stat.isFile();
}

export default {
    fs, pfs, initWorkspace, listFiles, readFile, isFile,
}