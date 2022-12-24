import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Materiel } from './materiel';
2
@Injectable({
  providedIn: 'root'
})
export class MaterielService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getMateriels(): Observable<Materiel[]>{
    return this.http.get<Materiel[]>(`${this.apiServerUrl}/materiel/all`);
  }

  public findMateriel(findId: number):Observable<Materiel>{
    return this.http.get<Materiel>(`${this.apiServerUrl}/materiel/find/${findId}`);
  }
  public addMateriel(materiel: Materiel): Observable<Materiel>{
    return this.http.post<Materiel>(`${this.apiServerUrl}/materiel/add`, materiel);
  }

  public updateMateriel(materiel: Materiel): Observable<Materiel>{
    return this.http.post<Materiel>(`${this.apiServerUrl}/materiel/update`, materiel);
  }

  public deleteMateriel(materielId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/materiel/delete/${materielId}`);
  }
}
