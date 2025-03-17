import { inject, Injectable } from '@angular/core';
import { combineLatestWith, Observable, of, switchMap } from 'rxjs';
import { Clash } from './clash';
import { PeerResource } from '../api/peer/peer.resource';
import { ClashResource } from '../api/clash/clash.resource';

@Injectable({
  providedIn: 'root',
})
export class ClashService {
  clashResource = inject(ClashResource);
  peerResource = inject(PeerResource);

  findAll(): Observable<Clash[]> {
    return this.clashResource.findAll().pipe(
      combineLatestWith(this.peerResource.findAll()),
      switchMap(([clashes, peers]) => {
        return of(
          clashes.map((clash) => {
            return {
              ...clash,
              createdByPeer: peers.find(
                (peer) => peer.id === clash.createdByPeer
              ),
              participants: peers.filter((peer) =>
                clash.participants.includes(peer.id)
              ),
            } as Clash;
          })
        );
      })
    );
  }

  findById(clashId: string): Observable<Clash> {
    return this.clashResource.findById(clashId).pipe(
      combineLatestWith(this.peerResource.findAll()),
      switchMap(([clash, peers]) => {
        return of({
          ...clash,
          createdByPeer: peers.find((peer) => peer.id === clash.createdByPeer),
          participants: peers.filter((peer) =>
            clash.participants.includes(peer.id)
          ),
        } as Clash);
      })
    );
  }
}
