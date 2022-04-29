import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WelcomeMessage } from '@mono-repo/common';

@Injectable()
export class HomeService {

  constructor(private httpClient: HttpClient) {}

  public get(appName: string): Observable<WelcomeMessage> {
    return this.httpClient.get<WelcomeMessage>('http://localhost:3333/api', { params: { appName }});
  }
}
