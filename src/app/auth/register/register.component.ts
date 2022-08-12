import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    email: ['', [Validators.required], [Validators.email]],
    password: ['', [Validators.required]],
    remember: [false]

  });

  constructor(private fb: FormBuilder, private router: Router, private authSvc: AuthService) { }

  ngOnInit(): void {
  }

  async onRegister() {
    try {
      await this.authSvc.register(this.registerForm.value.email, this.registerForm.value.password);
      this.router.navigateByUrl('/login');

    } catch (error) {
      console.log(error);
    }

  }

}
