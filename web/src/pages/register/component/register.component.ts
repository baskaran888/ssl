import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../../services/api.service';
import { RouteService } from '../../../services/route.service';
import { IRegisterModel } from '../../../models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  constructor(private api: ApiService, private route: RouteService) { }

  public postData: IRegisterModel = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  ngOnInit() {
    console.log('init');
  }

  public cancel() {
    this.route.transition_to_login();
  }

  public async register() {
    try {
      const url = '/register';

      await this.api.post(url, this.postData);
      this.route.transition_to_login();
    } catch (ex) {
      alert('Invalid fields');
    }
  }
}
