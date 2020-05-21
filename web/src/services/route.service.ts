
import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { get, isEmpty } from 'lodash';

@Injectable()
export class RouteService {

  // tslint:disable-next-line:variable-name
  constructor(private _router: Router) {
  }

  // tslint:disable-next-line:variable-name
  public async transition_to(route_url: any, extras?: NavigationExtras) {
    if (!route_url || !route_url.href) {
      return;
    }

    try {

      if (`/login` === route_url.href) {
        await this._router.navigateByUrl(route_url.href);
        return;
      }

      // if we get a request to go to the same route
      if (this._router.url === route_url.href) {
        console.log('skipping duplicate route');
        //return this.logger.log(`skipping duplicate route ${route_url.href}`);
      }

      await this._router.navigateByUrl(route_url.href, extras);
    } catch (err) {
      console.log(`Routing Error: ${err}`);
    }
  }

  public transition_to_login(): void {
    this.transition_to({href: `/login`});
  }

  public transition_to_register(): void {
    this.transition_to({href: `/register`});
  }

  public transition_to_to_do_list(): void {
    this.transition_to({href: `/to-do-list`});
  }
}
