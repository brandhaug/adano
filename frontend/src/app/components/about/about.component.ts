import {Component, Input, OnInit} from '@angular/core';
import {EmployeesService} from '../../services/employees.service';
import {Employee} from '../../models/employee.model';
import {Section} from "../../models/section.model";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @Input() content: Section;
  employees: Employee[];
  apiBaseUrl = environment.apiBaseUrl;

  constructor(private employeesService: EmployeesService) {
  }

  ngOnInit() {
    this.employeesService.getEmployees().subscribe(res => {
      this.employees = res;
    });
  }

}
