import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-symptom',
  templateUrl: './symptom.component.html',
  styleUrls: ['./symptom.component.css']
})
export class SymptomComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<SymptomComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  symptoms = this.data.symptoms;

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    console.log(this.symptoms)
  }

}
