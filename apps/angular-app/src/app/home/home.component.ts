import { Component, OnInit } from '@angular/core';

import { common, common2, WelcomeMessage } from '@mono-repo/common';
import { Observable } from 'rxjs';

import { HomeService } from './home.service';
// import { WelcomeMessage } from '@interfaces/WelcomeMessage';

@Component({
  selector: 'angular-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public message!: Observable<WelcomeMessage>;


  constructor(
    private homeService: HomeService
  ) {}

  ngOnInit(): void {
    this.message = this.homeService.get('Angular');
  }
}
