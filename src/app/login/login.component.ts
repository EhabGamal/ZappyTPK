import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loading = false;
  public message: String = '';

  constructor( private authService: AuthService, private router: Router ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.loading = true;
    const payload = {
      name: form.value.username,
      password: form.value.password
    };
    this.authService.login(payload)
    .subscribe(
      (response) => {
        this.router.navigate(['/']);
      },
      (error) => {
        this.message = 'Invalid username or password!';
        this.loading = false;
      }
    );
  }
}
