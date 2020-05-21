
import { timeout } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import * as _ from 'lodash';

@Injectable()
export class ApiService {

  private baseUrl: string;

  private DEFAULT_MAX_HTTP_TIME = 30000;
  private DOCUMENT_MAX_HTTP_TIME = 50000;

  constructor(private http: HttpClient, protected router: Router) {
  }

  async _fetchRaw(method, url, data, maxTime, type?): Promise<any> {

    // handle undefined data
    if (!_.isObject(data)) {
      data = {};
    }

    // base url for api
    this.baseUrl = 'http://localhost:3000';

    // url of request
    const apiUrl = this.baseUrl + url;
    const apiVerb = method;
    let params = new HttpParams();
    const headers = new HttpHeaders();

    try {

      // handle request type
      if (apiVerb === 'get') {

        _.forOwn(data, (value, key) => {
          const bIterate = _.isObject(value);
          if (bIterate) {
            params = params.append(key, JSON.stringify(value));
          } else {
            params = params.append(key, value);
          }
        });
      }


      let httpRequest = new HttpRequest(_.toUpper(apiVerb), apiUrl, data, {
        headers: headers,
        params: params
      });

      if (type === 'document') {
        httpRequest = new HttpRequest(_.toUpper(apiVerb), apiUrl, data, {
          headers: headers,
          params: params
        });
      }

      console.log('====>>> requet ==> ', httpRequest);

      const result = await this.http
        .request(httpRequest).pipe(
          timeout((maxTime) ? maxTime : this.DEFAULT_MAX_HTTP_TIME))
        .toPromise();

      return _.get(result, 'body', {});

    } catch (ex) {
      throw(ex);
    }

  }

  async _fetch(method, url, data, maxTime, type?) {

    try {

      const result = await this._fetchRaw(method, url, data, maxTime, type);

      return result;

    } catch (ex) {
      return Promise.reject(ex);
    }
  }

  public async get (url, data?, type?, maxTime = this.DEFAULT_MAX_HTTP_TIME): Promise<any> {
    if (type === 'document') {
      maxTime = this.DOCUMENT_MAX_HTTP_TIME;
    }
    return this._fetch('get', url, data, maxTime, type);
  }

  public async post (url, data?, type?, maxTime = this.DEFAULT_MAX_HTTP_TIME): Promise<any> {
    if (type === 'document') {
      maxTime = this.DOCUMENT_MAX_HTTP_TIME;
    }
    return this._fetch('post', url, data, maxTime, type);
  }

  public async delete ( url, data?, maxTime = this.DEFAULT_MAX_HTTP_TIME): Promise<any> {
    return this._fetch('delete', url, data, maxTime);
  }

  public async put (url, data?, maxTime = this.DEFAULT_MAX_HTTP_TIME): Promise<any> {
    return this._fetch('put', url, data, maxTime);
  }

}
