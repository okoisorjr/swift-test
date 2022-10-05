import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/service/auth-guard.service';

@Component({
  selector: 'app-instruction-page',
  templateUrl: './instruction-page.component.html',
  styleUrls: ['./instruction-page.component.css'],
})
export class InstructionPageComponent implements OnInit {
  candidateID: String = '';
  constructor( private router: Router, private authGuard: AuthGuardService) {}

  ngOnInit(): void {
    this.candidateID = this.authGuard.candidateID;
  }

  startExam() {
    this.router.navigate(['/candidate/examination'])
  }
}
