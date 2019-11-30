import FS from '@isomorphic-git/lightning-fs';

export const WORKSPACE_PATH = '/workspace'
export const fs = new FS("fs", { wipe: true });
export const pfs = fs.promises;

export async function createWorkspace() {
    try {
        await pfs.readdir(WORKSPACE_PATH);
    } catch (err) {
        console.info(`Creating new workspace..`);
        await pfs.mkdir(WORKSPACE_PATH);
    }

    return WORKSPACE_PATH;
}

export async function readdir(filepath, opts) {
    return pfs.readdir(filepath, opts);
}

export async function readFile(filepath, opts) {
    return pfs.readFile(filepath, opts)
}

export default { WORKSPACE_PATH, fs, pfs, createWorkspace, readdir, readFile };