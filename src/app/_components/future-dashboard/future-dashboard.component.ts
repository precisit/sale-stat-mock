import { Component, OnInit } from '@angular/core';
import { Employee } from '../../employee';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-future-dashboard',
  templateUrl: './future-dashboard.component.html',
  styleUrls: ['./future-dashboard.component.css'],
})
export class FutureDashboardComponent implements OnInit {
  title = 'Future Predictions ';

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {}
}
