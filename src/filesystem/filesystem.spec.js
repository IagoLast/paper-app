import filesystem from './filesystem.service';


describe('filesystem.service', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    })

    describe('.createWorkspace()', () => {
        it('should create a new workspace  when it does not exist', async () => {
            jest.spyOn(filesystem.pfs, 'mkdir');
            expect(filesystem.pfs.mkdir).not.toHaveBeenCalled();
            await filesystem.createWorkspace();
            expect(filesystem.pfs.mkdir).toHaveBeenCalledWith(filesystem.WORKSPACE_PATH);
        });

        it('should not create a new workspace when it exists', async () => {
            jest.spyOn(filesystem.pfs, 'mkdir');
            expect(filesystem.pfs.mkdir).not.toHaveBeenCalled();
            await filesystem.createWorkspace();
            expect(filesystem.pfs.mkdir).not.toHaveBeenCalled();
        });
    });
});

