import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  fetch(): Observable<any> {
    return this.HTTP.get('http://localhost:63817/api/Driver/all');
  }
  constructor(private HTTP: HttpClient) {}
}
