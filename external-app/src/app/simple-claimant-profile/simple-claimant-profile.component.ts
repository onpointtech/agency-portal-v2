import { Component, OnInit, Input } from '@angular/core';

@Component({
  templateUrl: './simple-claimant-profile.component.html',
  styles: []
})
export class SimpleClaimantProfileComponent implements OnInit {
  @Input() firstname: string;
  @Input() lastname: string;
  @Input() phone: number;
  @Input() address: string;
  constructor() { }

  ngOnInit() {
  }

}
