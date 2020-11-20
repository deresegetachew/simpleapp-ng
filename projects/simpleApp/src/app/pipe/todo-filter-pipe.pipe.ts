import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Pipe({
  name: 'todoFilterPipe'
})
export class TodoFilterPipePipe implements PipeTransform {

  transform(todos: Todo[], filter: any): unknown {
    if (filter == 'all')
      return todos.filter(t => true);
    else if (filter == 'active')
      return todos.filter(t => !t.completed)
    else if (filter == 'completed')
      return todos.filter(t => t.completed)

  }

}
