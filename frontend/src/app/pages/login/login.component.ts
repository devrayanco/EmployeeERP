import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  constructor() {
    localStorage.clear();
  }

  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', Validators.required],
  });

  errorMessage = '';
  loading = false;

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.loading = true;
      const { email, senha } = this.form.value;

      this.authService.login(email, senha).subscribe({
        next: () => this.router.navigate(['/home']),
        error: (err) => {
          console.error('Erro ao logar:', err);
          this.errorMessage =
            err?.error?.message || err?.error?.error || err?.message || 'Falha no login.';
          this.loading = false;
        },
      });
    } else {
      this.form.markAllAsTouched();
    }
  }

  navigateToRegister(): void {
    this.router.navigate(['/registerUser']);
  }
}
