import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ApiService } from '../../services/api.service';

@Component({
  selector    : 'add-todo-list',
  templateUrl : './add-todo-list.html',
  styleUrls   : ['./add-todo-list.css']
})

export class AddTodoListComponent {

  @Output() taskCreated = new EventEmitter();

  public taskName: any;
  public expiry: any;
  public status: any;

  constructor(public api: ApiService) {
  }

  public async save() {
    const payload = {
      taskName: this.taskName,
      expiry: this.expiry,
      status: this.status,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    console.log('payload', payload);
    const url = '/todo';
    await this.api.post(url, payload);

    this.taskCreated.emit();

  }

}
