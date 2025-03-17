import { Component, computed, input } from '@angular/core';
import { Clash } from '../clash';
import { NgIf } from '@angular/common';
import { ProfilePictureComponent } from '../../profile-picture/profile-picture.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-clash-card',
  imports: [NgIf, ProfilePictureComponent, RouterLink],
  templateUrl: './clash-card.component.html',
})
export class ClashCardComponent {
  clash = input.required<Clash>();

  participants = computed(() => [
    this.clash().createdByPeer,
    ...this.clash().participants,
  ]);
}
