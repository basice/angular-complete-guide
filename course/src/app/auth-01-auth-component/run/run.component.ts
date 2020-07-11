import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-run',
  templateUrl: './run.component.html',
  styleUrls: ['./run.component.css']
})
export class RunComponent implements OnInit {
  loadedFeature = 'recipe';

  constructor() {
  }

  ngOnInit() {
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
