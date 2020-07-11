import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-run',
  templateUrl: './run.component.html',
  styleUrls: ['./run.component.css']
})
export class RunComponent implements OnInit {
  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.autoLogin();
  }
}
