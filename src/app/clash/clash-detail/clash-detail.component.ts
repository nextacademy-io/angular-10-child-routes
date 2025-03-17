import {
  Component,
  computed,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ClashService } from '../clash.service';
import { Clash } from '../clash';
import { DatePipe, NgIf } from '@angular/common';
import { ProfilePictureComponent } from '../../profile-picture/profile-picture.component';

@Component({
  selector: 'app-clash-detail',
  imports: [RouterLink, NgIf, ProfilePictureComponent, DatePipe],
  templateUrl: './clash-detail.component.html',
})
export class ClashDetailComponent {
  clashId = input('');

  clashService = inject(ClashService);

  // Simpler solution:
  // clash = signal(() => this.clashService.findById(this.clashId()));

  clash = signal<Clash | null>(null);

  participants = computed(() =>
    this.clash()
      ? [this.clash()!.createdByPeer, ...this.clash()!.participants]
      : []
  );

  constructor() {
    effect(() => {
      this.clashService.findById(this.clashId()).subscribe((clash) => {
        this.clash.set(clash);
      });
    });
  }
}
