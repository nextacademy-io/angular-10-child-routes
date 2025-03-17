import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeerResponse } from './peer.response';

@Injectable({
  providedIn: 'root',
})
export class PeerResource {
  client = inject(HttpClient);

  findAll(): Observable<PeerResponse[]> {
    return this.client.get<PeerResponse[]>('http://localhost:3000/peer');
  }
}
