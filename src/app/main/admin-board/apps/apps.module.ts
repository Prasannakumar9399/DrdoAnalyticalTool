import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from "./user/user.component";
import { MaterialModule } from "../../../material/material.module";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartComponent } from './chart/chart.component';
import { AuthGuard } from 'src/app/_guards';


const routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'user-list',
        component: UserComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'chart',
        component: ChartComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes), MaterialModule, FormsModule, ReactiveFormsModule, ChartsModule, CommonModule, FlexLayoutModule
    ],
    declarations: [
        DashboardComponent,
        UserComponent,
        ChartComponent,

    ],

    providers: [

    ],

})
export class AppsModule {
}
