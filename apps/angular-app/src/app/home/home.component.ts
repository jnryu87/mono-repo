import { Component, OnInit } from '@angular/core';

import { common, common2, WelcomeMessage } from '@mono-repo/common';
import { HomeService } from './home.service';
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

  constructor(
    private homeService: HomeService
  ) {}

  ngOnInit(): void {
    this.homeService.get('angular-app');
    console.log('common', common());
    console.log('common2', common2());
  }
}
