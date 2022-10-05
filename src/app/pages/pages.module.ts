import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ExamPageComponent } from './exam-page/exam-page.component';
import { EndExamPageComponent } from './end-exam-page/end-exam-page.component';
import { InstructionPageComponent } from './instruction-page/instruction-page.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ExamPageComponent,
    EndExamPageComponent,
    InstructionPageComponent,
    LoginComponent,
  ],
  imports: [CommonModule, PagesRoutingModule, FormsModule],
})
export class PagesModule {}
