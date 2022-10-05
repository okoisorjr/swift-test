import { Injectable } from '@angular/core';

export interface Question {
  id: Number;
  question: String;
  options: String[];
  correct: String;
  response: String;
}

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  questions: Question[] = [];
  correctResponseCount: Number = 0;

  constructor() {
    this.questions = [
      {
        id: 1,
        question:
          '________________ is an accepted common name used to describe Millennials?',
        options: [
          'Digital natives',
          'Internet natives',
          'Computer natives',
          'Cultural natives',
        ],
        correct: 'Digital natives',
        response: '',
      },
      {
        id: 2,
        question: `____________is a statement of estimated income (revenue) and planned expenditure
          over a specified period of  time, usually one year`,
        options: [
          'Statement of Account',
          'Income/Expenditure Plan',
          'Budget',
          'Fiscal Plan',
        ],
        correct: 'Budget',
        response: '',
      },
      {
        id: 3,
        question:
          'Government revenue is usually derived from the following except ?',
        options: ['Taxes', 'Charges and levies', 'Borrowing', 'Salaries'],
        correct: 'Borrowing',
        response: '',
      },
      {
        id: 4,
        question: '_______________ is an advantage of social media',
        options: [
          'Decreasing website traffic',
          'Creation of organic content',
          'Reaching small audience',
          'Recieving negative feedback',
        ],
        correct: 'Creation of organic content',
        response: '',
      },
      {
        id: 5,
        question:
          'The 2020 Budget has been prepared on the ___________ Principles',
        options: [
          'Zero-Based Budget',
          'Incremental Budgeting',
          'Activity Budgeting',
          'Value Proposition Budgeting',
        ],
        correct: 'Zero-Based Budget',
        response: '',
      },
      {
        id: 6,
        question:
          'Accompanying the 2020 Budget was a ____________ for passage into law',
        options: ['Finance Bill', 'Education Bill', 'Tax Bill', 'Heavy Bill'],
        correct: 'Finance Bill',
        response: '',
      },
      {
        id: 7,
        question: 'These are benefits of virtual meetings EXCEPT',
        options: [
          'Affordability',
          'Flexibility',
          'more over-head cost',
          'access to multiple locations',
        ],
        correct: 'more over-head cost',
        response: '',
      },
    ];
  }

  fetchQuestions() {
    return this.questions;
  }

  getTotalQuestionsCount() {
    return this.questions.length;
  }

  resetQuestions() {
    this.questions.forEach((question) => {
      question.response = '';
    });
    return this.questions;
  }
}
