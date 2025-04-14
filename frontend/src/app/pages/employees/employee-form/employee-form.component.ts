import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';
import { Employee } from '../../../models/employee.model';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  form: FormGroup;
  isEdit = false;
  employeeId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', Validators.required],
      dataContratacao: ['', Validators.required],
      ativo: [true],
      endereco: this.fb.group({
        rua: ['', Validators.required],
        cep: ['', Validators.required],
        bairro: ['', Validators.required],
        cidade: ['', Validators.required],
        estado: ['', Validators.required],
      }),
    });
  }

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.paramMap.get('id');
    this.isEdit = !!this.employeeId;

    if (this.isEdit) {
      this.loadEmployee();
    }
  }

  loadEmployee(): void {
    if (this.employeeId) {
      this.employeeService.getById(this.employeeId).subscribe((emp) => {
        this.form.patchValue(emp);
      });
    }
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const data: Employee = this.form.value;
    
    if (this.isEdit && this.employeeId) {
      this.employeeService.update(this.employeeId, data).subscribe(() => {
        this.router.navigate(['/employee']);
      });
    } else {
      this.employeeService.create(data).subscribe(() => {
        this.router.navigate(['/employee']);
      });
    }
  }

  get formControls() {
    return this.form.controls;
  }

  goBack(): void {
    this.router.navigate(['/employee']);
  }
}
