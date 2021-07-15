import { Component, OnInit } from '@angular/core';
import { Employee } from '../../employee';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  employees: Employee[] = [];
  monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  today = new Date();
  selectedYear = this.today.getFullYear();
  selectedMonth = this.monthNames[this.today.getMonth()];
  title = this.selectedYear + ' ' + this.selectedMonth + ' Sum ';

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService
      .getEmployees()
      .subscribe((employees) => (this.employees = employees.slice(1, 5)));
  }
}
