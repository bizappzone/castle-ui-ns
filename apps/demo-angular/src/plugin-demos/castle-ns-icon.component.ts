import { Component, NgZone } from '@angular/core';
import { DemoSharedCastleNsIcon } from '@demo/shared';
import {} from '@bizappzone/castle-ns-icon';

@Component({
  selector: 'demo-castle-ns-icon',
  templateUrl: 'castle-ns-icon.component.html',
})
export class CastleNsIconComponent {
  demoShared: DemoSharedCastleNsIcon;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedCastleNsIcon();
  }
}
