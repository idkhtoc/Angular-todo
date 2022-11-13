import { Pipe, PipeTransform } from '@angular/core';
import { ITask } from 'src/app/models/Board';
import { Status } from 'src/app/models/Filter';

@Pipe({
  name: 'getTasksCount'
})
export class GetTasksCountPipe implements PipeTransform {

  transform(tasks: ITask[], status?: Status): number {
    if (!status) return tasks.length;

    return tasks.filter(task => task.status === status && !task.is_archived).length;
  }

}
