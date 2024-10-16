import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  title = "This is title";

  constructor() {
    setTimeout(() => {
      this.title = "Title has been changes";
    }, 2000);
  }
  
  ngOnInit(): void {
  }
  
}
