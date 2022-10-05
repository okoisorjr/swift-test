import { AuthGuardService } from './../../service/auth-guard.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  error: string = '';
  candidates: String[] = [];

  constructor(private router: Router, private authGuard: AuthGuardService) {}

  ngOnInit(): void {
    this.authGuard.candidateID = '';
    this.candidates = this.authGuard.getCandidates();
  }

  login(formVal: any) {
    // console.log(formVal.value);
    // console.log(formVal);
    // if (formVal.value === '') {
    //   formVal.form.errors = 'Please enter your exam number!';
    // }
    // if (formVal.form.errors !== null) {
    //   console.log(formVal.form.errors);
    //   console.log(formVal);
    // }
    this.error = '';
    if (formVal.controls['exam-number'].value === '') {
      this.error = 'PLEASE ENTER YOUR EXAM NUMBER';
      return;
    } else if (
      !this.candidates.includes(formVal.controls['exam-number'].value, 0)
    ) {
      this.error = 'EXAM NUMBER DOES NOT EXIST';
      return;
    }
    this.authGuard.candidateID = formVal.controls['exam-number'].value;
    this.router.navigate(['/candidate/instructions']);
  }
}
