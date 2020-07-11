import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-databindning-assignment-solution',
  templateUrl: './cmp-databindning-assignment-solution.component.html',
  styleUrls: ['./cmp-databindning-assignment-solution.component.css']
})
export class CmpDatabindningAssignmentSolutionComponent implements OnInit {

  oddNumbers: Array<number> = [];
  evenNumbers: Array<number> = [];

  constructor() {
  }

  ngOnInit() {
  }

  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
  }
}
