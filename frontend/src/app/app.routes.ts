import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EmployeeListComponent } from './pages/employees/employee-list/employee-list.component';
import { EmployeeFormComponent } from './pages/employees/employee-form/employee-form.component';
import { authGuard } from './services/auth.guard';
import { RegisterComponent } from './pages/users/userRegister.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  {
    path: '',
    loadComponent: () =>
      import('./pages/mainLayout/mainLayout.component').then(m => m.MainLayoutComponent),
    canActivate: [authGuard],
    children: [
      { path: 'employee', component: EmployeeListComponent },
      { path: 'novo', component: EmployeeFormComponent },
      { path: 'editar/:id', component: EmployeeFormComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'home', component: HomeComponent },
    ]
  },

  { path: '**', redirectTo: 'login' }
];
