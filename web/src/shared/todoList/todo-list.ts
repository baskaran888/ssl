import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector    : 'todo-list',
  templateUrl : './todo-list.html',
  styleUrls   : ['./todo-list.css']
})

export class TodoListComponent {

  @Input() data: any;
  @Input() displayedColumns: any;

  @Output() deleteTask = new EventEmitter();

  constructor(private api: ApiService) {
    console.log('====+>>> ', this.data);
  }

  async delete(id) {
      await this.api.delete(`/todo/${id}`);
      this.deleteTask.emit();
  }

}
