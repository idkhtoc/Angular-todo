import { Pipe, PipeTransform } from '@angular/core';
import { ITask } from 'src/app/models/Board';
import { Status } from 'src/app/models/Filter';

@Pipe({
  name: 'filterTasks'
})
export class FilterTasksPipe implements PipeTransform {

  transform(tasks: ITask[], isArchived: boolean, status?: Status): ITask[] {
    return tasks.filter(task => 
      (status ? task.status === status : true) && 
      (isArchived ? task.is_archived : !task.is_archived)
    );
  }

}
