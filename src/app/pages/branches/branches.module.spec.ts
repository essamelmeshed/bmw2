import { BranchesModule } from './branches.module';

describe('BranchesModule', () => {
  let branchesModule: BranchesModule;

  beforeEach(() => {
    branchesModule = new BranchesModule();
  });

  it('should create an instance', () => {
    expect(branchesModule).toBeTruthy();
  });
});
