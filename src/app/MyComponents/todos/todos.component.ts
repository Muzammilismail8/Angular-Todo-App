import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() {
    // this.todos = [
    //   {
    //     sno: 1,
    //     title: 'This is Title 1',
    //     desc: 'Description 1',
    //     isActive: true,
    //   },
    //   {
    //     sno: 2,
    //     title: 'This is Title 2',
    //     desc: 'Description 2',
    //     isActive: true,
    //   },
    //   {
    //     sno: 3,
    //     title: 'This is Title 3',
    //     desc: 'Description 3',
    //     isActive: true,
    //   },
    // ];

    this.todos = JSON.parse(localStorage.getItem('todos'));
  }

  onDeleteClick(todo: Todo) {
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addToDo(todo: Todo) {
    console.log('Inside the addToDo.');
    let lastIndex = this.todos[this.todos.length - 1].sno;
    todo.sno = lastIndex + 1;
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  ngOnInit(): void {}
}
