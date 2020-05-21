import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../../services/api.service';
import { RouteService } from '../../../services/route.service';
import { IToDoListModel } from '../../../models/IToDoListModel';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './todoList.component.html',
  styleUrls: ['./todoList.component.css']
})

export class TodoListComponent implements OnInit {

  constructor(private api: ApiService, private route: RouteService) {

  }

  public data: IToDoListModel[] = [
    {taskName: 'Sample task', createdAt: '20-05-2020', editedAt: '21-5-2020', expiry: '25-05-2020', completionStatus: 'Completed', createdBy: 'Baskaran'},
  ];
  public displayedColumns: string[];

  ngOnInit() {
    this.displayedColumns = ['position', 'taskName', 'createdAt', 'editedAt', 'expiry', 'completionStatus', 'createdBy'];
  }

  public cancel() {
    this.route.transition_to_login();
  }

}
