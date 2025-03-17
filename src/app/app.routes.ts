import { Routes } from '@angular/router';
import { ClashListComponent } from './clash/clash-list/clash-list.component';
import { PeerListComponent } from './peer/peer-list/peer-list.component';
import { ClashDetailComponent } from './clash/clash-detail/clash-detail.component';

export const routes: Routes = [
  {
    path: 'clashes/:clashId',
    component: ClashDetailComponent,
  },
  {
    path: 'clashes',
    component: ClashListComponent,
  },
  {
    path: 'peers',
    component: PeerListComponent,
  },
  {
    path: '**',
    redirectTo: 'clashes',
  },
];
