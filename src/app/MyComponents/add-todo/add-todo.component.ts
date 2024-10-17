import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Models/todo';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  @Output('AddToDoEventEmitter') addToDo: EventEmitter<Todo> =
    new EventEmitter();
  title: string;
  desc: string;

  constructor() {}

  ngOnInit(): void {}

  addToDoSubmit() {
    const todo: Todo = {
      sno: 0,
      title: this.title,
      desc: this.desc,
      isActive: true,
    };

    this.addToDo.emit(todo);
  }
}
