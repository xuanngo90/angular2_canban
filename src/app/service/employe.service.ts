import {Injectable} from '@angular/core';

export class EmployeService {
    GetList():any[]{
        let employees: any[] = [
            {Id: 1, Name: 'Nguyen Van Tuan'},
            {Id: 2, Name: 'Ho Lam Chung'},
            {Id: 3, Name: 'Chan Tu Don'},
            {Id: 4, Name: 'Nomal Kakashi'},
            {Id: 5, Name: 'Opaz Anpako'},
        ];
        return employees;
    }
}