import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from "../../../material/material.module";
import { LoginComponent } from "./login.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes = [
    {
        path: '',
        component: LoginComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes), MaterialModule, FormsModule, ReactiveFormsModule
    ],
    declarations: [
        LoginComponent
    ],
    providers: [

    ]
})
export class LoginModule {
}
