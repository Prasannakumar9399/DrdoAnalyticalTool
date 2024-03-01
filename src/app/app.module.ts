import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material';
import { PrevIllDialogComponent } from "../app/main/admin-board/apps/user/Dialog/prev-ill-dialog/prev-ill-dialog.component";
import { SymptomComponent } from "../app/main/admin-board/apps/user/Dialog/symptom/symptom.component";
import { MatIconModule } from '@angular/material/icon';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { ThemeService } from 'ng2-charts';



const appRoutes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () => import('./main/user-board/user-module.module').then(m => m.UserBoardModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./main/admin-board/admin-module.module').then(m => m.AdminModule)
  },
  // {
  //   path: '**',
  //   redirectTo: 'apps/dashboards/analytics'
  // }
];


@NgModule({
  declarations: [
    AppComponent,
    PrevIllDialogComponent, SymptomComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ReactiveFormsModule, FormsModule, HttpClientModule,
    CommonModule, MatDialogModule, MatIconModule,
  ],
  providers: [
    ThemeService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    }
  ],
  entryComponents: [PrevIllDialogComponent, SymptomComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
