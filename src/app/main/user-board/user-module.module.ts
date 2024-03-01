import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from "../../material/material.module";
import { UserBoardComponent } from './user-board.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service'; // TODO
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes = [
    {
        path: '',
        component: UserBoardComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        MaterialModule, FormsModule, ReactiveFormsModule, CommonModule
    ],
    declarations: [
        UserBoardComponent
    ],
    providers: [
        UserService
    ]
})
export class UserBoardModule {
}
