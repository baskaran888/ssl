import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector    : 'todo-list',
  templateUrl : './todo-list.html',
  styleUrls   : ['./todo-list.css']
})

export class TodoListComponent {

  @Input() data: any;
  @Input() displayedColumns: any;

  constructor() {
  }

}
