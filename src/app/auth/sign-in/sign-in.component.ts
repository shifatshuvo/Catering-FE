import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  signInForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.signInForm = this.getForm();
  }

  submit(): void {
    if (!this.signInForm.valid) {
      alert('Invalid Form Data');
      return;
    }

    this.authService.signIn(this.signInForm).subscribe({
      next: res => {
        // console.log(res);
        const id = res.user.id;
        const name = res.user.name;
        const email = res.user.email;
        const role = res.user.role;
        // Convert the user object to a JSON string
        const user = JSON.stringify({"id": id, "name": name, "email": email, "role": role});
        
        

        // Save the JSON string in local storage under the key "user"
        localStorage.setItem('user', user);
        localStorage.setItem('token', res.tokenStr);
        setTimeout(() => {
          this.router.navigate(['/admin/orders']);
        }, 500);
      },
      error: () => alert('Invalid Credentials!!')
    });
  }

  private getForm(): FormGroup {
    return this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(2)]]
    });
  }
}
