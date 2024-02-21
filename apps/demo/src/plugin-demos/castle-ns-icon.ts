import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedCastleNsIcon } from '@demo/shared';
import {} from '@bizappzone/castle-ns-icon';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedCastleNsIcon {}
