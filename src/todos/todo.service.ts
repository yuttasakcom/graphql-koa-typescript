import { Service } from 'typedi'
import { Todo } from './todo.model'

@Service()
export class TodoService {
  private todo: Todo[] = []

  get(): Todo[] {
    return this.todo
  }
}
