import { Controller, Get } from 'routing-controllers'

export interface Todo {
  id: string
  title: string
  status: TODO_STATUS
}

export enum TODO_STATUS {
  DONE = 'DONE',
}

@Controller()
export class TodoController {
  private todo: Todo[] = []

  @Get('/todo')
  getAll(): Todo[] {
    return this.todo
  }
}
