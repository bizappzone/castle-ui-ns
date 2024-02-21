import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedCastleNsButton } from '@demo/shared';
import {} from '@bizappzone/castle-ns-button';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedCastleNsButton {}
