import { Status } from './Filter';

export interface IBoard {
  name: string,
  user_id: string,
  description: string,
  created_date: Date,
  tasks: ITask[],
  colors: IColors,
  _id: string
}

export interface IColors {
  [Status.TD]: string,
  [Status.IP]: string,
  [Status.D]: string
}

export interface ITask {
  name: string,
  status: Status,
  board: string,
  is_archived: boolean, 
  created_date: Date,
  user_id: string,
  comments: IComment[],
  _id: string
}

export interface IComment {
  comment: string,
  created_date: Date,
  _id: string
}