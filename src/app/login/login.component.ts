import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  // loginSubmit(): void {
  //   if (this.loginForm.invalid) {
  //     return;
  //   }

  //   this.authService.login(this.loginForm.value)
  //     .subscribe(
  //       response => {
  //         if (response.username === 'admin' && response.password === 'admin') {
  //           // Redirect to admin dashboard
  //           this.router.navigate(['/Admin']);
  //         } else {
  //           // Redirect to user dashboard
  //           this.router.navigate(['/User']);
  //         }
  //       },
  loginSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
  
    this.authService.login(this.loginForm.value)
      .subscribe(
        response => {
          localStorage.setItem('token', response.token);
          if (response.token) {
            if (this.loginForm.value.username === 'admin' && this.loginForm.value.password === 'admin') {
              // Redirect to admin dashboard
              this.router.navigate(['/Admin']);
            } else {
              // Redirect to user dashboard
              this.router.navigate(['/User'],response.username);
            }
          } else {
            alert('Invalid username or password.');
          }
        },
        error => {
          if (error.status === 404) {
            alert('Invalid user.');
          } else {
            alert('An error occurred. Please try again later.');
          }
        }
      );
  }
}
