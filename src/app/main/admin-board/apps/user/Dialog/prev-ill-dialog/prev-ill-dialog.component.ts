import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-prev-ill-dialog',
  templateUrl: './prev-ill-dialog.component.html',
  styleUrls: ['./prev-ill-dialog.component.css']
})
export class PrevIllDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PrevIllDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() { }

}
