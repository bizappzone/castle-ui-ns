import { Component, NgZone } from '@angular/core';
import { DemoSharedCastleNsButton } from '@demo/shared';
import {} from '@bizappzone/castle-ns-button';

@Component({
  selector: 'demo-castle-ns-button',
  templateUrl: 'castle-ns-button.component.html',
})
export class CastleNsButtonComponent {
  demoShared: DemoSharedCastleNsButton;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedCastleNsButton();
  }
}
