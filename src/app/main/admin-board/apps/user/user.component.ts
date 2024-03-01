import { Component, OnInit, ViewChild } from '@angular/core';
// this should be removed start here
import { MatPaginator, MatSort, } from '@angular/material';
import { MatDialog } from '@angular/material';
import { MatTableDataSource } from '@angular/material';
import { PrevIllDialogComponent } from './Dialog/prev-ill-dialog/prev-ill-dialog.component';
import { SymptomComponent } from "./Dialog/symptom/symptom.component";
import { AdminService } from '../admin.service';
export interface user {
  fullName: string;
  gender: string;
  age: number;
  height: number;
  weight: number;
  city: string;
  pincode: string;
  email: string;
  phonenumber: string;
  total_score: number;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  constructor(private adminService: AdminService, public dialog: MatDialog) { }

  dataSource;
  User: user[];
  userPreIll: any;
  userSymptom: any;
  fullname: string;
  columns: string[] = ['fullname', 'gender', 'age', 'height', 'weight', 'city', 'pincode', 'email', 'phonenumber', 'previousill', 'score', 'total_score'];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  async ngOnInit() {
    await this.getUsers();

  }

  async getUsers() {
    await this.adminService.getAllUser().then((response: any) => {
      this.User = response.user_data;
      this.dataSource = new MatTableDataSource(this.User);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    },
      error => {
        console.log(error);
      });
  }

  async openIll(id) {
    await this.adminService.getUserPreviousIll(id).then((response) => {
      this.userPreIll = response;
      const dialogRef = this.dialog.open(PrevIllDialogComponent, {
        width: '300px',
        height: '400px',
        data: {
          preill: this.userPreIll[0]
        }
      });
    }
    ).catch((error) => { console.log(error) });
  }
  // code for open symptoms dialog
  async openSymptom(id) {

    await this.adminService.getSymptom(id).then((response) => {
      this.userSymptom = response;
      console.log(this.userSymptom);
      const dialogRef = this.dialog.open(SymptomComponent, {
        width: '900px',
        height: '600px',
        data: {
          symptoms: this.userSymptom
        }
      });
    }
    ).catch((error) => { console.log(error) });


  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}