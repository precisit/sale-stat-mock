import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './_components/employees/employees.component';
import { FormsModule } from '@angular/forms';
import { EmployeeDetailComponent } from './_components/employee-detail/employee-detail.component';
import { MessagesComponent } from './_components/messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './_components/dashboard/dashboard.component'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { EmployeeSearchComponent } from './_components/employee-search/employee-search.component';
import { SideMenuComponent } from './_components/side-menu/side-menu.component';
import { TopMenuComponent } from './_components/top-menu/top-menu.component';
import { FutureDashboardComponent } from './_components/future-dashboard/future-dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeDetailComponent,
    MessagesComponent,
    DashboardComponent,
    EmployeeSearchComponent,
    SideMenuComponent,
    TopMenuComponent,
    FutureDashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
