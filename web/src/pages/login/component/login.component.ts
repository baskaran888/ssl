import { Component, OnInit } from '@angular/core';

import { LocalStorageService } from '../../../services/localStorage.service';
import { ApiService } from '../../../services/api.service';
import { RouteService } from '../../../services/route.service';
import { ILoginModel } from '../../../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private api: ApiService, private route: RouteService, private storage: LocalStorageService) { }

  public credentials: ILoginModel = {
    email: '',
    password: ''
  };

  ngOnInit() {}

  public gotoRegisterPage() {
    this.route.transition_to_register();
  }

  public async login() {
    try {
      const url = '/login';

      console.log('-----cre-- > ', this.credentials);

      const payload = await this.api.post(url, this.credentials);
      await this.storage.set('accessToken', payload.accessToken);

      this.route.transition_to_to_do_list();
    } catch (ex) {
      alert('Invalid credentials');
    }
  }
}
