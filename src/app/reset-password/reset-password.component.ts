import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/AuthService';
import { ActivatedRoute, Router } from '@angular/router';
import { env } from '../enum';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm!: FormGroup;
  ParamsId: any;

  constructor(private fb: FormBuilder, private service: AuthService, private route: ActivatedRoute,private router: Router) {
  }

  ngOnInit(): void {
    this.resetPasswordForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
      },
      { validator: this.passwordMatchValidator }
    );
  }


  get email() {
    return this.resetPasswordForm.get('email');
  }

  get password() {
    return this.resetPasswordForm.get('password');
  }

  get confirmPassword() {
    return this.resetPasswordForm.get('confirmPassword');
  }

  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { notMatching: true };
  }

  onSubmit() {
    if (this.resetPasswordForm.valid) {
      debugger;
      const resetform = {
        email: this.resetPasswordForm.get('email')?.value,
        password: this.resetPasswordForm.get('password')?.value,
        confirmPassword: this.resetPasswordForm.get('confirmPassword')?.value
      }
      this.service.resetPassword(resetform).subscribe((res: any) => {
        if (res) {
          alert(res.message);
          window.location.href = env.mainWebSite;
        }else{
          this.router.navigate(['error']);
        }
      });
    }
  }
}
