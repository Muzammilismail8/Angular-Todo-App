import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input('AppTodoItemTodo') todo;
  @Output('todoItemOnDeleteEventEmitter') onDelete: EventEmitter<Todo> =
    new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDeleteClick(todo: Todo) {
    this.onDelete.emit(todo);
    console.log(todo.sno);
  }
}
