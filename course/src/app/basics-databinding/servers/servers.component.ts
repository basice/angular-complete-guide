import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', // by attribute <div app-servers> </div>
  // selector: '.app-servers',  // by class     <div class='app-servers'> </div>
  selector: 'app-servers',   // by element   <app-servers> </app-servers>
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
