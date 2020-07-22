import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Establishment } from '../models/establishment';
import { handleError } from '../utils/handleErrorRequest';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  baseUrl = 'https://geocode.xyz';

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getCity(lat: String, long: String): Observable<any> {
    return this.httpClient
      .get<any>(`${this.baseUrl}/${lat},${long}?json=1`)
      .pipe(retry(2), catchError(handleError));
  }
}
