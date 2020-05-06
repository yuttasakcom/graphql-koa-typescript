import { Controller, Get } from 'routing-controllers'
import { Todo } from './todo.model'
import { TodoService } from './todo.service'

@Controller('/todo')
export class TodoController {
  constructor(private service: TodoService) {}

  @Get()
  getAll(): Todo[] {
    return this.service.get()
  }
}
