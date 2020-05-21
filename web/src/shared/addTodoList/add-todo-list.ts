import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ApiService } from '../../services/api.service';

import * as moment from 'moment';

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
      expiry: moment(this.expiry).format('YYYY-MM-DD'),
      status: this.status,
      createdAt: moment(new Date()).format('YYYY-MM-DD'),
      updatedAt: moment(new Date()).format('YYYY-MM-DD'),
    };
    console.log('payload', payload);
    const url = '/todo';
    await this.api.post(url, payload);

    this.taskCreated.emit();

  }

}
