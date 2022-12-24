import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AnswerRdv } from './answer';

@Injectable({
  providedIn: 'root'
})
export class AnswerRdvService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public SendAnswer(answer: AnswerRdv): Observable<string>{
    return this.http.post<string>(`${this.apiServerUrl}/email/sendMail`, answer);
  }
}
