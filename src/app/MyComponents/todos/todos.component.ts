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
    let localStorageTotos = localStorage.getItem('todos');

    if (localStorageTotos == null) {
      this.todos = [
        {
          sno: 1,
          title: 'This is Title 1',
          desc: 'Description 1',
          isActive: true,
        },
        {
          sno: 2,
          title: 'This is Title 2',
          desc: 'Description 2',
          isActive: true,
        },
        {
          sno: 3,
          title: 'This is Title 3',
          desc: 'Description 3',
          isActive: true,
        },
      ];
    } else this.getTodosFromLocalStorage();

    console.log('Todos: ', this.todos);
  }

  onDeleteClick(todo: Todo) {
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    this.saveTodosToLocalStorage();
  }

  addToDo(todo: Todo) {
    console.log('Inside the addToDo.');
    if (this.todos.length > 0) {
      let lastIndex = this.todos[this.todos.length - 1].sno;
      todo.sno = lastIndex + 1;
    } else {
      todo.sno = 1;
    }
    this.todos.push(todo);
    this.saveTodosToLocalStorage();
  }

  onToggleDone(sno: number) {
    let todoIndex = this.todos.findIndex((_) => _.sno == sno);
    this.todos[todoIndex].isActive = !this.todos[todoIndex].isActive;
    this.saveTodosToLocalStorage();
  }

  saveTodosToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  getTodosFromLocalStorage() {
    this.todos = JSON.parse(localStorage.getItem('todos'));
  }

  ngOnInit(): void {}
}
