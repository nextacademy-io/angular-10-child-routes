import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ClashService } from '../clash.service';
import { ClashCardComponent } from '../clash-card/clash-card.component';

@Component({
  selector: 'app-clash-list',
  imports: [ClashCardComponent],
  templateUrl: './clash-list.component.html',
})
export class ClashListComponent {
  clashService = inject(ClashService);
  clashes = toSignal(this.clashService.findAll());
}
