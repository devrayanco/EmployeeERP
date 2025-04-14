import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userName: string = 'Usuário';

  menu = [
    { nome: 'Listar Funcionários', rota: '/employee' },
    { nome: 'Cadastrar Funcionário', rota: '/novo' }
  ];

  ngOnInit() {
    const name = localStorage.getItem('userName');
    if (name) {
      this.userName = name;
    }
  }
}
