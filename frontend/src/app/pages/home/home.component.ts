import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nomeUsuario: string = 'Usuário';

  authService = inject(AuthService);
  
  ngOnInit(): void {
    const nome = localStorage.getItem('userName');
    if (nome) {
      this.nomeUsuario = nome;
    }
  }

  logout(): void {
    this.authService.logout();
  }
}
