import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Establishment } from '../models/establishment';
import { handleError } from '../utils/handleErrorRequest';

@Injectable({
  providedIn: 'root',
})
export class EstablishmentService {
  baseUrl =
    'https://my-json-server.typicode.com/james-delivery/frontend-challenge';

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getEstablishments(): Observable<Establishment[]> {
    return this.httpClient
      .get<Establishment[]>(`${this.baseUrl}/establishments`)
      .pipe(retry(2), catchError(handleError));
  }
}
