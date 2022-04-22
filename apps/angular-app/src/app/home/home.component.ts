import { Component, OnInit } from '@angular/core';

import { common, common2, WelcomeMessage } from '@mono-repo/common';
// import { WelcomeMessage } from '@interfaces/WelcomeMessage';

@Component({
  selector: 'angular-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public message: WelcomeMessage = {
    id: 'Angular',
    message: `Hello`
  };

  constructor() {}

  ngOnInit(): void {
    console.log('common', common());
    console.log('common2', common2());
  }
}
