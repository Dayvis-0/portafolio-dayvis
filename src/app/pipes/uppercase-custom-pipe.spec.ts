import { UppercaseCustomPipe } from './uppercase-custom-pipe';

describe('UppercaseCustomPipe', () => {
  it('create an instance', () => {
    const pipe = new UppercaseCustomPipe();
    expect(pipe).toBeTruthy();
  });
});
