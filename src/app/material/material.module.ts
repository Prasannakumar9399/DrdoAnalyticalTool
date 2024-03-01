import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material';
const MaterialComponent = [MatButtonModule, MatToolbarModule, MatDividerModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatCheckboxModule, MatTableModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatSortModule, MatPaginatorModule, MatCardModule, MatMenuModule, MatSnackBarModule];

@NgModule({
  imports: [
    MaterialComponent
  ],
  exports: [MaterialComponent
  ]
})
export class MaterialModule { }
