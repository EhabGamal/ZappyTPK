import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';

@Injectable()
export class TweetsService {

    constructor(private http: Http, private router: Router, private authService: AuthService) {}

    public get() {
        const headers = new Headers({ 'Authorization': this.authService.token});
        return this.http
            .get(`${environment.apiEndpoint}`, {headers: headers})
            .map((response: Response) => response.json());
    }
}
