import { EndExamPageComponent } from './end-exam-page/end-exam-page.component';
import { ExamPageComponent } from './exam-page/exam-page.component';
import { InstructionPageComponent } from './instruction-page/instruction-page.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'instructions', component: InstructionPageComponent },
  { path: 'examination', component: ExamPageComponent },
  { path: 'end-exam', component: EndExamPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
