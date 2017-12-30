import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

    public token: String;

    constructor(private http: Http, private router: Router) {
        this.token = sessionStorage.getItem('token');
    }

    public isAuthenticated() {
        return new Promise(
            (resolve, reject) => resolve(sessionStorage.getItem('token') !== null)
        );
    }

    public login(payload: { name: String, password: String }) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        console.log('Calling login', payload);
        return this.http
          .post(`${environment.apiEndpoint}/login`, payload, { headers: headers })
          .map((response: Response) => {
              this.token = `jwt ${response.json().token}`;
              sessionStorage.setItem('token', `${this.token}`);
              return response.json();
          });
    }

    public logout() {
        localStorage.removeItem('token');
    }
}
