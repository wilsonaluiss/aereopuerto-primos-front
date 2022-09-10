import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', [Validators.required], [Validators.email]],
    password: ['', [Validators.required]],
    remember: [false]

  });

  constructor(private fb: FormBuilder, private router: Router, private authSvc: AuthService) { }

  ngOnInit(): void {
  }

  async login() {
    try {
      await this.authSvc.login(this.loginForm.value.email, this.loginForm.value.password).then((res) => {
        console.log(res);
        this.router.navigateByUrl('dashboard');

      })
    } catch (error) {
      console.log(error);
    }

  }


}

