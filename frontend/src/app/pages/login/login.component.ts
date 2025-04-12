import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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
  form: FormGroup;
  errorMessage = '';

constructor(private fb: FormBuilder, 
  private authService: AuthService,
  private router: Router) {
    this.form = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required),
    });
}


  onSubmit(): void {
    if (this.form.valid) {
      const { email, senha } = this.form.value;

      this.authService.login(email, senha).subscribe({
        next: () => this.router.navigate(['/home']),
        error: (err) => {
          console.error('Erro ao logar:', err);
          this.errorMessage = err?.error?.error || 'Falha no login.';
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
  

  navigateToRegister(): void {
    
    this.router.navigate(['/registerUser']); 
  }
}
