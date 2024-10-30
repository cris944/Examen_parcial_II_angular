import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Escuela } from '../models/escuela'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EscuelaService {
  private apiUrl = 'http://localhost:8080/api/facultad';

  constructor(private http: HttpClient) {}

  
  getFacultad(): Observable<Escuela[]> {
    return this.http.get<Escuela[]>(this.apiUrl);
  }

  getFacultadById(id: number): Observable<Escuela> {
    return this.http.get<Escuela>(`${this.apiUrl}/${id}`); 
  }

  createFacultad(facultad: Escuela): Observable<Escuela> {
    return this.http.post<Escuela>(this.apiUrl, facultad);
  }

  
  updateFacultad(facultad: Escuela): Observable<Escuela> {
    return this.http.put<Escuela>(`${this.apiUrl}/${facultad.id}`,facultad); 
  }

  deleteFacultad(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`); 
  }
}