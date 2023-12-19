import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { SymbolsResponse } from '../models/converter.models';

@Injectable({
  providedIn: 'root',
})
export class FixerService {
  private baseUrl: string = 'http://data.fixer.io/api';

  constructor(private httpClient: HttpClient) {}

  public getCurrencies(): Observable<SymbolsResponse> {
    return this.httpClient.get<SymbolsResponse>(`${this.baseUrl}/symbols`, {
      params: { access_key: environment.fixer_api_key },
    });
  }
}
