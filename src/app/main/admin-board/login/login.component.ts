import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router) { this.createLoginForm(); }

  USERS = [{ username: 'admin1', password: 'drdo@admin', fullname: 'Dr. Ragumani Sugadev', email: 'ragusugadev@gmail.com' }, { username: 'admin2', password: 'drdo@admin', fullname: 'Urmila', email: 'urmila@gmail.com' }]

  ngOnInit() {
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']

    });
  }
  getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }
  submit() {

    let user = this.loginForm.getRawValue();

    for (let i = 0; i < this.USERS.length; i++) {
      if (this.USERS[i].username == user.username && this.USERS[i].password == user.password) {
        localStorage.setItem('token', this.getRandomString(20));
        localStorage.setItem('fullname', this.USERS[i].fullname);
        localStorage.setItem('email', this.USERS[i].email);

        this.router.navigate(['/admin/dashboard']);
        break;
      }
    }
  }

}
