import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NavbarComponent } from '../sharedComponents/navbar/navbar.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: './mainLayout.component.html',
  styleUrls: ['./mainLayout.component.scss']
})
export class MainLayoutComponent {
  authService = inject(AuthService);
  
  userName: string = localStorage.getItem('userName') || 'Usuário';

  logout(): void {
    this.authService.logout();
  }
}
