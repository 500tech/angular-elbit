import { PrettyCountPipe } from './pretty-count.pipe';

describe('PrettyCountPipe', () => {
  it('create an instance', () => {
    const pipe = new PrettyCountPipe();
    expect(pipe).toBeTruthy();
  });
});
