import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-board',
  templateUrl: './user-board.component.html',
  styleUrls: ['./user-board.component.css']
})
export class UserBoardComponent implements OnInit {
  surveyForm: FormGroup;
  breakpoint: number = 3;
  // public mobNumberPattern = "^[0-9]{10}$";
  public heightPattern = "^([1-9]{1})(\.[0-9]{1,2})?$";
  public weightPattern = "^([0-9]{1,3})(\.[0-9]{1,2})?$";
  public pinPattern = "^[1-9][0-9]{5}$";
  constructor(private formBuilder: FormBuilder, private userService: UserService, private snackBar: MatSnackBar) {
    this.createSurveyForm();
  }

  survayData = {}
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  symptoms = ['Sleep Difficulty', 'Coughing', 'Headache', 'Breathing Problems', 'Sweating', 'Fatigue', 'Snoring'];

  ngOnInit() {
    this.initSurveyData();
    this.breakpoint = (window.innerWidth <= 600) ? 2 : 3;
  }
  onResize(event) {
    if (event.target.innerWidth >= 700 && event.target.innerWidth <= 1320)
      this.breakpoint = 2;
    else
      this.breakpoint = (event.target.innerWidth <= 600) ? 2 : 3;
  }
  initSurveyData() {
    for (let i = 0; i < this.symptoms.length; i++) {
      let monthData = {};
      for (let j = 0; j < this.months.length; j++) {
        monthData[this.months[j]] = "0";
      }
      monthData['score'] = 0;
      this.survayData[this.symptoms[i]] = monthData;
    }
  }

  createSurveyForm() {
    this.surveyForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      age: ['', Validators.required],
      height: ['', Validators.required],
      weight: ['', Validators.required],
      gender: ['', Validators.required],
      prevAshthama: [false],
      prevHypertension: [false],
      prevFibrosis: [false],
      prevObesity: [false],
      city: ['', Validators.required],
      pinCode: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      total_score: [0],
    });
  }

  onSubmit() {
    const data = {
      demoData: this.surveyForm.value,
      sympData: this.survayData
    };
    this.userService.postUser(data).subscribe(
      response => {

        if (response.error == false) {
          this.snackBar.open("Thanking You !! Form has been submitted ....", "dismiss", { duration: 2000, verticalPosition: 'top' });
          //code for reset
          this.surveyForm.reset('')
          Object.keys(this.surveyForm.controls).forEach(key => {
            this.surveyForm.controls[key].setErrors(null)
          });
          this.initSurveyData();
        } else {

          this.snackBar.open("Form not submitted..Fill the proper data  !!", "dismiss", { duration: 3000, verticalPosition: 'top' });
        }
      },
      error => {
        this.snackBar.open("Something is wrong !!!  !!", "dismiss", { duration: 3000, verticalPosition: 'top' });
      });
  }

  public calculateTotalScore() {
    let finalScore = 0;
    for (let i = 0; i < this.symptoms.length; i++) {
      for (let j = 0; j < this.months.length; j++) {
        let monScore = this.survayData[this.symptoms[i]][this.months[j]];
        finalScore += parseInt(monScore);
      //   if (this.months[j] === 'Mar' || this.months[j] === 'Nov') {
      //     finalScore += parseInt(monScore);
      //   }
      //   else if (this.months[j] === 'Feb' || this.months[j] === 'Apr' || this.months[j] === 'oct' || this.months[j] === 'Dec') {
      //     finalScore += parseInt(monScore) * 0.5;
          
      //   }
      //   else
      //     finalScore += parseInt(monScore) * 0.2;
      }
    }

    this.surveyForm.controls['total_score'].setValue(finalScore.toFixed(2));

  }

  public onChange(event, symptom) {
    this.calculateTotalScore();
    let monthlySymtomdata = this.survayData[symptom];
    let months = Object.getOwnPropertyNames(monthlySymtomdata);

    let score = 0;
    for (let j = 0; j < months.length; j++) {
      if (months[j] != 'score') {
        score += parseInt(monthlySymtomdata[months[j]])
      }
    }

    this.survayData[symptom]['score'] = score;

  }

}

