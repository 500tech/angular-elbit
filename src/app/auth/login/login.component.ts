import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      console.log('invalid', this.loginForm);
    } else {
      console.log(this.loginForm.value);
      this.loginForm.reset();
      setTimeout(() => this.router.navigate(['/']), 1000);
    }
  }

  isInvalid(name) {
    const control = this.loginForm.get(name);

    return control.dirty && control.invalid;
  }

  getError(name, error) {
    const control = this.loginForm.get(name);
    if (!control.dirty) {
      return null;
    }
    return control.errors ? control.errors[error] : null;
  }

}
