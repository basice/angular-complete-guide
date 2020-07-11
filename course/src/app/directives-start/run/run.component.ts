import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-run',
  templateUrl: './run.component.html',
  styleUrls: ['./run.component.css']
})
export class RunComponent implements OnInit {
  numbers = [1, 2, 3, 4, 5];
  onlyOdd = false;

  constructor() {
  }

  ngOnInit() {
  }

}
