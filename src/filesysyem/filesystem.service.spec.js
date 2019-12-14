import filesystemService, { pfs, WOKRSPACE_PATH } from './filesystem.service';

describe('filesystem.service', () => {
    describe('.initWorkspace()', () => {
        it('should create a new /Workspace folder', async () => {
            jest.spyOn(pfs, 'mkdir');
            expect(pfs.mkdir).not.toHaveBeenCalled();
            await filesystemService.initWorkspace();
            expect(pfs.mkdir).toHaveBeenCalledWith(WOKRSPACE_PATH);
        });
    });

    describe('.listFiles()', () => {
        it('should return a list of files', async () => {
            const actual = await filesystemService.listFiles('/');
            expect(actual).toEqual(['Workspace']);
        });
    });

    describe('.readFile(path)', () => {
        xit('should readd a file', async () => {});
    });
})