// src/app/services/employee.service.ts

import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:3001/api/employees';

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  getById(id: string): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }

  create(employee: Partial<Employee>): Observable<any> {
    return this.http.post(this.baseUrl, employee);
  }

  update(id: string, employee: Partial<Employee>): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, employee);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  
}
