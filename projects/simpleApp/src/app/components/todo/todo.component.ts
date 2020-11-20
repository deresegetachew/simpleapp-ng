import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  animations: [
    trigger('fade', [

      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate(200, style({ opacity: 1, transform: 'translateY(0px)' }))
      ]),

      transition(':leave', [
        animate(200, style({ opacity: 0, transform: 'translateY(30px)' }))
      ]),

    ])
  ]
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  todoTitle: string;
  idForTodo: number;
  beforeEditCache: string;
  filter: string;
  anyRemainingModel: boolean;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {

    this.anyRemainingModel = true;
    this.filter = 'all';
    this.beforeEditCache = '';
    this.idForTodo = -1;
    this.todoTitle = '';
    this.todos = [];
    // this.todos = [
    //   {
    //     'id': 1,
    //     'title': 'Finish Angular Screencast',
    //     'completed': false,
    //     'editing': false,
    //   },
    //   {
    //     'id': 2,
    //     'title': 'Take over world',
    //     'completed': false,
    //     'editing': false,
    //   },
    //   {
    //     'id': 3,
    //     'title': 'One more thing',
    //     'completed': false,
    //     'editing': false,
    //   },
    // ];

    this.todoService.getTodos()
      .subscribe((response) => {
        this.todos = response;
      }, (err) => {
        alert('An unexpected error occurs');
      });

  }

  addTodo(): void {
    if (this.todoTitle.trim().length === 0) {
      return;
    }

    this.todoService.createToDos({
      id: this.idForTodo,
      title: this.todoTitle,
      completed: false,
      editing: false,
    }).subscribe((response) => {
      console.log(response);
      this.todos = [].concat({
        id: this.idForTodo,
        title: response.title,
        completed: false,
        editing: false
      }).concat(this.todos)
    }, (err: Response) => {
      if (err.status === 400) {
        //this.form.setErrors(error.json());
      }
      else
        alert('An unexpected error occurs');
    })



    this.todoTitle = '';
    this.idForTodo = this.idForTodo - 1;
  }


  doneToggle(todo: Todo): void {
    console.log(todo.completed);
    this.todoService.toggleCompleted(todo.id, todo.completed)
      .subscribe((response) => {
        console.log(response);
      },
        (err) => {
          alert('An unexpected error occurs');
        })
  }


  deleteTodo(id: number): void {
    this.todoService.deleteToDo(id).subscribe((response) => {
      this.todos = this.todos.filter(todo => todo.id !== id);
    }, (error: Response) => {
      if (error.status === 404)
        alert("This item has already benn deleted");
      else {
        alert("An unexpected error occuered");
      }
    })
  }

  remaining(): number {
    return this.todos.filter(todo => !todo.completed).length;
  }

  atLeastOneCompleted(): boolean {
    return this.todos.filter(todo => todo.completed).length > 0;
  }

  clearCompleted(): void {
    this.todos = this.todos.filter(todo => !todo.completed);
  }

  checkAllTodos(): void {
    this.todos.forEach(todo => todo.completed = (<HTMLInputElement>event.target).checked)
    this.anyRemainingModel = this.anyRemaining();
  }

  anyRemaining(): boolean {
    return this.remaining() !== 0;
  }

  todosFiltered(): Todo[] {
    if (this.filter === 'all') {
      return this.todos;
    } else if (this.filter === 'active') {
      return this.todos.filter(todo => !todo.completed);
    } else if (this.filter === 'completed') {
      return this.todos.filter(todo => todo.completed);
    }

    return this.todos;
  }

}
