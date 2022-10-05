import { AuthGuardService } from './../../service/auth-guard.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-end-exam-page',
  templateUrl: './end-exam-page.component.html',
  styleUrls: ['./end-exam-page.component.css'],
})
export class EndExamPageComponent implements OnInit {
  candidateID: String = '';
  score: Number = 0;
  totalQuestions: Number = 0;

  constructor(
    private router: Router,
    private authGuard: AuthGuardService,
    private question: QuestionService
  ) {}

  ngOnInit(): void {
    this.candidateID = this.authGuard.candidateID;
    this.score = this.question.correctResponseCount;
    this.totalQuestions = this.question.getTotalQuestionsCount();
    this.authGuard.candidateID = '';
  }

  backToLogin() {
    this.authGuard.candidateID = '';
    this.question.resetQuestions();
    this.router.navigate(['/login']);
  }
}
