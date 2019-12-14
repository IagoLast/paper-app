import { fs, WOKRSPACE_PATH } from '../filesysyem/filesystem.service';
import * as git from 'isomorphic-git';

git.plugins.set('fs', fs)

export async function clone({ username }) {
    return git.clone({
        dir: WOKRSPACE_PATH,
        corsProxy: 'https://cors.isomorphic-git.org',
        url: `https://github.com/${username}/paper-notes`,
        ref: 'master',
        singleBranch: true,
        depth: 1
    });
}


export default { clone }