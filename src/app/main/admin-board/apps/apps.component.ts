import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {
  selected: boolean = true;
  opened = false;
  fullname = '';
  email = '';
  constructor(private router: Router) { }

  ngOnInit() {
    this.fullname = localStorage.getItem('fullname');
    this.email = localStorage.getItem('email');
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/admin/login']);

  }

}
