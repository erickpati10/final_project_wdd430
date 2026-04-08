import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Provider } from '../providers/provider.model';

@Injectable({
  providedIn: 'root',
})
export class ProviderService {
  private apiUrl = 'http://localhost:3000/api/providers';

  constructor(private http: HttpClient) {}

  getProviders(): Observable<Provider[]> {
    return this.http.get<Provider[]>(this.apiUrl);
  }

  getProvider(id: string): Observable<Provider> {
    return this.http.get<Provider>(`${this.apiUrl}/${id}`);
  }

  addProvider(provider: Provider): Observable<Provider> {
    return this.http.post<Provider>(this.apiUrl, provider);
  }

  updateProvider(id: string, provider: Provider): Observable<Provider> {
    return this.http.put<Provider>(`${this.apiUrl}/${id}`, provider);
  }

  deleteProvider(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
