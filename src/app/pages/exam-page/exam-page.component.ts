import { AuthGuardService } from './../../service/auth-guard.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from 'src/app/service/question.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-exam-page',
  templateUrl: './exam-page.component.html',
  styleUrls: ['./exam-page.component.css'],
})
export class ExamPageComponent implements OnInit {
  allQuestion: any[] = [];
  answers: String[] = [];
  labels: String[] = ['(A)', '(B)', '(C)', '(D)'];
  currentQuestion: any;
  currentQuestionIndex: number = 0;
  totalAnswered: number = 0;
  papers: String[] = ['TEST I'];
  currentPaper: String = this.papers[0];
  candidateID: String = '';
  rightAnswers: Number[] = [];
  key: any;

  minutes: any = 10;
  counting: Boolean = false;
  seconds$: any = 60;

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.key = event.key;
    if (this.key === 'a') {
      this.setAnswer(this.currentQuestion.options[0]);
    } else if (this.key === 'b') {
      this.setAnswer(this.currentQuestion.options[1]);
    } else if (this.key === 'c') {
      this.setAnswer(this.currentQuestion.options[2]);
    } else if (this.key === 'd') {
      this.setAnswer(this.currentQuestion.options[3]);
    } else if (this.key === 'n') {
      this.nextQuestion();
    } else if (this.key === 'p') {
      this.previousQuestion();
    }
  }

  constructor(
    private questions: QuestionService,
    private router: Router,
    private authGuard: AuthGuardService
  ) {
    if (this.authGuard.candidateID === '') {
      this.router.navigate(['/login']);
    } else {
      this.allQuestion = this.questions.fetchQuestions();
    }
  }

  ngOnInit(): void {
    this.candidateID = this.authGuard.candidateID;
    this.setCurrentQuestion();
    interval(1000).subscribe(() => {
      this.counting = true;
      this.seconds$--;

      if (this.seconds$ === 0) {
        if (this.minutes === 0 && this.seconds$ === 0) {
          this.counting === false;
          this.endExam();
        }
        this.minutes--;
        this.seconds$ = 59;
      } else if (this.seconds$ === 59) {
        this.minutes--;
      }
    });
  }

  decreaseMinute() {}

  setCurrentQuestion() {
    this.currentQuestion = this.allQuestion[0];
  }

  getQuestion(index: number) {
    this.currentQuestion = this.allQuestion[index];
    this.currentQuestionIndex = index;
  }

  nextQuestion() {
    if (this.currentQuestionIndex + 1 === this.allQuestion.length) {
      return this.currentQuestion;
    } else {
      this.currentQuestionIndex++;
      this.currentQuestion = this.allQuestion[this.currentQuestionIndex];
    }
  }

  previousQuestion() {
    if (this.currentQuestionIndex !== 0) this.currentQuestionIndex--;
    this.currentQuestion = this.allQuestion[this.currentQuestionIndex];
    return;
  }

  setAnswer(answer: number) {
    if (this.currentQuestion.response === '') {
      this.currentQuestion.response = answer;
      if (this.currentQuestion.response === this.currentQuestion.correct) {
        this.rightAnswers.push(this.currentQuestionIndex);
        this.totalAnswered++;
      } else {
        this.totalAnswered++;
      }
    }
    this.currentQuestion.response = answer;
    return;
  }

  onkeyUp(event: any) {
    if (event.key === 'a') {
      this.currentQuestion.response = this.currentQuestion.options[0];
      console.log('Answer is A');
    } else if (event.key === 'b') {
      this.currentQuestion.response = this.currentQuestion.options[1];
      console.log('Answer is B');
    }
  }

  setPaper(paper: String) {
    this.currentPaper = paper;
  }

  endExam() {
    this.router.navigate(['/candidate/end-exam']);
    this.questions.correctResponseCount = this.rightAnswers.length;
  }
}
