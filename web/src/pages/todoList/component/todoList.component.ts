import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

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

  // public data: any;

  public data: IToDoListModel[] = [
    {taskName: '', createdAt: '', updatedAt: '', expiry: '', completionStatus: '', createdBy: ''},
  ];
  public displayedColumns: string[];
  public add = false;
  public list = true;

  async ngOnInit() {
    this.displayedColumns = ['position', 'taskName', 'createdAt', 'updatedAt', 'expiry', 'completionStatus', 'createdBy', 'Actions'];
    console.log('-->', this.data);

    this.data = await this.api.get('/todos');

    await this.format();
    console.log('-->', this.data);
  }

  public async format() {

    for (let i = 0; i < this.data.length; i++) {
      this.data[i].expiry = moment(this.data[i].expiry).format('YYYY-MM-DD');
      this.data[i].createdAt = moment(this.data[i].createdAt).format('YYYY-MM-DD');
      this.data[i].updatedAt = moment(this.data[i].updatedAt).format('YYYY-MM-DD');
      this.data[i].createdBy = await this.api.get(`/user/${this.data[i].createdBy}`);
    }
  }

  public cancel() {
    this.route.transition_to_login();
  }

  public toggleAdd() {
    this.add = true;
    this.list = false;
  }

  public toggleList() {
    this.add = false;
    this.list = true;
  }

  public async refresh() {
    this.data = await this.api.get('/todos');

    await this.format();
  }
}
