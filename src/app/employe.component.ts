import { Component, OnInit } from '@angular/core';
import { EmployeService } from './service/employe.service';

@Component({
  selector: 'employe-list',
  templateUrl: './employe.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ EmployeService ]
})
export class EmployeListComponent implements OnInit{
    public employees:any[];
    constructor (private employeeService : EmployeService){

    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.employees = this.employeeService.GetList();
    }
    
}
