import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';
import { Employee } from '../../../models/employee.model';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getAll().subscribe({
      next: (data) => {
        this.employees = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Erro ao carregar funcionários.';
        console.error(err);
        this.isLoading = false;
      }
    });
  }

  deleteEmployee(id: string | undefined): void {
    if (!id) {
      alert('ID do funcionário não encontrado.');
      return;
    }
  
    const confirmDelete = confirm('Tem certeza que deseja deletar este funcionário?');
    if (confirmDelete) {
      this.employeeService.delete(id).subscribe({
        next: () => {
          alert('Funcionário excluído com sucesso!');
          this.getEmployees();
        },
        error: () => {
          alert('Erro ao excluir funcionário.');
        }
      });
    }
  }
  
  goBack(): void {
    location.href = '/home';
  }
  
}
