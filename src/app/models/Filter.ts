export type AllFilter = Status | Filter;

export enum Filter {
  date = 'date',
  name = 'name'
}

export enum FilterType {
  boards = 'B',
  tasks = 'T'
}

export enum Status {
  TD = 'TD',
  IP = 'IP',
  D = 'D'
};