export interface Todo {
  id: string
  title: string
  status: TODO_STATUS
}

export enum TODO_STATUS {
  DONE = 'DONE',
}
