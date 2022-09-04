import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from './users/users.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HeaderComponent } from './shared/layout/header/header.component';
import { LineChartComponent } from './shared/helper/line-chart/line-chart.component';
import { UserComponent } from './users/user/user.component';


@NgModule({
  declarations: [
    DashboardComponent,
    UsersComponent,
    HeaderComponent,
    LineChartComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgApexchartsModule,
    HttpClientModule
  ]
})
export class DashboardModule { }
