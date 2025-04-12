import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menu = [
    {
      nome: 'Usuário',
      rota: '/register'
    },
    {
      nome: 'Funcionário',
      submenu: [
        { nome: 'Lista de Funcionários', rota: '/employee' },
        { nome: 'Registro de Funcionário', rota: '/novo' }
      ]
    }
  ];
}
