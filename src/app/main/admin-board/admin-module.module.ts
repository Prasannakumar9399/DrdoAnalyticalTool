import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppsComponent } from './apps/apps.component';
import { MaterialModule } from "../../material/material.module";
import { AuthGuard } from 'src/app/_guards';

const routes = [
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    },
    {
        path: '',
        component: AppsComponent,
        loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule),
        canActivate: [AuthGuard]


    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes), MaterialModule,
    ],
    declarations: [
        AppsComponent,

    ],

    providers: [
        AuthGuard
    ]
})
export class AdminModule {
}
