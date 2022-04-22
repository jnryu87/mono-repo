import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomeService {

  constructor(private httpClient: HttpClient) {}

  public get(appName: string): void {
    console.log('get', appName);
  }
}
