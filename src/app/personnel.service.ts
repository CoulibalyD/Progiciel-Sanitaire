import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Personnel } from 'src/personnel'; 


@Injectable({
  providedIn: 'root'
})
export class PersonnelService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getPersonnels(): Observable<Personnel[]>{
    return this.http.get<Personnel[]>(`${this.apiServerUrl}/personnel/all`);
  }

  public findPersonnel(findId: number):Observable<Personnel>{
    return this.http.get<Personnel>(`${this.apiServerUrl}/personnel/find/${findId}`);
  }
  public addPersonnel(personnel: Personnel): Observable<Personnel>{
    return this.http.post<Personnel>(`${this.apiServerUrl}/personnel/add`, personnel);
  }

  public updatePersonnel(personnel: Personnel): Observable<Personnel>{
    return this.http.post<Personnel>(`${this.apiServerUrl}/personnel/update`, personnel);
  }

  public deletePersonnel(peronnelId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/personnel/delete/${peronnelId}`);
  }
  public authentification(email: string, password: string): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/personnel/authentification?email=${email}&password=${password}`);
  }
}
