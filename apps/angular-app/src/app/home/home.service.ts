import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WelcomeMessage } from '@mono-repo/common';
import { environment } from '../../environments/environment';

@Injectable()
export class HomeService {

  public backendUrl: string = environment.backendUrl;

  constructor(private httpClient: HttpClient) {}

  public get(appName: string): Observable<WelcomeMessage> {
    console.log('backendUrl', this.backendUrl);
    return this.httpClient.get<WelcomeMessage>(`${this.backendUrl}/nest`, { params: { appName }});
  }
}
