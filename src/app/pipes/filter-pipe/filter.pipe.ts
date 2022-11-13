import { Pipe, PipeTransform } from '@angular/core';
import { IBoard, ITask } from 'src/app/models/Board';
import { AllFilter, Status } from 'src/app/models/Filter';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(
    array: any[] | null | undefined, 
    searchValue: string, 
    direction: boolean, 
    filterValue: AllFilter
  ): any[] | undefined {
    switch (filterValue) {
      case 'date':
        array = array?.sort((a, b) => this.filterSort(a.created_date, b.created_date, direction));
        break;
      case 'name':
        array = array?.sort((a, b) => this.filterSort(a.name, b.name, direction));
        break;
      case 'D':
      case 'IP':
      case 'TD':
        array = array?.sort((a, b) => this.filterSort(
          this.getAmountOfTasks((a as IBoard).tasks, filterValue), 
          this.getAmountOfTasks((b as IBoard).tasks, filterValue), 
          direction
        ));
        break;
      default:
        break;
    }

    return array?.filter(({ name }) => name?.includes(searchValue));
  }

  filterSort(a: any, b: any, direction: boolean): number {
    if (a === b) return 0;

    if (direction) {
      return a > b ? 1 : -1;
    } else {
      return a < b ? 1 : -1;
    }
  }

  getAmountOfTasks(tasks: ITask[], status: Status): number {
    return tasks.filter(task => task.status === status).length;
  }
}
