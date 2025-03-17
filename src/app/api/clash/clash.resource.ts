import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClashResponse } from './clash.response';

@Injectable({
  providedIn: 'root',
})
export class ClashResource {
  client = inject(HttpClient);

  findAll(): Observable<ClashResponse[]> {
    return this.client.get<ClashResponse[]>('http://localhost:3000/clash');
  }

  findById(clashId: string): Observable<ClashResponse> {
    return this.client.get<ClashResponse>(
      `http://localhost:3000/clash/${clashId}`
    );
  }
}
