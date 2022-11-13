import { GetTasksCountPipe } from './get-tasks-count.pipe';

describe('GetTasksCountPipe', () => {
  it('create an instance', () => {
    const pipe = new GetTasksCountPipe();
    expect(pipe).toBeTruthy();
  });
});
