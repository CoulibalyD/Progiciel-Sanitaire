import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Consultation } from './consultation';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getConsultations(): Observable<Consultation[]>{
    return this.http.get<Consultation[]>(`${this.apiServerUrl}/consultation/all`);
  }

  public findConsultation(findId: number):Observable<Consultation>{
    return this.http.get<Consultation>(`${this.apiServerUrl}/consultation/find/${findId}`);
  }
  public addConsultation(consultation: Consultation): Observable<Consultation>{
    return this.http.post<Consultation>(`${this.apiServerUrl}/consultation/add`, consultation);
  }

  public updateConsultation(consultation: Consultation): Observable<Consultation>{
    return this.http.post<Consultation>(`${this.apiServerUrl}/consultation/update`, consultation);
  }

  public deleteConsultation(consultationId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/consultation/delete/${consultationId}`);
  }

  public findRdvByMedecin(medecin: string):Observable<Consultation[]>{
    return this.http.get<Consultation[]>(`${this.apiServerUrl}/consultation/findS/${medecin}`);
  }
 
}
