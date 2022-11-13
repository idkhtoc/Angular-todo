import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  })

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  get emailControl(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }

  register(): void {
    const email = this.registerForm.get('email')?.value!;
    const password = this.registerForm.get('password')?.value!;

    this.authService.register(email, password);

    this.emailControl.setValue('');
    this.passwordControl.setValue('');
  }
}
