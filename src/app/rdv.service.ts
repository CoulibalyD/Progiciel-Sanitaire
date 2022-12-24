import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rdv } from 'src/rdv';

@Injectable({
  providedIn: 'root'
})
export class RdvService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getRdvs(): Observable<Rdv[]>{
    return this.http.get<Rdv[]>(`${this.apiServerUrl}/rdv/all`);
  }

  public findRdv(findId: number):Observable<Rdv>{
    return this.http.get<Rdv>(`${this.apiServerUrl}/rdv/find/${findId}`);
  }
  public findRdvBySpecialite(findNom: string):Observable<Rdv[]>{
    return this.http.get<Rdv[]>(`${this.apiServerUrl}/rdv/findS/${findNom}`);
  }
  public addRdv(rdv: Rdv): Observable<Rdv>{
    return this.http.post<Rdv>(`${this.apiServerUrl}/rdv/add`, rdv);
  }

  public updateRdv(rdv: Rdv): Observable<Rdv>{
    return this.http.post<Rdv>(`${this.apiServerUrl}/rdv/update`, rdv);
  }

  public deleteRdv(rdvId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/rdv/delete/${rdvId}`);
  }
}
