import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { ConvertResponse, SymbolsResponse } from '../models/converter.models';

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

  public getConversion(
    from: string,
    to: string,
    amount: number
  ): Observable<ConvertResponse> {
    return this.httpClient.get<ConvertResponse>(`${this.baseUrl}/convert`, {
      params: {
        access_key: environment.fixer_api_key,
        from,
        to,
        amount,
      },
    });
  }
}
