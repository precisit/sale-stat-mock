import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './_components/employees/employees.component';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { EmployeeDetailComponent } from './_components/employee-detail/employee-detail.component';
import { FutureDashboardComponent } from './_components/future-dashboard/future-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'future', component: FutureDashboardComponent },
  { path: 'detail/:id', component: EmployeeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
